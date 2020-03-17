(function () {
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Find max num and change color in paragraf';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create button
    const button = document.createElement('button');
    button.innerHTML = 'Click me!';
    button.addEventListener('click', onClickAndShowLargerNum);
    root.appendChild(button);

    //create all paragrapf
    for (let i = 0; i < 1000; i++) {
        const paragraf = document.createElement('p');
        paragraf.setAttribute('style', 'background-color: yellow;');
        paragraf.innerHTML = (Math.random() * 100).toFixed();
        root.appendChild(paragraf);
    }

    //separate visual part
    root.appendChild(separate);

    function onClickAndShowLargerNum() {
        const itemsToCompare = document.getElementsByTagName("p");
        const itemsToChange = [];
        let maxValue = 0;

        for(item of itemsToCompare) {
            if (item.innerHTML > maxValue) maxValue = +item.innerHTML;
        }

        for (item of itemsToCompare) {
            if (+item.innerHTML === maxValue) itemsToChange.push(item)
        }

        for(item of itemsToChange) {
            item.style.backgroundColor = "red";
        }
    }
})()