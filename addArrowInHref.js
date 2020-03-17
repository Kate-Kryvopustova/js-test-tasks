(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Add arrow in href';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create breake row
    const breakRow = document.createElement('br');

    //create firs link
    const firstLink = document.createElement('a');
    firstLink.setAttribute('href', 'https://developer.mozilla.org/');
    firstLink.innerHTML = 'developer';
    root.appendChild(firstLink);

    //break row
    root.appendChild(breakRow);

    //create second link
    const secondLink = document.createElement('a');
    secondLink.setAttribute('href', 'http://htmlbook.ru/');
    secondLink.innerHTML = 'html book';
    root.appendChild(secondLink);

    //break row
    root.appendChild(breakRow);
    
    //create third link
    const thirdLink = document.createElement('a');
    thirdLink.setAttribute('href', 'https://translate.google.com/');
    thirdLink.innerHTML = 'translate';
    root.appendChild(thirdLink);

    //separate visual part
    root.appendChild(separate);

    const elem = document.getElementsByTagName('a');
    
    for(let i = 0; i < elem.length; i++){
        if(elem[i].href.indexOf('http://') == 0){
            elem[i].innerHTML = elem[i].innerHTML + '\u2192';
        }        
    }
    
})()