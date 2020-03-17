(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Generate random string with any letters';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create input
    const input = document.createElement('input');
    input.setAttribute('id', 'inputField');
    input.setAttribute('type', 'text');
    root.appendChild(input);

    //create input for indicates length string
    const indicateLength = document.createElement('input');
    indicateLength.setAttribute('id', 'indicateLength');
    indicateLength.setAttribute('type', 'number');
    indicateLength.setAttribute('placeholder', 'indicate length string');
    root.appendChild(indicateLength);

    //create button
    const button = document.createElement('button');
    button.innerHTML = 'Click me!';
    button.addEventListener('click', clickGenerateRandomString);
    root.appendChild(button);

    //separate visual part
    root.appendChild(separate);

    

    function clickGenerateRandomString(){

        const result = document.getElementById('indicateLength').value;
        const lengthStr = +result;
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let generateString = '';
        

        for( let i = 0; i < lengthStr; i++ ){
            generateString += letters.charAt(Math.random() * letters.length);

            document.getElementById('inputField').value = generateString;
        }

    }

})()