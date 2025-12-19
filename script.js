function changeBlue() {
    document.body.style.backgroundColor= "blue";
}
function changeCyan() {
    document.body.style.backgroundColor= "cyan";
}
function changeGreen() {
    document.body.style.backgroundColor= "green";
}
function randomColor() {
    let colors = ["blue","cyan","green"];
    let index = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor= colors[index];
}