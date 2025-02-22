const hoverCircle = document.querySelector(".hover-circle");

document.querySelector(".navbar").addEventListener("mousemove", (e) => {
    hoverCircle.style.left = `${e.clientX - 75}px`;
    hoverCircle.style.top = `${e.clientY - 75}px`;
});