// alert("Welcome to my website!");

function buttonClicked() {
    // alert("A button is clicked on the page.");
    var color = randColor();
    document.body.style.background = color;
}

function randColor() {
    return '#' + (function co(lor) {
        return (lor += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)]) &&
            (lor.length == 6) ? lor : co(lor);
    })('');
}