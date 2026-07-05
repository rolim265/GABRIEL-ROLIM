const cursor = document.getElementById("cursor");
const mouseLight = document.getElementById("mouse-light");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

// captura posição do mouse
window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// animação suave (efeito fluido)
function animateCursor() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
    mouseLight.style.transform = `translate(${currentX - 100}px, ${currentY - 100}px)`;

    requestAnimationFrame(animateCursor);
}

animateCursor();