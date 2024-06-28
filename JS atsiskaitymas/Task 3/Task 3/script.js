/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const outputDiv = document.getElementById('output');
document.addEventListener('DOMContentLoaded', (event) => {
document.getElementById('btn').addEventListener('click', () => {
  fetch(ENDPOINT)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
      })
      .then(data => {
        outputDiv.innerHTML = '';
          data.forEach(user => {
              const userItem = document.createElement('div');
              const avatar = document.createElement('img');
              avatar.src = user.avatar;
               avatar.style.width = '50px';
               avatar.style.height = '50px'
               avatar.style.borderRadius = '50%';
              userItem.textContent = `login: ${user.login}, avatar_url: ${user.avatar_url}`;
              outputDiv.appendChild(userItem);

          });
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          outputDiv.textContent = 'Failed to load users.';
      });
    });
});