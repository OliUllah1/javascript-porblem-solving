//Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

//Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function mostFrequentElement(arr){
    let currentNumber =0;
    let frequentElement ;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j])
                count++;
        }
 
        if (count > currentNumber) {
            currentNumber = count;
            frequentElement = arr[i];
        }
    }
 
    return frequentElement;
}

const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = mostFrequentElement(inputArray)
console.log(result)