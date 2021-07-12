let mycard = document.querySelector("#myNumber");
let mytype = document.querySelectorAll("#icon");
let my_counter = document.querySelector("#counter");

let type = ["♦", "♥", "♠", "♣"];

window.onload = () => {
  const generaterandom = (val) => Math.floor(Math.random() * val + 1);
  let randomtype = generaterandom(4) - 1;
  generateNumber = () => {
    let number = generaterandom(14);
    if (number === 11) return "K";
    if (number === 12) return "J";
    if (number === 13) return "Q";
    if (number === 14) return "A";

    return number;
  };

  mycard.innerHTML = generateNumber();

  let symbol_top = mytype[0];
  let symbol_bottom = mytype[1];

  symbol_top.innerHTML = type[randomtype];
  symbol_bottom.innerHTML = type[randomtype];

  randomtype === 1
    ? (symbol_top.style.color = "red")
    : (symbol_top.style.color = "black");
  randomtype === 1
    ? (symbol_bottom.style.color = "red")
    : (symbol_bottom.style.color = "black");
};

my_counter.style.color = "red";

var timeleft = 10;
var Timer = setInterval(function () {
  if (timeleft <= 0) {
    timeleft = 10;
    location.reload();
  }
  my_counter.innerHTML = `New card in: ${timeleft}`;
  timeleft -= 1;
}, 1000);
