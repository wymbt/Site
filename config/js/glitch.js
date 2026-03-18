const wrap = document.getElementById("glitch");

function createBlock() {
  const block = document.createElement("div");
  block.classList.add("glitch-block");

  const sizeW = Math.random() * 80 + 20; // largura
  const sizeH = Math.random() * 30 + 10; // altura

  block.style.width = sizeW + "px";
  block.style.height = sizeH + "px";

  block.style.left = Math.random() * 100 + "%";
  block.style.top = Math.random() * 100 + "%";

  block.style.background = Math.random() > 0.5 ? "white" : "#ccc";

  wrap.appendChild(block);

  setTimeout(() => {
    block.remove();
  }, 600);
}

/* frequência dos glitches */
setInterval(() => {
  for (let i = 0; i < 3; i++) {
    createBlock();
  }
}, 150);