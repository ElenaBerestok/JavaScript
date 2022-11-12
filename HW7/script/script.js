// Пункт 1

let time;
let task;
let userInfo = {};



const userAnswers = () => {

    do {

        time = prompt (`Укажите время в формате 'часы:минуты'`, `00:00`)
        console.log(`time`, time);

        if (time === null) {
            break
        }

        task = prompt('Укажите задачу');
        console.log(`task`, task)

        if (task === null) {
            break
        }

        userInfo[time] = task
        console.log ('userInfo', userInfo); 

    } while (true);

   
    return;

}

const userTimetable = userAnswers();



// Пункт 2

const sum = () => {
    const salaries = {
        John: "4300.00",
        Ann: "5700.40",
        Pete: "4900.95",
    };

    let result = 0;
    for ( let key in salaries) {
        result += (Number(salaries[key]));
    }

    return +(result.toFixed(2))
};


let sumSalaris = sum();
console.log('sumSalaris', sumSalaris)