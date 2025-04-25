function showBtn(elementById){
    let element = document.getElementById(elementById);
    element.classList.remove('hidden')
}
function setInnerText(elementById, value){
    let element = document.getElementById(elementById);
    element.innerText = value;
}

function getInnerText(elementById){
    let element = document.getElementById(elementById);
    element.innerText;
}