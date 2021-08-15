const angle = document.querySelectorAll('.input');
const check = document.querySelector("#button");
const result = document.querySelector('#output');

function calculateSum(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isItTriangle(){
    const sumOfAngles = calculateSum(Number(angle[0].value),Number(angle[1].value),Number(angle[2].value));
    if(sumOfAngles === 180){
        result.innerText = "Yay! Its a triangle";
    }
    else{
        result.innerText = "Ohh no it's not";
    }

}

check.addEventListener("click", isItTriangle)