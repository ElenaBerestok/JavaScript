const LOGIN = 'ADMIN';
const PASSWORD = '1q2w3e';


const autorize = () => {
    let userLogin;
    let userPassword;
    let isAuthSuccess = false;
    let i = 3;

    nextTry: do {
        userLogin = prompt('Логин: ');
        if (!userLogin) {
            alert ('Введите логин');
            continue;
        }

        userPassword = prompt('Пароль: ');
        if (!userPassword) {
            alert ('Введите пароль');
            continue;
        }

        if ((userPassword !== PASSWORD) || (userLogin !== LOGIN)) {
            while (i) {
            alert(`Данные неверны. Осталось ${i-1} попыток`);
            i--;
            console.log ('i', i)
            break ;
            } 
        }

        if (i == 0) {
            break nextTry;
        }

        if ((userPassword === PASSWORD) && (userLogin === LOGIN)) {
            isAuthSuccess = true;
            console.log ('Password true', isAuthSuccess)
        }

    } while (!isAuthSuccess)
    

    if (i == 0){
        alert ('Try later');
    } else {
        alert ('Welcome');
    }

};

autorize ()


// Пункт 2

let userNumber = Number(prompt ('Укажите первое число "от" из промежутка чисел'));

let userNumber2 = Number(prompt ('Укажите второе число "до" из промежутка чисел'));


next: for (let i = userNumber; i <= userNumber2; i++) {
    for (let j = 2; j < i; j++){
        if (i % j == 0) continue next;
    }
    console.log ( 'i', i )
}