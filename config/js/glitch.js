const wrap = document.getElementById("glitch");

function createBlock() {
  const block = document.createElement("div");
  block.classList.add("glitch-block");

  const sizeW = Math.random() * 30 + 5;
  const sizeH = Math.random() * 15 + 3;

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

setInterval(() => {
  for (let i = 0; i < 10; i++) {
    createBlock();
  }
}, 100);
