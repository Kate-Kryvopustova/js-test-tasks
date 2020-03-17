(function(){
    const root = document.getElementById('root');

    //separator
    const sepatator = document.createElement('hr');

    //separator visual part on page
    root.appendChild(sepatator);

    //create title
    const title = document.createElement('title');
    title.innerHTML = 'add result from input in input';
    root.appendChild(title);

    //create inputs
    const firstOperand = document.createElement('input');
    const secondOperand = document.createElement('input');
    const thirdOperand = document.createElement('input');

    firstOperand.setAttribute('id', 'inputFirstNum');
    firstOperand.setAttribute('type', 'number');
    root.appendChild(firstOperand);

    secondOperand.setAttribute("id", "inputSecondNum");
    secondOperand.setAttribute("type", "number");
    root.appendChild(secondOperand);

    thirdOperand.setAttribute("id", "inputThirdNum");
    thirdOperand.setAttribute("type", "number");
    root.appendChild(thirdOperand)

    //create button
    const button = document.createElement('button');
    button.setAttribute('id', 'button');
    button.addEventListener('click', onClickButtonForResult);
    button.innerHTML = 'Result Sum';
    root.appendChild(button);

    //create output result
    const result = document.createElement('input');
    result.setAttribute('id', 'result');
    root.appendChild(result);

    //calculation
    function onClickButtonForResult(){
        debugger;
        const resultFromInputs = Number(firstOperand.value) + Number(secondOperand.value) + Number(thirdOperand.value);

        document.getElementById('result').value = resultFromInputs;
    }
})()