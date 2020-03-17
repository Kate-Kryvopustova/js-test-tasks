(function(){
    const root = document.getElementById('root');

    // separator
    const separator = document.createElement("hr");

    // title
    const title = document.createElement("h1");
    title.innerHTML = "Breake a string from input into independent parts";
    root.appendChild(title);

    // create input;
    const input = document.createElement('input');
    input.setAttribute('id', 'inputData');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter surname, name and patronymic');
    input.addEventListener('focusout', onFoculOutBreakeInput);
    root.appendChild(input);

    //create output for surname
    const outputSurname = document.createElement('input');
    outputSurname.setAttribute('id', 'outputSurname');
    root.appendChild(outputSurname);

    //create output for name
    const outputName = document.createElement('input');
    outputName.setAttribute('id', 'outputName');
    root.appendChild(outputName);

    //create output for patronymic
    const outputpatronymic = document.createElement('input');
    outputpatronymic.setAttribute('id', 'outputpatronymic');
    root.appendChild(outputpatronymic);

    // separate visual part of script
    root.appendChild(separator);

    //hadnler for breake string from input
    function onFoculOutBreakeInput() {
        const inputField = document.getElementById('inputData').value;
        const str = inputField.split(' ');

        document.getElementById('outputSurname').value = str[0];
        document.getElementById('outputName').value = str[1];
        document.getElementById('outputpatronymic').value = str[2];
    }
})()