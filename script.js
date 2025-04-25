// let body = document.querySelector("body");
// let btn = document.querySelector("button");
// let section = document.querySelector("section");
// btn.addEventListener("click", () => {
//   let mode = localStorage.getItem("class");
//   localStorage.setItem("class", "mode");
//   if (mode) {
//     body.classList.add("dark");
//     section.classList.("dark");
//   }
// });

let span = document.querySelectorAll("span");
let spanlar = document.getElementById("spanlar");
let birinchi = document.getElementById("birinchi");
let ikkinchi = document.getElementById("ikkinchi");
let uchinchi = document.getElementById("uchinchi");
let menu = document.getElementById("menu");
spanlar.addEventListener("click", () => {
  birinchi.classList.toggle("ss");
  ikkinchi.classList.toggle("sss");
  ikkinchi.classList.toggle("ssss");
  menu.classList.toggle("menubar");
});
