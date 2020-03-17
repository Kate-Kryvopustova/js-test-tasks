(function(){
    const root = document.getElementById('root');

    //create title
    const title = document.createElement('h2');
    title.innerHTML = 'Show day week';
    root.appendChild(title);

    //create separate
    const separate = document.createElement('hr');
    
    //create input
    const input = document.createElement('input');
    input.setAttribute('id', 'inputDate');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'day.month.year');
    input.addEventListener('focusout', outputDayWeek);
    root.appendChild(input);

    //create output day week
    const result = document.createElement('p');
    result.setAttribute('id', 'dayWeek');
    result.innerHTML = 'Day week on this date: ';
    root.appendChild(result);

    //visual separate part
    root.appendChild(separate);
    
    function outputDayWeek(){
        const str = document.getElementById('inputDate').value;
        const dayWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

        let arrayStr = str.split('.').reverse().join('.');

        const date = new Date(arrayStr);
        const day = date.getDay();
        result.innerHTML = 'Day week on this date: ' + dayWeek[day];



    }
})()