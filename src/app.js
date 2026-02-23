import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Arrays
let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

// randomizar
function getRandomItem(list) {
  let randomNumber = Math.random() * list.length;
  let position = Math.floor(randomNumber);
  return list[position];
}

// crear excusa
function makeExcuse() {
  let part1 = getRandomItem(who);
  let part2 = getRandomItem(action);
  let part3 = getRandomItem(what);
  let part4 = getRandomItem(when);

  let fullExcuse = part1 + " " + part2 + " " + part3 + " " + part4;
  return fullExcuse;
}

// insertar
window.onload = function () {
  let excuseElement = document.querySelector("#excuse");
  let excuseText = makeExcuse();
  excuseElement.innerHTML = excuseText;
};
