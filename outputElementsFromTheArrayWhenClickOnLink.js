(function () {
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Output element from array when click on link';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create paragraph with value array;
    const displayElement = document.createElement('p');
    displayElement.setAttribute('id', 'outputElement');
    displayElement.innerHTML = 'Display elements: ';
    root.appendChild(displayElement);

    //create link 
    const linkOnNextElement = document.createElement('a');
    linkOnNextElement.setAttribute('id', 'displayElement');
    linkOnNextElement.setAttribute('href', '#');
    linkOnNextElement.innerHTML = 'Next elment';
    linkOnNextElement.addEventListener('click', outputElement);
    root.appendChild(linkOnNextElement);

    //separate visual part
    root.appendChild(separate);

    const receivedItems = ['один', 'два', 'три'];
    let index = 0;

    initial();

    function initial() {
        outputElement()
    }    

    function outputElement() {
        if (index === receivedItems.length) index = 0;

        render(receivedItems[index]);
        index++;
    }

    function render(value) {
        displayElement.innerHTML = 'Display elements: ' + value;
    }
})()