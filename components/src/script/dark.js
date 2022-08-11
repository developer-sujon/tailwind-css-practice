//Define Ui
const root = document.getElementById("root");
const toggle = document.getElementById("toggle");
const dark = localStorage.getItem("dark");
const sun = `<i class="bi bi-sun text-white text-lg cursor-pointer"></i>`;
const moon = `<i class="bi bi-moon text-white text-lg cursor-pointer"></i>`;

if (dark) {
  root.classList.add("dark");
  toggle.innerHTML = sun;
} else {
  root.classList.remove("dark");
  toggle.innerHTML = moon;
}

//enable dark mode
const enableDarkMode = () => {
  localStorage.setItem("dark", "enable");
  root.classList.add("dark");
  toggle.innerHTML = sun;
};

//disable dark mode
const disableDarkMode = () => {
  localStorage.setItem("dark", "");
  root.classList.remove("dark");
  toggle.innerHTML = moon;
};

toggle.addEventListener("click", (e) => {
  const dark = localStorage.getItem("dark");
  if (dark) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});
