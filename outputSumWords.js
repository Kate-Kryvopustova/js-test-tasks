(function(){
    const root = document.getElementById('root');

    //create title task
    const title = document.createElement('h2');
    title.innerHTML = 'Output sum words from input';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');
    
    //create input
    const input = document.createElement('input');
    input.setAttribute('id', 'inputText');
    input.setAttribute('type', 'text');
    input.addEventListener('focusout', showSumWords);
    root.appendChild(input);

    //create output sum words
    const total = document.createElement('p');
    total.setAttribute('id', 'result');
    total.innerHTML = 'Total word count: ';
    root.appendChild(total);

    //separate visual part
    root.appendChild(separate);

    //handler text from input
    function showSumWords(){
        const inputField = document.getElementById('inputText').value;
        const str = inputField.split(' ');
        
        total.innerHTML = 'Total word count: ' + str.length;
    }
})()