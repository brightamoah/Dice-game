"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const openModalBtns = document.querySelectorAll(".show-modal");
// console.log(openModalBtns);
// console.log(closeModalBtn);
// console.log(overlay);
// console.log(modal);

const openModal = function () {
    // console.log(`Buttton clicked`);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < openModalBtns.length; i++) {
    openModalBtns[i].addEventListener("click", openModal);
}

closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {

        closeModal();
    }
});