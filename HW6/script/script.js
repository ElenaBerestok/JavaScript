// Пункт 1

const isValid = (value) => !isNaN(value) && isFinite(value);

let userName;
let userSurname;
let userPassword;


const getName = () => {

    do {
        userName = prompt('Введите имя')
    } while (isValid(userName))

    console.log (`userName`, userName)
    return;
};

getName()



const getSurname = () => {

    do {
        userSurname = prompt('Введите фамилию')
    } while (isValid(userSurname))

    console.log (`userSurname`, userSurname)
    return userSurname;
};

getSurname()

const getPassword = () => {

    do {
        userPassword = prompt ('Введите пароль');

        if ((userPassword.length < 6) || 
        (userPassword === userPassword.toUpperCase()) || 
        ( userPassword === userPassword.toLowerCase())) {
            alert ('Пароль должен содержать минимум 6 символов и символы разного регистра')
        } else {
            break
        }


    } while (true)

    console.log (`userPassword`, userPassword)
};

getPassword()


const newFormatUserValue = () => {

    let newFormatName = userName[0].toUpperCase() + (userName.slice(1)).toLowerCase();
    console.log (`newFormatName`, newFormatName)

    let newFormatSurname = userSurname[0].toUpperCase() + (userSurname.slice(1)).toLowerCase();
    console.log (`newFormatSurname`, newFormatSurname)

    alert (`Welcome, ${newFormatName}  ${ newFormatSurname}`)
}

newFormatUserValue ();
console.log (`newFormatUserValue`, newFormatUserValue)



// Пункт 2

let minRandomNumber;
let authSuccess = false;

do {
    minRandomNumber = Number(prompt('Укажите нижнюю границу диапазона'))

    if (minRandomNumber < 0 ) {
        alert ('Введите число больше 0')
    }
    
    if( isNaN(minRandomNumber)) {
        alert ('Введите число')
    }

    if (minRandomNumber > 0 && !isNaN(minRandomNumber)) {
        authSuccess = true;
    }

} while (!authSuccess)

console.log (`minRandomNumber`, minRandomNumber)

let maxRandomNumber;
let isExit = false;

do {
    maxRandomNumber = Number(prompt('Укажите верхнюю границу диапазона'))

    if (maxRandomNumber < minRandomNumber ) {
        alert ('Введите число больше предыдущего')
    }
    
    if( isNaN(maxRandomNumber)) {
        alert ('Введите число')
    }

    if (maxRandomNumber > minRandomNumber && !isNaN(maxRandomNumber)) {
        isExit = true;
    }

} while (!isExit)

console.log (`maxRandomNumber`, maxRandomNumber)

const getRandomInteger = (minRandomNumber, maxRandomNumber) => {
    return Math.round(minRandomNumber + Math.random() * (maxRandomNumber-minRandomNumber));
};

const randomInteger = getRandomInteger(minRandomNumber, maxRandomNumber);
console.log (`randomInteger`, randomInteger)