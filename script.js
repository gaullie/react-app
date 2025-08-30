//general
const $ = (param , doc = document) => doc.querySelector(param)
//menu toggle
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
    $('#navUl').classList.toggle("show");
});

// footer year
const year = document.getElementById('year')
year.textContent = new Date().getFullYear();

