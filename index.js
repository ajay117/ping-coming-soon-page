let form = document.querySelector("form");
let email = document.querySelector("input");
let error = document.querySelector(".error");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isValid = emailRegExp.test(email.value);
  if (!isValid) {
    email.className = "invalid";
    error.textContent = "Whoops! It looks like you forgot to add your email";
    error.classList.add("active");
    email.placeholder = "example@email.com";
  } else {
    error.textContent = "";
    error.className = "error";
    email.className = "";
    email.value = "";
  }
});
