"use strict";
const _p = document.querySelectorAll("p");
window.addEventListener("mouseover", () => {
  _p.forEach((p) => {
    p.style.color = "white";
  });
});
window.addEventListener("mouseout", () => {
  _p.forEach((p) => {
    p.style.color = "black";
  });
});
const _h1 = document.querySelector("h1");

setTimeout(() => {
  _h1.innerHTML = "javascript and express";
}, 3000);
