(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Change every second color according to value in array';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create paragraph
    const changeElement = document.createElement('p');
    changeElement.setAttribute('id', 'changeElement');
    changeElement.innerHTML = 'Сделайте так, чтобы каждую секунду абзац менял свой цвет на определенное значение их массива.';
    root.appendChild(changeElement);

    //separate visual part
    root.appendChild(separate);

    setInterval(changeColor, 1000);

    const elementColors = ['red', 'green', 'blue'];
    let value = 0;

    function changeColor() {
        changeElement.style.color = elementColors[value];
        value++;
        debugger;
        if(value >= elementColors.length ){
            value = 0;
        }
    }
})()