(function() {
    const root = document.getElementById("root");
    // separator
    const separator = document.createElement("hr");

    // separate visual part of script
    root.appendChild(separator);

    //title
    const title = document.createElement("h1");
    title.innerHTML = "add focusout listener task";
    root.appendChild(title);

    // create input
    const input = document.createElement("input");
    input.setAttribute("id", "inputField");
    input.setAttribute("type", "number");
    input.addEventListener("focusout", onFocusOut);
    root.appendChild(input);

    // create result output
    const result = document.createElement("p");
    result.setAttribute("id", "result");
    result.innerHTML = "result: ";
    root.appendChild(result);

    // separate visual part of script
    root.appendChild(separator);

    // focusout handler
    function onFocusOut() {
        const inputField = '' + document.getElementById('inputField').value;
        const sumHTML = document.getElementById('result');
        let result = 0;

        inputField.split('').forEach(item => result += +item);

        sumHTML.innerHTML = "result: " + result;
    }
})();