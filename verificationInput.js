(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Change color in input depending on the number';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');
    
    //create input
    const input = document.createElement('input');
    input.setAttribute('style', 'background-color: yellow;');
    input.setAttribute('type', 'number');
    input.addEventListener('focusout', onFocusOut);
    root.appendChild(input);

    //separate visual part
    root.appendChild(separate);

    function onFocusOut(){
        const num = document.querySelector('input');
        const inputField = num.value;
 
        if( inputField < 100 && inputField > 1 ){
            num.style.background = '#05f043';
        } else {
            num.style.background = '#ff000d';
        }
    }
})()