//global variables //
const submitButton = document.querySelector("#submitButton");
console.log(submitButton);

const inputText = document.querySelector("#inputText");
console.log(inputText);

const inputNumber = document.querySelector("#inputNumber");
console.log(inputNumber);
submitButton.addEventListener("Click", function(event){
    //local variable
    event.preventDefault();
    console.log("button pressed");

    //fetch the data
    
    const inputTextValue = inputText.value;
    console.log(inputTextValue);

    const inputNumberValue = inputNumber.value;
    console.log(inputNumberValue);

    //manipulate output
    const inputDisplay= document.querySelector("#inputDisplay");
    console.log(inputDisplay);

    const displayTextValue=document.createElement("p");
    displayTextValue.textContent = inputTextValue;
    console.log(displayTextValue);

    const displayNumberValue=document.createElement("p");
    displayNumberValue.textContent = inputNumberValue;
    console.log(displayNumberValue);

    // send the value to scrren etc
    inputDisplay.appendChild(displayTextValue);
    inputDisplay.appendChild(displayNumberValue);
})
