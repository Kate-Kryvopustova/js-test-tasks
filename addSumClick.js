(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'show sum click on paragrafs';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create input
    const input = document.createElement('input');
    input.setAttribute('id', 'outputField');
    root.appendChild(input);

    //create first paragraf
    const firstParagraf = document.createElement('p');
    firstParagraf.innerHTML = 'Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.';
    root.appendChild(firstParagraf);

    //create second paragraf
    const secondParagraf = document.createElement('p');
    secondParagraf.innerHTML = 'Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано';
    root.appendChild(secondParagraf);

    //create third paragraf
    const thirdParagraf = document.createElement('p');
    thirdParagraf.innerHTML = 'Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.';
    root.appendChild(thirdParagraf);

    //separate visual part
    root.appendChild(separate);


    const text = document.getElementsByTagName('p');

    for( let i = 0; i < text.length; i++ ){
        text[i].addEventListener('click', onClickOnText);
    }

    let count = 0;
    
    function onClickOnText(){
        count++;
        
        document.getElementById('outputField').value = count;

    }

    
})()