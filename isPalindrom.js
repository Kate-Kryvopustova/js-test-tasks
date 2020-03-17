(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Check that word is palindrome';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');
    
    //create input
    const input = document.createElement('input');
    input.setAttribute('id', 'inputText');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'input text');
    root.appendChild(input);

    //create button
    const check = document.createElement('button');
    check.setAttribute('id', 'checkWord');
    check.innerHTML = 'Click to check';
    check.addEventListener('click', checkIsPalindrome);
    root.appendChild(check); 

    //create output result
    const result = document.createElement('p');
    result.innerHTML = 'This word: ';
    root.appendChild(result);

    //separate visual part
    root.appendChild(separate);

    //palindrome check 
    function checkIsPalindrome(){
        const str = document.getElementById('inputText').value;
        let resultCheck = str.toLowerCase();

        if(resultCheck === resultCheck.split(' ').reverse().join(' ')) {
            result.innerHTML = 'This word: is palindrome';
        } else {
            result.innerHTML = 'This word:  not palindrome';
        }
    }
})()