(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Click the picture change size and return it'
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');
    
    //create first picture
    const firstPicture = document.createElement('img');
    firstPicture.setAttribute('src', 'pictures/whiteBear.jpeg');
    firstPicture.setAttribute('width', 250);
    firstPicture.setAttribute('height',150);
    root.appendChild(firstPicture);

    //create second picture
    const secondPictures = document.createElement('img');
    secondPictures.setAttribute('src', 'pictures/whiteBear1.jpg');
    secondPictures.setAttribute('width', 250);
    secondPictures.setAttribute('height',150);
    root.appendChild(secondPictures);

    //create third picture
    const thirdPictures = document.createElement('img');
    thirdPictures.setAttribute('src', 'pictures/whiteBear2.jpeg');
    thirdPictures.setAttribute('width', 250);
    thirdPictures.setAttribute('height',150);
    root.appendChild(thirdPictures);

    //separate visual part
    root.appendChild(separate)

    const element = document.getElementsByTagName('img');

    for( let i = 0; i < element.length; i++ ){
        element[i].addEventListener('click', onClickChangeSize)
    }

    function onClickChangeSize(){
        this.width = this.width * 2;
        this.height = this.height * 2;

        this.removeEventListener('click', onClickChangeSize);
        this.addEventListener('click', onClickReducePicture);
    }

    function onClickReducePicture() {
        this.width = this.width / 2;
        this.height = this.height / 2;
    }
})()