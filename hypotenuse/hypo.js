const input = document.querySelectorAll('.side-input');
const button = document.querySelector('#check');
const result = document.querySelector('#output');

function sumOfSquare(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypo(){
    const sumOfSquares = sumOfSquare(Number(input[0].value),Number(input[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    result.innerText = "The legth of Hypotenuse is "+ lengthOfHypotenuse;
}


button.addEventListener("click", calculateHypo);