const button = document.querySelector(".button");
const audio = document.querySelector("#screamer-sound");

function html() {
  button.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = "./img/screamer.jpg";
    img.alt = "Screamer";
    img.classList.add("img-screamer");

    document.body.appendChild(img);
    audio.play();

    setTimeout(() => {
      img.classList.add("show");
    }, 10);

    setTimeout(() => {
      img.remove();
    }, 1000);
  });
}

html();
