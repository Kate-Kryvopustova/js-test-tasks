(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Button output how old user today';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');
    
    //create input
    const input = document.createElement('input');
    input.setAttribute('id', 'inputField');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Input year of birth');
    root.appendChild(input);

    //create button
    const button = document.createElement('button');
    button.setAttribute('id', 'button');
    button.innerHTML = 'Click Me :)';
    button.addEventListener('click', outputYearsUser);
    root.appendChild(button);

    //create output with result
    const result = document.createElement('p');
    result.setAttribute('id', 'result');
    result.innerHTML = 'Today you are old ';
    root.appendChild(result);

    //separate visual part
    root.appendChild(separate);

    //hindler for output resuld
    function outputYearsUser(){
        const dataUser = document.getElementById('inputField').value;
        const yearToday = 2020;
        const num = Number(dataUser);
        const yearUser = yearToday - num;

        result.innerHTML = 'Today you are old ' + yearUser;
    }
})()