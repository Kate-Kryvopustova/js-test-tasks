(function () {
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Show a square num every second';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create input
    const outputSquare = document.createElement('input');
    outputSquare.setAttribute('id', 'squaredNumber');
    outputSquare.setAttribute('type', 'text');
    outputSquare.setAttribute('placeholder', 'input number');
    root.appendChild(outputSquare);

    //separate visual part
    root.appendChild(separate);

    let receivedNumber = document.getElementById('squaredNumber');
    setInterval(newNumber, 1000);

    function newNumber() {
        console.log('i');
        receivedNumber.value = receivedNumber.value * receivedNumber.value;
    }


})()