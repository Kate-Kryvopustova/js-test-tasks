(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Show numb in ascending order';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create first paragraf
    const firstParagraf = document.createElement('p');
    firstParagraf.innerHTML = '145544';
    root.appendChild(firstParagraf);

    //create second paragraf
    const secondParagraf = document.createElement('p');
    secondParagraf.innerHTML = 'мишка';
    // secondParagraf.innerHTML = '759234';
    root.appendChild(secondParagraf);

    //create third paragraf
    const thirdParagraf = document.createElement('p');
    thirdParagraf.innerHTML = '202648';
    root.appendChild(thirdParagraf);

    //create button 
    const button = document.createElement('button');
    button.setAttribute('id', 'button');
    button.innerHTML = 'click me';
    button.addEventListener('click', clickForOutputSortNumb);
    root.appendChild(button);

    //create input
    const input = document.createElement('input');
    input.setAttribute('id', 'outputSortNum');
    root.appendChild(input);

    //separate visual part
    root.appendChild(separate);

    //hendler output for sort numb
    function clickForOutputSortNumb() {
        const numb = document.getElementsByTagName('p');
        
        let arrayNum = [];
        for(let i = 0; i < numb.length; i++){
            arrayNum[i] = +numb[i].innerHTML;
        }
        
        arrayNum.sort(function(a,b) {
            if(a < b){
                return 1;
            } else if(a === b){
                return 0;
            } else if(a > b) {
                return -1;
            }
        })
        document.getElementById('outputSortNum').value = arrayNum;
    }
})()