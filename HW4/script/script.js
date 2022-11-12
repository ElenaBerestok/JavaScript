// ДЗ пункт 1

function sum (a, b) {
    return a + b;
}

sum (3, 8);
console.log (sum (3, 8));

sum (10, 11);
console.log (sum (10, 11));


// Стрелочная функция

let sum2 = (a, b) => a + b;

sum2 (5, 10);
console.log (sum (5, 10));

sum2 (1, 10);
console.log (sum (1, 10));


// ДЗ пункт 2

let userName = prompt ('Введите имя');

let userAge = prompt ('Укажите возраст');

function Hello () {
    if (userAge < 30){
        let message = 'Привет, '+ userName;

        alert(message);
    } else {
        message = 'Здравствуйте, '+ userName;

        alert(message);
    }

}

Hello ();


// ДЗ пункт 3

function degree (a, b = 2) {
    return a**b;
}

degree (5, 3);
console.log (degree (5, 3));

degree (4);
console.log (degree (4));