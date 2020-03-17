(function(){
    const root = document.getElementById('root');

    //create title task
    const title = document.createElement('h2');
    title.innerHTML = 'Create checkbox and change value';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');
    

    //create input for note number for create checkbox
    const addNumberForCreateCheckbox = document.createElement('input');
    addNumberForCreateCheckbox.setAttribute('id', 'valueForCreateCheckbox');
    addNumberForCreateCheckbox.setAttribute('type' , 'number');
    root.appendChild(addNumberForCreateCheckbox);

    //create button for generation checkbox
    const createCheckBox = document.createElement('button');
    createCheckBox.addEventListener('click', clickForGenerateChechboxOnPage);
    createCheckBox.innerHTML = 'Create checkbox';
    root.appendChild(createCheckBox);


    //create button for change value in checkbox
    const buttonForChangeValueInCheckbox = document.createElement('button');
    buttonForChangeValueInCheckbox.addEventListener('click', clickForChangeValueInCheckbox);
    buttonForChangeValueInCheckbox.innerHTML = 'Select all checkbox';
    root.appendChild(buttonForChangeValueInCheckbox);

    //separate visual part
    root.appendChild(separate);

    const elementsCheckbox = document.getElementsByClassName('outputCheckbox')

    function createCheckbox() {
        const addCheckbox = document.createElement('input');
        addCheckbox.setAttribute('type', 'checkbox');
        addCheckbox.setAttribute('class', 'outputCheckbox');
        // addCheckbox.setAttribute('checked', '');
        root.appendChild(addCheckbox);
    }

    function clickForGenerateChechboxOnPage() {
        const getValueFromInput = document.getElementById('valueForCreateCheckbox').value;
        let index = 0;

        while(index < getValueFromInput){
            createCheckbox();
            index++;
        }
    }

    function clickForChangeValueInCheckbox() {
        let index = 0;

        while(index < elementsCheckbox.length) {
            if(elementsCheckbox[index].checked) {
                elementsCheckbox[index].checked = false;
            } else {
                elementsCheckbox[index].checked = true;
            }
            index++;
        }
    }
})()