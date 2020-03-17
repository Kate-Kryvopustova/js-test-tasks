(function(){
    const root = document.getElementById('root');

    //create title task
    const title = document.createElement('h2');
    title.innerHTML = 'Show or hide input dependency of checked';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('checked', '');
    checkbox.addEventListener('click', clickHideAndShowInput);
    root.appendChild(checkbox);

    //create input
    const input = document.createElement('input');
    input.setAttribute('id', 'input');
    input.setAttribute('placeholder', 'love bear!');
    root.appendChild(input);

    //separate visual part
    root.appendChild(separate);

    function clickHideAndShowInput() {
        const displayInput = document.getElementById('input');

        if(checkbox.checked){
            displayInput.style.display = 'inline';
        } else {
            displayInput.style.display = 'none';
        }
    }
})()