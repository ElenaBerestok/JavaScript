// ДЗ пункт 1

const userAnswer = Number(prompt ('Выберите число'));
console.log(userAnswer);


const userAnswerTwo = Number(prompt ('Выберите ещё одно число'));
console.log(userAnswerTwo);

if (userAnswer > userAnswerTwo) {
    alert ('Число '+ userAnswer + ' больше, чем число '+ userAnswerTwo);
} else if (userAnswer < userAnswerTwo) {
    alert ('Число '+ userAnswer +  ' меньше, чем число '+ userAnswerTwo);
} else {
    alert ('Числa равны');
    console.log ('Числa равны');
} 


// ДЗ пункт 2

const question = Number(prompt ('Выберите число'));
console.log(question);

const questionTwo = Number(prompt ('Выберите ещё одно число'));
console.log(questionTwo);

const questionThree = prompt ('Выберите математическое действие');
console.log(questionTwo);

switch (questionThree){
    case '+':
        alert ( question + questionTwo);
        break;
    case '-':
        alert ( question - questionTwo);
        break;
    case '*':
        alert ( question * questionTwo);
        break;
    case '/':
        alert ( question / questionTwo);
        break;
    default:
        alert ( 'Не знаю такого действия');
}

// // ДЗ пункт 3

const userAge = Number(prompt ('Укажите свой возраст'));
console.log(userAge);

const withParents = confirm('Вы с родителями?');

if (userAge >= 18 && userAge <= 60) {
    alert ('Доступ разрешен');
    console.log( 'Доступ разрешен');
} else if ((userAge >= 12 && userAge <= 80) && (withParents)) {
    alert ('Доступ разрешен');
    console.log( 'Доступ разрешен');
} else {
    alert ('Доступ запрещён');
    console.log( 'Доступ запрещён');
}