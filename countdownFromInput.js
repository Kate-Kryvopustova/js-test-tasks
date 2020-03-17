(function () {
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Countdown from input in paragraph';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create input to indicate number
    const specifyNum = document.createElement('input');
    specifyNum.setAttribute('id', 'indicateNum');
    specifyNum.setAttribute('type', 'number');
    specifyNum.addEventListener('focusout', focusOutHandler);
    root.appendChild(specifyNum);

    //create output counter
    const outputField = document.createElement('p');
    outputField.innerHTML = 'Counter: ';
    outputField.setAttribute('id', 'displayCounter');
    root.appendChild(outputField);

    //separate visual part
    root.appendChild(separate);

    function focusOutHandler() {
        let input = +document.getElementById('indicateNum').value;

        const interval = setInterval(counter, 500);

        function counter(){
            if(input <= 0){
                clearInterval(interval);
            }
            outputField.innerHTML = 'Counter: ' + input--;

            
        }
        
    }

    
})()