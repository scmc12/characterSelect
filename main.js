const mario = document.querySelector("#mario");
const luigi = document.querySelector("#luigi");
const donk = document.querySelector("#donk");
const yoshi = document.querySelector("#yoshi");
const toad = document.querySelector("#toad");

document.querySelector("#marioNext").addEventListener("click", marioNext);
document.querySelector("#luigiNext").addEventListener("click", luigiNext);
document.querySelector("#donkNext").addEventListener("click", donkNext);
document.querySelector("#yoshiNext").addEventListener("click", yoshiNext);
document.querySelector("#toadNext").addEventListener("click", toadNext);
document
  .querySelector("#annoucentCharacter")
  .addEventListener("click", chosenCharacter);

function marioNext() {
  yoshi.classList.toggle("hidden");
  toad.classList.toggle("hidden");
  luigi.classList.toggle("hidden");
  donk.classList.toggle("hidden");
  mario.classList.remove("hidden");
}
function luigiNext() {
  yoshi.classList.toggle("hidden");
  toad.classList.toggle("hidden");
  mario.classList.toggle("hidden");
  donk.classList.toggle("hidden");
  luigi.classList.remove("hidden");
}
function donkNext() {
  yoshi.classList.toggle("hidden");
  toad.classList.toggle("hidden");
  luigi.classList.toggle("hidden");
  mario.classList.toggle("hidden");
  donk.classList.remove("hidden");
}
function yoshiNext() {
  mario.classList.toggle("hidden");
  toad.classList.toggle("hidden");
  luigi.classList.toggle("hidden");
  donk.classList.toggle("hidden");
  yoshi.classList.remove("hidden");
}
function toadNext() {
  mario.classList.toggle("hidden");
  yoshi.classList.toggle("hidden");
  luigi.classList.toggle("hidden");
  donk.classList.toggle("hidden");
  toad.classList.remove("hidden");
}
