//Select Ui Elements
const alertClose = document.querySelectorAll(".alert-close");

//Define EventListner
alertClose.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.add("scale-0");
  });
});
