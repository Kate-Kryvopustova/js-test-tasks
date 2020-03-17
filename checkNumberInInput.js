(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Check input for number 3';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create input
    const input = document.createElement('input');
    input.setAttribute('id', 'inputField');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'input number');
    root.appendChild(input);

    //create button
    const button = document.createElement('button');
    button.setAttribute('id', 'check');
    button.innerHTML = 'click me';
    button.addEventListener('click', checkInput);
    root.appendChild(button);

    //create output
    const result = document.createElement('p');
    result.innerHTML = 'Result: ';
    root.appendChild(result);

    //separate visual part
    root.appendChild(separate);

    //check input a number
    function checkInput() {
        const inputValue = document.getElementById('inputField').value;
        const valueForSearch = 3;
        let arrayStr = inputValue.split('');

        for( let i = 0; i < arrayStr.length; i++ ){
            if( arrayStr[i] == valueForSearch ){
                result.innerHTML = 'Result: have number 3';
                return;
            } else {
                result.innerHTML = 'Result: does not contain a number 3';
            }
        }
    }
})()