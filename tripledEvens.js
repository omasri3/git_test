// Initialize Sum
let sum = 0;
let sum2 = 0;
let arr = [2, 4, 5];
// For every number in the array
// If the number is odd multiply by 3
filteredArr = arr.filter((num) => num % 2 == 0);
mappedArr = filteredArr.map((num) => num*3);
total = mappedArr.reduce((sum, num) => sum += num, sum);
// Add the mulitplied number to the sum

console.log(total);

otherTotal = arr.reduce((sum2, num)=> {
    sum2 += arr.map((num)=>{
        3 * arr.filter((num)=> num % 2 == 0);
        console.log(num);
    })
    console.log(sum2);
}, sum2);

console.log(sum2);

function sumOfTripledEvens(arr){
    return arr
    .filter((num) => num % 2 === 0)
    .map((num) => num*3)
    .reduce((sum, num) => sum+num, 10)
}

console.log(sumOfTripledEvens(arr));