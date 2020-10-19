
window.onload = function() {

    textOnLeft = true;

    var button = document.getElementById("button1");
    button.addEventListener("click", swap);
    
}

var textOnLeft;

function swap() {
    if (textOnLeft == true) {
        leftToRight();
    }
    else {
        rightToLeft();
    }
}

function leftToRight() {
    //populate right text box
    let text1 = document.getElementById("text1")
    let text2 = document.getElementById("text2");
    text2.value = text1.value;
    
    //remove left text box contents
    text1.value = "";

    //change button symbol
    document.getElementById("button1").value = "<-";

    //update global state
    textOnLeft = false;
}

function rightToLeft() {
    //populate left text box
    let text1 = document.getElementById("text1")
    let text2 = document.getElementById("text2");
    text1.value = text2.value;
    
    //remove right text box contents
    text2.value = "";

    //change button symbol
    document.getElementById("button1").value = "->";

    //update global state
    textOnLeft = true;
}
