function changeColor() {
    colors = ["red", "blue", "green","orange","yellow"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
}