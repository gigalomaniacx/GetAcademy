//model
let isEmail = false;
let returnText = '';
let checkEmail;
//view
updateView();
function updateView() {
    document.getElementById('app').innerHTML = `
    <h1>Email checker</h1><br/>
    <input id="emailField" type="text"/>
    <button onclick="checkEmailFunction()">Check email</button><br>
    ${returnText}
    `;
}

//controller

function checkEmailFunction(){
    checkEmail = document.getElementById('emailField').value;
    checkEmail = unspaceify(checkEmail);

    checkEmail.indexOf('@') == -1 ? returnText = `Please enter a valid Email address.` :
    checkEmail.indexOf('@') >= 0 ? printCorrectEmail(): 
    console.log('unhandled error in checkEmailFunction() D:');

    updateView();
}

function printCorrectEmail() {
    checkEmail.indexOf('.@.') == -1 ? checkEmail = dotify(checkEmail) :
    console.log('unhandled error in checkEmailFunction() D:');

    returnText = `${checkEmail}: is a valid Email`;
}

function unspaceify(text) {
    let regExSpace = /\s/g;
    tekst = text.replace(regExSpace,"");
    return tekst;
}

function dotify(text) {
    let dot = text.split('@');
    return dot[0] + '.@.' + dot[1];
}