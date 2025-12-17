const btn = document.getElementById("toggle-theme");

const icon = document.createElement("span");
icon.textContent = "🌞";
btn.textContent = "";
btn.appendChild(icon);

let dark = false;

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  dark = !dark;

  if (dark) {
    icon.textContent = "🌙";
  } else {
    icon.textContent = "🌞";
  }
});
