const form = document.querySelector('.quiz-form');
const submit = document.querySelector('#submit-answer');
const output = document.querySelector('#output');

const correctAnswer = ["90°", "right angled","180°","Isosceles triangle","Equilateral triangle"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(form);
    for(let value of formResults.values()){
        if(value === correctAnswer[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "Yayy!! you scored " + score;
}

submit.addEventListener('click', calculateScore);