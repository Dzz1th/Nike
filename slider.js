const images = document.querySelectorAll(".image > li");
const list = document.querySelectorAll(".description > li");
const buttons = document.querySelectorAll(".buttons > button")

console.log(images[0] , images[2]);

function changeSlide(slideNumber) {
   let [ImgElem , listElem , buttElem] = document.getElementsByClassName("slide");
   ImgElem.classList.remove("slide");
   listElem.classList.remove("slide");
   images[slideNumber].classList.add("slide");
   list[slideNumber].classList.add("slide");
   buttElem.classList.remove("slide");
   button = document.getElementById(slideNumber);
   button.classList.add("slide");
}