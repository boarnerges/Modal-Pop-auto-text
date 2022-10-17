const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");
const text = document.getElementById("text");
const prog =
  "Always take care of your physical and mental health. Burnout is, unfortunately, very common in the development industry. But it is a lot easier to prevent burnout before it happens, than to deal with it afterwards. SO IF YOU FEEL IT COMING, TAKE A BREAK. NO SHAME IN THAT";
let idx;

open.addEventListener("click", () => {
  modal_container.classList.add("show");
  setInterval(writeText, 100);
  idx = 0;
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});

function writeText() {
  text.innerText = prog.slice(0, idx);

  idx++;
}
