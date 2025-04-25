function showBtn(elementById){
    let element = document.getElementById(elementById);
    element.classList.remove('hidden')
}
function hide(elementById){
    let element = document.getElementById(elementById);
    element.classList.add('hidden')
}
function setInnerText(elementById, value){
    let element = document.getElementById(elementById);
    element.innerText = value;
}

function getInnerText(elementById){
    let element = document.getElementById(elementById);
    element.innerText;
}