/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

var clicksCount = 0;
var button = document.getElementById('btn__element');
var count = document.getElementById('btn__state');

button.addEventListener('click', () => {
  clicksCount++;
  count.textContent = clicksCount;
});
 