// Пункт 1

const countTrue = (arr) =>{

    let sum = 0;

    for (let elem of arr) {

        if (elem === true) {
            sum += 1;
        } 
    }

    return sum;
}

let sumArray = countTrue([true, false, false, true, false]);
// let sumArray = countTrue([false, false, false, false]);
// let sumArray = countTrue([]);
console.log(`sumArray`, sumArray)




// Пункт 2

const getOccurrencesCount = (arr) => {

    let sumEntry = {}

    for (let elem of arr) {
        if (!sumEntry[elem]) {
            sumEntry[elem] = 1
        } else {
            sumEntry[elem] += 1
        }
    }

    console.log(`sumEntry`, sumEntry)

    return sumEntry;
}

let occurrencesCount = getOccurrencesCount(["a", "v", "a", "b", "b"]);
// let occurrencesCount = getOccurrencesCount([
//     "apples",
//     "oranges",
//     "pears",
//     "pears",
//     "apples",
//     "oranges",
//     "oranges",
//     "pears",
//   ]);

console.log(`occurrencesCount`, occurrencesCount)




// Пункт 3

let findExcess = (arr) => {

    let oddNumber = [];
    let evenNumber = [];

    for (let i of arr) {
        if (i % 2 == 0) {
            evenNumber.push(i)
        } else {
            oddNumber.push(i)
        }
        
    } 

    if (oddNumber.length > evenNumber.length){
        return evenNumber[0]
    } else {
        return oddNumber[0]
    }
}

// let unnecessaryNumber = findExcess([0, 1, 2]);
// let unnecessaryNumber = findExcess([1, 2, 3]);
// let unnecessaryNumber = findExcess([0, 0, 3, 0, 0]);
let unnecessaryNumber = findExcess([1, 1, 0, 1, 1]);
console.log(`unnecessaryNumber`, unnecessaryNumber)