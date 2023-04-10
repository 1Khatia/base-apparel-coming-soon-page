const emailinput = document.getElementById("address");
const button = document.getElementById("submit");
const error = document.getElementById("error");
const mark = document.getElementById("mark");
const regex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+).([a-zA-Z]{2,})$/;

button.addEventListener("click", () => {
  if (!regex.test(emailinput.value)) {
    emailinput.style.border = "2px solid red";
    error.style.display = "block";
    mark.style.display = "block";
  } else {
    emailinput.style.border = "";
    error.style.display = "";
    mark.style.display = "";
  }
});
