(function (){
    const root = document.getElementById('root');

    // separator
    const separator = document.createElement("hr");

    // separate visual part of script
    root.appendChild(separator);

    //title
    const title = document.createElement("h1");
    title.innerHTML = "Hide button after on click button";
    root.appendChild(title);

    //create button
    const hideButton = document.createElement('button');
    hideButton.setAttribute('id', 'hide');
    hideButton.innerHTML = 'Click and I hide';
    hideButton.addEventListener('click', clickHideButton);
    root.appendChild(hideButton);

    //separate visual part of script
    root.appendChild(separator);

    //Hindle click on button for hide button
    function clickHideButton() {
        const hide = document.getElementById('hide');
        
        if(hide.style.display === 'none') {
            hide.style.display = 'block';
        } else {
            hide.style.display = 'none';
        }
    }
})()