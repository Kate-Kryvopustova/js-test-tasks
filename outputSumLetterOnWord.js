(function(){
    const root = document.getElementById('root');

    //create title task
    const title = document.createElement('h2');
    title.innerHTML = 'Output total letter on word';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create input 
    const input = document.createElement('input');
    input.setAttribute('id', 'inputText');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'input word');
    input.addEventListener('focusout', showTotalLetterOnWord);
    root.appendChild(input);

    //create output total letter on word
    const total = document.createElement('p');
    total.setAttribute('id', 'totalLetter');
    total.innerHTML = 'Total letter on word: ';
    root.appendChild(total);

    //create ouput the longest word
    const word = document.createElement('p');
    word.setAttribute('id', 'longesttWord');
    word.innerHTML = 'The longest word in string: ';
    root.appendChild(word);

    //separate visual part
    root.appendChild(separate);

    //handler output total letter on word
    function showTotalLetterOnWord(){
        const inputField = document.getElementById('inputText').value;
        let arrayStr = inputField.split(' ');
        
        let longesttWord = arrayStr[0];

        for( let i = 0; i < arrayStr.length; i++ ) {
            if( arrayStr[i].length > longesttWord.length ){
                longesttWord = arrayStr[i];
            }
        }

        total.innerHTML = 'Total letter on word: ' + longesttWord.length;
        word.innerHTML = 'The longest word in string: ' + longesttWord;
    }
})()