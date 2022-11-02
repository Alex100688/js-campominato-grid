"use strict";
const campoBox=document.querySelector(".campo-box")
for (let i = 1; i <=100; i++) {
    const boxCell=document.createElement("div");
    boxCell.innerHTML=(i);
    boxCell.classList.add("cell-box");
    campoBox.append(boxCell);
}