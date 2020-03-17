(function(){
    const root = document.getElementById('root');

    //create title 
    const title = document.createElement('h2');
    title.innerHTML = 'Select text and write in input';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create paragraf
    const text = document.createElement('p');
    text.addEventListener('mouseup', handlerSelectText);
    text.innerHTML = 'Дан инпут. Выделите любой текст на странице. По окончанию выделения этот текст должен записаться в этот инпут.';
    root.appendChild(text);


    //create input
    const inp = document.createElement('input');
    inp.setAttribute('type', 'text');
    inp.setAttribute('id', 'outputText');
    root.appendChild(inp);


    //separate visual part
    root.appendChild(separate);

    function handlerSelectText(){
        const select = window.getSelection().toString();

        document.getElementById('outputText').value = select;

    }
})()