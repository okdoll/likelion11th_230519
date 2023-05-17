const indicator = document.querySelector(".indicator");
const input = document.getElementById("passwordInput");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");

let regExpWeak = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?_~-]).{0,3}$/;
let regExpMedium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?_~-]).{4,5}$/;
let regExpStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?_~-]).{6,}$/;

function trigger() {
  if (input.value !== "") {
    indicator.style.display = "block";
    indicator.style.display = "flex";

    if (regExpWeak.test(input.value)) {
      weak.classList.add("active");
      text.textContent = "약함";
      text.style.display = "block";
    } else {
      weak.classList.remove("active");
    }

    if (regExpMedium.test(input.value)) {
      medium.classList.add("active");
      text.textContent = "보통";
      text.style.display = "block";
    } else {
      medium.classList.remove("active");
    }

    if (regExpStrong.test(input.value)) {
      strong.classList.add("active");
      text.textContent = "강함";
      text.style.display = "block";
    } else {
      strong.classList.remove("active");
    }

    showBtn.style.display = "block";
    showBtn.onclick = function () {
      if (input.type === "password") {
        input.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.backgroundColor = "#5364FF";
      } else {
        input.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.backgroundColor = "#ccc";
      }
    };
  } else {
    indicator.style.display = "none";
    text.style.display = "none";
    showBtn.style.display = "none";
  }
}
