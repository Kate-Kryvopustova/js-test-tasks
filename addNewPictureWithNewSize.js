(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Change size picture';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');

    //create first picture
    const firstPicture = document.createElement('img');
    firstPicture.setAttribute('src', 'pictures/whiteBear.jpeg');
    firstPicture.setAttribute('width', 250);
    firstPicture.setAttribute('height', 150);
    root.appendChild(firstPicture);

    //create second picture
    const secondPicture = document.createElement('img');
    secondPicture.setAttribute('src', 'pictures/whiteBear1.jpg');
    secondPicture.setAttribute('width', 250);
    secondPicture.setAttribute('height', 150);
    root.appendChild(secondPicture);
    
    //create third picture
    const thirdPicture = document.createElement('img');
    thirdPicture.setAttribute('src', 'pictures/whiteBear2.jpeg');
    thirdPicture.setAttribute('width', 250);
    thirdPicture.setAttribute('height', 150);
    root.appendChild(thirdPicture);

    //create picture with new size;
    

    //separate visual part 
    root.appendChild(separate);


    const elemPicture = document.getElementsByTagName('img');

    for( let i = 0; i < elemPicture.length; i++ ){
        elemPicture[i].addEventListener('click', onClickAddPictureWithNewSize);
    }


    function onClickAddPictureWithNewSize(){
        const sizePicture = document.createElement('img');
        sizePicture.setAttribute('id', 'newSize');
        sizePicture.setAttribute('width', 500);
        sizePicture.setAttribute('height', 300);
        root.appendChild(sizePicture);
       
        const changeSize = document.getElementById('newSize');
        

        changeSize.src = this.src; 
    }
})()