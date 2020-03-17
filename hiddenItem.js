(function(){
    const root = document.getElementById('root');

    // separator
    const separator = document.createElement("hr");

    // separate visual part of script
    root.appendChild(separator);

    //title
    const title = document.createElement("h1");
    title.innerHTML = "hide text after on click button";
    root.appendChild(title);

    //create button
    const button = document.createElement('button');
    button.setAttribute('id', 'button');
    button.addEventListener('click', onClickButtonForHiddenText);
    button.innerHTML = 'Hidden text!';
    root.appendChild(button);

    //create div element with text for hidden
    const div = document.createElement('div');
    div.setAttribute('id', 'text');
    div.innerHTML = 'Please, click on button and I hidden! :)';
    root.appendChild(div);

    //create handler for hidden text
    function onClickButtonForHiddenText(){
        const hide = document.getElementById('text');
        
        if(hide.style.display === 'none') {
            hide.style.display = 'block';
        } else {
            hide.style.display = 'none';
        }
    }
})()