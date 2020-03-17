(function(){
    const root = document.getElementById('root');

    //create separator
    const separate = document.createElement('hr');

    //create title for task
    const title = document.createElement('h2');
    title.innerHTML = 'Change data on format Camel Case';
    root.appendChild(title);

    //create input
    const input = document.createElement('input');
    input.setAttribute('id', 'inputData');
    input.setAttribute('placeholder', 'name surname patronymic');
    input.addEventListener('focusout', onClickChangeRegister);
    root.appendChild(input);

    //add separate on page
    root.appendChild(separate);

    //handle click change register data user
    function onClickChangeRegister(){
        const inputField = document.getElementById('inputData').value;

        let str = inputField.split(' ');
        let newArray = str.map(function (word){
            return word[0].toUpperCase() + word.slice(1);
        }).join(' ');

        document.getElementById('inputData').value = newArray;
    }
})()