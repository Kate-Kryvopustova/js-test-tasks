(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'change color paragraph every second';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create paragraph
    const elementChange = document.createElement('p');
    elementChange.setAttribute('id', 'elementChange');
    elementChange.innerHTML = 'Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.';
    root.appendChild(elementChange);

    //separate visual part
    root.appendChild(separate);

    setInterval(changeColor, 1000);

    function changeColor(){
        if(elementChange.style.backgroundColor === 'red'){
            elementChange.style.backgroundColor = 'green';
        } else {
            elementChange.style.backgroundColor = 'red';
        }
    }


})()