/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.getElementById('output');
document.addEventListener('DOMContentLoaded', (event) => {
    fetch(ENDPOINT)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
          const output = document.getElementById('output');
          output.innerHTML = '';
          data.forEach(car => {
              const carCard = document.createElement('div');
              carCard.className = 'car-card';

              const carBrand = document.createElement('h2');
              carBrand.textContent = car.brand;
              carCard.appendChild(carBrand);

              const carModels = document.createElement('ul');
              car.models.forEach(model => {
                  const modelItem = document.createElement('li');
                  modelItem.textContent = model;
                  carModels.appendChild(modelItem);
              });
              carCard.appendChild(carModels);

              output.appendChild(carCard);
          });
      })
      .catch(error => {
          console.error('Error fetching..:', error);
          const output = document.getElementById('output');
          output.textContent = 'Failed to load resources.';
      });
});
      