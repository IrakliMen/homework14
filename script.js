// title
let title = document.querySelector(".title");
title.textContent = "ვენეცია";
title.className = "title";
// text
let text = document.querySelector(".text");
text.textContent =
    "ვენეცია ვენეტოს რეგიონის დედაქალია. სახელი მომდინარეობს აქ მაცხოვრებელი ანტიკური პერიოდის ხალხისგან, რომლებსაც ვენეტები ეწოდებოდათ.";
text.style.color = "brown";
text.style.fontSize = "28px";

// circle
let div1 = document.querySelector(".box");
let div2 = document.createElement("div");
div1.appendChild(div2);
div2.style.width = "300px";
div2.style.height = "300px";
div2.style.borderRadius = "50%";


div2.addEventListener("mouseout", function () {
    div2.style.backgroundColor = "yellow";
});
div2.addEventListener("mouseover", function () {
    div2.style.backgroundColor = "blue";
});
// button
let button = document.createElement("button");
div1.appendChild(button);
button.textContent = "DELETE CIRCLE";
button.className = "button";


button.addEventListener("click", function () {
    if (button.textContent == "DELETE CIRCLE") {
        div2.style.display = "none";
        button.textContent = "RETURN CIRCLE";
    } else {
        div2.style.display = "block";
        button.textContent = "DELETE CIRCLE";
        button.style.backgroundColor = "red";
    }
});

div2.className = "animation";
document.addEventListener("keydown", (ev) => {
    if (ev.key == "Enter") {
        div2.style.animation = "rotation 2s linear";
    }
});