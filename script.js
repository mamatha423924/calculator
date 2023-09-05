
let outputScreen = document.getElementById("output-screen");


function handleButtonClick(value) {
    outputScreen.value += value;
}


function handleDelete() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}


function handleClear() {
    outputScreen.value = "";
}


function handlecalculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert("Invalid expression");
    }
}
