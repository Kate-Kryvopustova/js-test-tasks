(function(){
    const root = document.getElementById('root');

    //create title task
    const title = document.createElement('h2');
    title.innerHTML = 'Verification number in input with numb in list';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create input
    const inputNumb = document.createElement('input');
    inputNumb.setAttribute('type', 'number');
    inputNumb.setAttribute('placeholder', 'Enter number!');
    inputNumb.addEventListener('focusout', )
    root.appendChild(inputNumb);

    //create ol (field for list)

    //crete list

    //create text output in case of a negative check

    //separate visual part
    root.appendChild(separate);
})()