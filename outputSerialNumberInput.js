(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Add serial number to the end input';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');
    
    //create first p
    const firstParagraf = document.createElement('p');
    root.appendChild(firstParagraf);

    //create second p
    const secondParagraf = document.createElement('p');
    root.appendChild(secondParagraf);

    //create third p
    const thirdParagraf = document.createElement('p');
    root.appendChild(thirdParagraf);

    //create button
    const button = document.createElement('button');
    button.setAttribute('id', 'button');
    button.innerHTML = 'click me';
    button.addEventListener('click', addNumbToTheEndInput);
    root.appendChild(button);
    
    //separate visual part
    root.appendChild(separate);

    //handler output add numb in input
    function addNumbToTheEndInput() {
        const element = document.getElementsByTagName('p');

        for(let i = 0; i < element.length; i++){
            element[i].innerHTML = element[i].innerHTML + ' ' + (i + 1);
        }
    }

})()