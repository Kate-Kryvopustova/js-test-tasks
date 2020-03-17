(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Generate random string with 8 letters';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create input
    const input = document.createElement('input');
    input.setAttribute('id', 'inputField');
    input.setAttribute('type', 'text');
    root.appendChild(input);

    //create button
    const button = document.createElement('button');
    button.innerHTML = 'Click me!';
    button.addEventListener('click', clickGenerateRandomString);
    root.appendChild(button);

    //separate visual part
    root.appendChild(separate);

    function clickGenerateRandomString(){
        let randomValue = Math.random().toString(36).substring(2, 10);
        console.log(randomValue)
        document.getElementById('inputField').value = randomValue;

    }

})()