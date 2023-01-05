let pwEye = document.getElementById('sp-pw-eye');
let  inputPW = document.getElementById('password');

pwEye.onclick = () => {
    let typeInputPw = inputPW.getAttribute('type');
    let typeNew = (typeInputPw === 'password') ? 'text' : 'password';
    inputPW.setAttribute('type', typeNew);
    let classNameCurrent = pwEye.getAttribute('class');
    let newClassEye = (classNameCurrent === 'fa-solid fa-eye') ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
    pwEye.setAttribute('class', newClassEye)
}

let htmlOptionsYear = '';
let date = new Date();
for (let i = date.getFullYear(); i >= 1905 ; i--) {
    htmlOptionsYear += `<option value="${i}">${i}</option>`
}

document.getElementById('year').innerHTML = htmlOptionsYear
