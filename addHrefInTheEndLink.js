(function(){
    const root = document.getElementById('root');

    //create title page
    const title = document.createElement('h2');
    title.innerHTML = 'Add href in the end link';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create first links
    const firstLink = document.createElement('a');
    firstLink.setAttribute('href', 'https://www.google.com/');
    firstLink.innerHTML = 'google  ';
    root.appendChild(firstLink);

    //separate visual part
    root.appendChild(separate);

    //create second link
    const secondLink = document.createElement('a');
    secondLink.setAttribute('href', 'http://old.code.mu/');
    firstLink.innerHTML = 'tasks  ';
    root.appendChild(secondLink);

    //separate visual part
    root.appendChild(separate);

    //create third link
    const thirdLink = document.createElement('a');
    thirdLink.setAttribute('href', 'https://translate.google.com/');
    thirdLink.innerHTML = 'googleTranslate  ';
    root.appendChild(thirdLink);

    //separate visual part
    root.appendChild(separate)

    //create button
    const button = document.createElement('button');
    button.setAttribute('id', 'button');
    button.innerHTML = 'click me ';
    button.addEventListener('focusout', addHrefInEndLinks);
    root.appendChild(button);

    //separate visual part
    root.appendChild(separate);

    //handler click on button and add href in the end links
    function addHrefInEndLinks(){
        let links = document.getElementsByTagName('a');
        //debugger;

        for( let i = 0; i < links.length; i++ ){
            links[i].innerHTML = links[i].innerHTML + '(' + links[i].href + ')';
        }
    }  
})()