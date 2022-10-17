const userInput = document.getElementById("userInput");
const content = document.getElementById("content");
const send = document.getElementById("send");

const changeColor = (color) => {
    const userValue = userInput.value;
    content.style.backgroundColor = color;
}
send.onclick = () =>{
    changeColor(userInput.value);
};

content.onmouseover = () =>{
    changeColor(userInput.value);
};

/*
send.onclick = () => {
    const userValue = userInput.value;
    content.style.backgroundColor = userValue;
 }

content.onmouseover = () => {
    const userValue = userInput.value;
    content.style.backgroundColor = userValue;
}
*/
content.onmouseout = () => {
    content.innerHTML += "<p>Ahoj</p>";
    
}

window.onload = () => {
    changeColor("pink");
 }