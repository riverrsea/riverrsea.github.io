const current = new Date();
const nowHour = current.getHours();
let html = document.querySelector("html");
const mode = nowHour <= 19 && nowHour >= 8 ? "light" : "dark";
html.setAttribute("data-theme", mode);
