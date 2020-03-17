(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Change size of th epicture';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');
    
    //create first pictures
    const firstPicture = document.createElement('img');
    firstPicture.setAttribute('src', 'pictures/whiteBear.jpeg');
    firstPicture.setAttribute('width', 200);
    firstPicture.setAttribute('height',150);
    root.appendChild(firstPicture);

    //create second pictures
    const secondPictures = document.createElement('img');
    secondPictures.setAttribute('src', 'pictures/whiteBear1.jpg');
    secondPictures.setAttribute('width', 200);
    secondPictures.setAttribute('height',150);
    root.appendChild(secondPictures);

    //create third pictures
    const thirdPictures = document.createElement('img');
    thirdPictures.setAttribute('src', 'pictures/whiteBear2.jpeg');
    thirdPictures.setAttribute('width', 200);
    thirdPictures.setAttribute('height',150);
    root.appendChild(thirdPictures);

    //separate visual part
    root.appendChild(separate);

    const elem = document.getElementsByTagName('img');

    for(let i = 0; i < elem.length; i++ ){
        elem[i].addEventListener('click', onClickChangeSize)
    }

    function onClickChangeSize(){
        this.width = this.width * 2;
        this.height = this.height * 2;
    }
})()