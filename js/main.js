"use strict";
const displayBox=document.querySelector(".display-box");
const giocoPlay=document.querySelector(".btn-play");
giocoPlay.addEventListener(`click`, function(){
    displayBox.classList.toggle("display-box");
    const campoBox=document.querySelector(".campo-box");
    for (let i = 1; i <=100; i++) {
        const cellBox=document.createElement("div");
        cellBox.innerHTML=(i);
        cellBox.classList.add("cell-box");
        campoBox.append(cellBox);
    }
})