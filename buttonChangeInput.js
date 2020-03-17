(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Add +1 and -1 in input'
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');
    
    //create button 
    const addNum = document.createElement('button');
    addNum.setAttribute('id', 'addNum');
    addNum.innerHTML = ' +1 ';
    addNum.addEventListener('click', onClickToAddNum);
    root.appendChild(addNum);

    //create output
    const output = document.createElement('input');
    output.setAttribute('id', 'result');
    output.setAttribute('type', 'number');
    root.appendChild(output);

    //create button
    const takeAway = document.createElement('button');
    takeAway.setAttribute('id', 'minusNum');
    takeAway.innerHTML = ' -1 ';
    takeAway.addEventListener('click', onClickToMinusNum);
    root.appendChild(takeAway);

    //create information for user
    const information = document.createElement('p');
    information.setAttribute('id', 'outputText');
    root.appendChild(information);

    //separate visual part
    root.appendChild(separate);


    function onClickToAddNum(){
        const change = document.getElementById('result').value;
        const addNum = Number(change);

        document.getElementById('result').value = addNum + 1;
    }
    
    function onClickToMinusNum(){
        const changeNum = document.getElementById('result').value;
        const outputForUser = document.getElementById('outputText');
        
        if( changeNum >= 1 ){
        document.getElementById('result').value = changeNum - 1;         
        } else {
            outputForUser.innerHTML = 'Less than 0 - impossible ';
        }

    }
})()