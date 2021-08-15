const input1 = document.querySelectorAll('.valueinput');
const check = document.querySelector('#button');
const result = document.querySelector('#output');


function calculate(b,h){
    const multi = b*h;
    return multi;
}

function calculateArea(){
    const multi = calculate(Number(input1[0].value),Number(input1[1].value));
    const area = 0.5*(multi);
    result.innerText = "Area:- "+ area;
}


check.addEventListener("click",calculateArea);
