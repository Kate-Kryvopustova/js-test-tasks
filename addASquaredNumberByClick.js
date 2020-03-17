(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Add a squared number';
    root.appendChild(title);
    
    //create separate
    const separate = document.createElement('hr');

    //create first paragraf 
    const firstParagraf = document.createElement('p');
    firstParagraf.innerHTML = '25';
    root.appendChild(firstParagraf);    

    //create second paragraf
    const secondParagraf = document.createElement('p');
    secondParagraf.innerHTML = '48';
    root.appendChild(secondParagraf);

    //create third paragraf
    const thirdParagraf = document.createElement('p');
    thirdParagraf.innerHTML = '5';
    root.appendChild(thirdParagraf);

    //separate visual part
    root.appendChild(separate);

    const elem = document.getElementsByTagName('p');

    for( let i = 0; i < elem.length; i++ ){
        elem[i].addEventListener('click', onClickParagrafForResult);
    }

    function onClickParagrafForResult(){
        this.innerHTML = this.innerHTML * this.innerHTML;
    }

})()