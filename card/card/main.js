const card = document.querySelector(".card__inner");
let overlay = document.querySelector(".overlay");

let flip = 0;
let rotateX;
let rotateY;

card.addEventListener("click", function () {
  flip === 0 ? (flip = 180) : (flip = 0);
  card.style = `transform : perspective(2850px) rotateX(${rotateX}deg) rotateY(${
    rotateY + flip
  }deg)`;
});

card.addEventListener("mousemove", function (e) {
  let x = e.offsetX;
  let y = e.offsetY;
  rotateY = (-1 / 10) * x + 20;
  rotateX = (4 / 50) * y - 20;

  overlay.style = `background-position : ${x / 5 + y / 5}%; filter : opacity(${
    x / 200
  }) brightness(1.2)`;

  card.style = `transform : perspective(2850px) rotateX(${rotateX}deg) rotateY(${
    rotateY + flip
  }deg)`;
});

card.addEventListener("mouseout", function () {
  overlay.style = "filter : opacity(0)";
  card.style = `transform : perspective(2850px) rotateX(0deg) rotateY(${flip}deg)`;
});
