// Mouse Cursor Display
let mouseX, mouseY;
let mousePos = document.getElementById("mouse");
let mouseImg = document.createElement("img");
mouseImg.src = "assets/cursor.png";
mouseImg.alt = ".";
mouseImg.style.width = "30px";
mousePos.appendChild(mouseImg);

document.body.addEventListener('mousemove', event => {
    mouseX = event.pageX + "px";
    mouseY = event.pageY + "px";
    mousePos.style.left = mouseX;
    mousePos.style.top = mouseY;
});

