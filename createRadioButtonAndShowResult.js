(function () {
    const root = document.getElementById('root');

    //create title for task 
    const title = document.createElement('h2');
    title.innerHTML = 'Select option and show result';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //show option html
    const showHTML = document.createElement('p');
    showHTML.innerHTML = 'HTML';
    root.appendChild(showHTML);

    //show option js
    const showJS = document.createElement('p');
    showJS.innerHTML = 'JS'
    root.appendChild(showJS);

    //show option php
    const showPHP = document.createElement('p');
    showPHP.innerHTML = 'PHP'
    root.appendChild(showPHP);

    //show option css
    const showCSS = document.createElement('p');
    showCSS.innerHTML = 'CSS'
    root.appendChild(showCSS);

    //create input option - html
    const optionHTML = document.createElement('input');
    optionHTML.setAttribute('type', 'radio');
    optionHTML.setAttribute('name', 'language');
    optionHTML.setAttribute('value', 'html');
    showHTML.appendChild(optionHTML);


    //create input option - js
    const optionJS = document.createElement('input');
    optionJS.setAttribute('type', 'radio');
    optionJS.setAttribute('name', 'language');
    optionJS.setAttribute('value', 'js');
    showJS.appendChild(optionJS);

    //create input option - php
    const optionPHP = document.createElement('input');
    optionPHP.setAttribute('type', 'radio');
    optionPHP.setAttribute('name', 'language');
    optionPHP.setAttribute('value', 'php');
    showPHP.appendChild(optionPHP);

    //create input option - css
    const optionCSS = document.createElement('input');
    optionCSS.setAttribute('type', 'radio');
    optionCSS.setAttribute('name', 'language');
    optionCSS.setAttribute('value', 'css');
    showCSS.appendChild(optionCSS);

    //separate visual part
    root.appendChild(separate);

    //create output result
    const showSelectOption = document.createElement('p');
    showSelectOption.innerHTML = 'You select: ';
    root.appendChild(showSelectOption);

    const items = document.getElementsByTagName('input');
    const allSelectOptions = [];
    let index = 0;

    while(index < items.length) {
        items[index].addEventListener('click', clickOnOptionAndShow);

        index++;
    }

    function clickOnOptionAndShow() {
        if(this.checked) {
            allSelectOptions.push(this.value)
            showSelectOption.innerHTML = 'You select: ' + allSelectOptions;
        }
    }
})()