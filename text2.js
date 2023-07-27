//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

//Example Input: [2, -5, 10, -3, 7] Example Output: 19


function positiveNumberSum(arr){
    let positiveSum = 0;
    for(let i=0; i<arr.length ; i++){
        if(arr[i]> 0){
            positiveSum += arr[i];
        }
    }
    return positiveSum;
}
const input= [2, -5, 10, -3, 7]
const result = positiveNumberSum(input)
console.log(result)
