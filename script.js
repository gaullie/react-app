const menuBtn = document.getElementById("menuBtn");
const ul = document.querySelector("ul");

menuBtn.addEventListener("click", () => {
    ul.classList.toggle("show");
});

