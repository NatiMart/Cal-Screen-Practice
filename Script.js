let screen = document.querySelector(".screen");
let allButtonArray = document.querySelectorAll("li");
let currentText = "";

function addAlllisteners(param) {
    for (let i = 0; i < param.length; i++) {
        param[i].addEventListener('click', change);
    }
       
}

addAlllisteners(allButtonArray);

function change(param) {
    if (param === undefined) {
        screen.innerHTML = 'Do Math';
    } else {

    
    currentText = currentText + param.target.innerHTML;
    screen.innerHTML = currentText;
    }
}

console.log(currentText);
