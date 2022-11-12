// Пункт 1


const data = [
  {
    name: "John",
    age: 24,
    position: "senior",
    isActive: false,
  },
  {
    name: "Peter",
    age: 33,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sam",
    age: 29,
    position: "junior",
    isActive: true,
  },
  {
    name: "Mary",
    age: 24,
    position: "middle",
    isActive: false,
  },
  {
    name: "Steve",
    age: 23,
    position: "middle",
    isActive: true,
  },
  {
    name: "Kate",
    age: 31,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sally",
    age: 19,
    position: "junior",
    isActive: false,
  },
  {
    name: "Jack",
    age: 19,
    position: "middle",
    isActive: true,
  },
];

const filterData = (arr, userInfo) => {

  let res = arr.filter(value => {
    return Object.keys(userInfo).every(key => {
      return value[key] === userInfo[key]
    })
  });

  return res;

};

let filterDataFunct = filterData(data, { age: 23 });
// let filterDataFunct = filterData(data, { age: 24 });
// let filterDataFunct = filterData(data, { age: 19, position: "junior" });
console.log (`filterDataFunct`, filterDataFunct)



// Пункт 2

const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
  // console.log(`In array [${array}] on position ${index}: ${element}`);
};

let numberArr = [1, 2, 3];
let negativeNumber = [-2, 4, -1];



// ForEach

numberArr.forEach(logger)
// console.log(`numberArr.forEach(logger)`, numberArr.forEach(logger))



let ownForEachFunct = (arr, funct) => {
  
  let ownForEachArr = [];

  for (let i = 0; i < arr.length; i++) {
    logger(i + 1, i, arr);
    ownForEachArr.push(i + 1);
  }
  return ownForEachArr
}


let ownForEach = ownForEachFunct(numberArr, logger)
// console.log(`ownForEach`, ownForEach)





// map

numberArr.map(increment)
// console.log(`numberArr.map(increment)`, numberArr.map(increment))


let ownMapFunct = (arr, funct) => {

  let ownMapArr = []

  for (let n = 0, j = 1; n < arr.length; n++, j++) {
    funct(j + 1);
    ownMapArr.push(j + 1)

    // console.log(`n`, n)
    // console.log(`j`, j)
    // console.log(arr[n])
  }

  return ownMapArr
}

let ownMap = ownMapFunct(numberArr, increment);
// console.log(`ownMap`, ownMap)


// filter

negativeNumber.filter(isNegative)
// console.log(`negativeNumber.filter(isNegative)`, negativeNumber.filter(isNegative))


let ownFilterFunct = (arr) => {

  const negativeArr = []

  for (let k = 0; k < negativeNumber.length; k++) {
    if (negativeNumber[k] < 0) {
      negativeArr.push(negativeNumber[k])
    }
  }

  // console.log(`negativeArr`, negativeArr)

  return negativeArr
}

let ownFilter = ownFilterFunct (negativeNumber)
// console.groupCollapsed(`ownFilter`, ownFilter)



