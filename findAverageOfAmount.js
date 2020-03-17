(function(){
    const root = document.getElementById('root');

    //create separator
    const separator = document.createElement('hr');

    //create titile
    const title = document.createElement('h3');
    title.innerHTML = 'Find the average of the amount when hidde focus';
    root.appendChild(title);

    //create input
    const input = document.createElement('input');
    input.setAttribute('id', 'inputField');
    input.setAttribute('type', 'text');
    input.addEventListener('focusout', onFocusOut);
    root.appendChild(input);

    //create result output
    const result = document.createElement('p');
    result.getAttribute('id', 'result');
    result.innerHTML = 'result: ';
    root.appendChild(result);

    //separate visual part of script
    root.appendChild(separator);

    //create handler hidden focus and calculation
    function onFocusOut(){
        const inputField = '' + document.getElementById('inputField').value;
        let resultFromInputs = 0;
        let str = inputField.split(',');

        for (let i = 0; i < str.length; i++) {
            resultFromInputs += +str[i];
        }
        
        result.innerHTML= 'result: ' + resultFromInputs/str.length;
    }
})() 