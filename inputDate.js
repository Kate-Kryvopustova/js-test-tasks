(function(){
    const root = document.getElementById('root');

    //create title task
    const title = document.createElement('h2');
    title.innerHTML = 'Choose date: ';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create label for tie input
    const label = document.createElement('label');
    label.setAttribute('for', 'inputDate');
    root.appendChild(label);

    //create input
    const input = document.createElement('input');
    input.setAttribute('id', 'inputDate');
    input.setAttribute('type', 'date');
    root.appendChild(input);

    //separate visual part
    root.appendChild(separate);

    //create title for input field
    const instructionForInput = document.createElement('h3');
    instructionForInput.innerHTML = 'Pleace input date on format: date.month.year'
    root.appendChild(instructionForInput);
    
    //create input text for date
    const inputText = document.createElement('input');
    inputText.setAttribute('id', 'inputText');
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('placeholder', 'Input Date');
    inputText.addEventListener('focusout', changeFormatInputDate);
    root.appendChild(inputText);
    
    //separate visual part
    function changeFormatInputDate(){
        const resultFromInput = document.getElementById('inputText').value;

        let arrayStr = resultFromInput.split('.').reverse().join('-');
        
        document.getElementById('inputText').value = arrayStr;
    }
})()