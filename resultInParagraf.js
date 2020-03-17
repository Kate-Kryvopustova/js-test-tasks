(function() {
    const root = document.getElementById('root');
    // separator
    const separator = document.createElement("hr");

    // separate visual part of script
    root.appendChild(separator);

    //title
    const title = document.createElement("h1");
    title.innerHTML = "add result from input in paragraf";
    root.appendChild(title);

    //create input
    const firstOperand = document.createElement('input');
    const secondOperand = document.createElement('input');
    const thirdOperand = document.createElement('input');

    firstOperand.setAttribute("id", "inputFirstNum");
    firstOperand.setAttribute("type", "number");
    root.appendChild(firstOperand);

    secondOperand.setAttribute("id", "inputSecondNum");
    secondOperand.setAttribute("type", "number");
    root.appendChild(secondOperand);

    thirdOperand.setAttribute("id", "inputThirdNum");
    thirdOperand.setAttribute("type", "number");
    root.appendChild(thirdOperand);

    //create button
    const button = document.createElement('button');
    button.setAttribute("id", "button");
    button.addEventListener("click", onClickResultButton);
    button.innerHTML = "Resul Sum";
    root.appendChild(button);

    //create result output
    const result = document.createElement("p");
    result.setAttribute("id", "result");
    result.innerHTML = "result: ";
    root.appendChild(result);

    // separate visual part of script
    root.appendChild(separator);

    //calculation
    function onClickResultButton() {
        const resultFromInputs = Number(firstOperand.value) + Number(secondOperand.value) + Number(thirdOperand.value);
        result.innerHTML = "result: " + resultFromInputs;
    }

})()