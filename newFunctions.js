function camelize (str) {
    strArr = str.split("-")
    let camelStr = ""
    for (i=0; i<strArr.length; i++) {

        if(i == 0) {
            camelStr = strArr[i].toLowerCase();
            console.log(camelStr);
        } else {
            camelStr = camelStr + strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
            console.log(camelStr);
        }

    }
    return camelStr;
}

//console.log(camelize("Super-Duper-Texting-Goober"));

function filterRange(arr, lowerFilter, upperFilter) {
    let filteredArr = arr.filter(num => num >= lowerFilter && num <= upperFilter);
    return filteredArr;
}

//console.log(filterRange([2,7,5,3,10], 4, 9));

let arr = [2, 5, 4, 0, -9, -9];

function filterRangeInPlace (num, lowerFilter, upperFilter) {
    return num >= lowerFilter && num <= upperFilter;
}

// for (i=0; i<arr.length; i++) {
//     higherArr = arr.filter(num => num > arr[i]);
//     console.log(higherArr)
//     lowerArr = arr.filter(num => num < arr[i]);
//     console.log(lowerArr)
//     dupeArr = arr.filter(num => num === arr[i]);
//     console.log(dupeArr)
//     arr = lowerArr.concat(dupeArr, higherArr);
//     console.log(arr)
// }

// arr.sort((a,b) => b - a);
// console.log(arr);

function copySorted (strArray) {
    for (i=0; i<strArray.length; i++) {
    laterArr = strArray.filter(str => str > strArray[i]);
    earlierArr = strArray.filter(str => str < strArray[i]);
    dupeArr = strArray.filter(str => str === strArray[i]);
    strArray = earlierArr.concat(dupeArr, laterArr);
    console.log(strArray)
    }
    return strArray
}

// strArray = ["Hello", "Hi", "ABC", "DEF", "HELLO"];

// console.log(copySorted(strArray))

//console.log(arr);
//For each item
// check and see which numbers are lower and which are higher
// put the item in between the lower and higher numbers

//For each string
//check and see which first letters are higher and which are lower
// put the string in the right position


function shuffle(arr) {
    let maxIndex = arr.length - 1;
    let minIndex = 0;
    let shuffledArr = [];
    for (i = 0; i<arr.length; i++){
        beforeOrAfter = Math.random();
        if (beforeOrAfter < 0.5) {
            tempItem = [arr[i]];
            //console.log(typeof tempItem);
            shuffledArr = tempItem.concat(shuffledArr);
        } else {
            //console.log(typeof arr[i])
            tempItem = [arr[i]]
            shuffledArr = shuffledArr.concat(tempItem);
        }
    }
    return shuffledArr;
}


function shuffleAlt(arr) {
    indices = generateInts(arr.length)

}

function generateInts(num) {
    num = Math.floor(num);
    numArr = [];
    for (i = 0; i < num; i++) {
        numArr = numArr.concat([i])
    }
    return numArr;
}

arr = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));

//For each item in the array
//If the item is not in the unique collection
//Add the item to the unique collection
//Else don't add the item to the unique collection

function unique(arr) {
    uniqueArr = [];
    for (i = 0; i<arr.length; i++){
        //console.log(arr.find(element => element === uniqueArr));
        isInUnique = uniqueArr.find(element => element === arr[i]);
        //console.log(typeof isInUnique === 'undefined')
        if (typeof isInUnique === 'undefined') {
            //console.log(arr[i]);
            uniqueArr = uniqueArr.concat([arr[i]]);
        }
    }
    return uniqueArr;
}

// strArr = ["wee", "wee", "cow", "cow", "--00"]

// console.log(unique(strArr));


function mapNames(objArray) {
    let nameArray = [];
    for (let i=0; i<objArray.length; i++){
        nameArray = nameArray.concat([objArray[i].name]);
    }
    return nameArray;
}

function mapObjects(objArray) {
    let newObjArray = [];
    for (let i=0; i<objArray.length; i++) {
        newObjArray[i] = {
            fullName: objArray[i].name + " " + objArray[i].surName,
            id: objArray[i].id
        }
    }
    return newObjArray;
}

function sortByAge(a,b){
    return
}

let john = {name: "john", surName: "Doe", age: 35, id: "john"};
let jane = {name: "jane", surName: "Hunt", age: 25, id: "jane"};
let joe = {name: "boe", surName: "Shmoe", age: 45, id: "boe"};

users = [john, jane, joe]

//console.log(mapObjects(users));

users.sort((a,b) => {
    return a.age - b.age
})

//console.log(users)
let averageAge = 0;
users.forEach((user) => {
    averageAge = averageAge + user.age;
    console.log(averageAge);
    console.log(user.age);
});
averageAge = averageAge / users.length;
//console.log(averageAge)

organizedById = users.reduce((accumulator, currentValue) => {
    accumulator[currentValue.id] = currentValue;
    return accumulator;
},{});

console.log(users)
console.log(organizedById)
