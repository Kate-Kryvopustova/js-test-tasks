(function () {
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Generate input element and output counter';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create braak row
    const breakRow = document.createElement('br');

    //input for create others inputs
    const createInputField = document.createElement('input');
    createInputField.setAttribute('id', 'inputField');
    createInputField.setAttribute('class', 'generalFolder');
    createInputField.setAttribute('type', 'number');
    root.appendChild(createInputField);

    //create button for generation inputs
    const generationInputs = document.createElement('button');
    generationInputs.innerHTML = 'Click to generate inputs';
    generationInputs.setAttribute('class', 'generalFolder');
    generationInputs.addEventListener('click', createInputs);
    root.appendChild(generationInputs);

    //create button
    const createElement = document.createElement('button');
    createElement.innerHTML = 'Click to create input';
    createElement.setAttribute('class', 'buttonForCreateElement');
    createElement.addEventListener('click', handlerClickForCreateNewElement);
    root.appendChild(createElement);

    //break row on page
    root.appendChild(breakRow);

    //create folder for buttons
    const divUnionButtons = document.createElement('div');
    divUnionButtons.setAttribute('class', 'unionButtons');
    root.appendChild(divUnionButtons);

    //create button for start counter
    const startCount = document.createElement('button');
    startCount.setAttribute('class', 'counter');
    startCount.innerHTML = 'Click to start count';
    startCount.addEventListener('click', clickToStartCount);
    divUnionButtons.appendChild(startCount);

    //create button for stop counter;
    const buttonToStopCount = document.createElement('button');
    buttonToStopCount.setAttribute('class', 'counter');
    buttonToStopCount.innerHTML = 'Click to stop counter';
    buttonToStopCount.addEventListener('click', stopCount);
    divUnionButtons.appendChild(buttonToStopCount);

    //separate visual part 
    root.appendChild(separate);

    // create folder for inputs
    const divUnionAddInputs = document.createElement('div');
    divUnionAddInputs.setAttribute('class', 'containerForInputs');
    root.appendChild(divUnionAddInputs);

    let inputElements = document.getElementsByClassName('outputCount');
    let interval = null;

    function stopCount() {
        clearInterval(interval);
    }

    function createInput() {
        let addElement = document.createElement('input');
        addElement.setAttribute('class', 'outputCount');
        divUnionAddInputs.appendChild(addElement);
    }

    function createInputs() {
        const getNumberOfItems = document.getElementById('inputField').value;
        let index = 0;

        while (index < getNumberOfItems) {
            createInput();
            index++;
        }
    }

    function handlerClickForCreateNewElement() {
        createInput();
    }

    function clickToStartCount() {
        let index = 0;
        let countNum = 1;

        if (inputElements.length > 0) {
            interval = setInterval(render, 1000);
        }

        function render() {
            if (index === inputElements.length) {
                index = 0;
            }
            inputElements[index].value = countNum;

            index++;
            countNum++;
        }
    }
})()