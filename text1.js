//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

//Example Input: "hello world" Example Output: "dlrow olleh"

function reverseString(string){
    let stringRevers = '';
    for(let i=string.length-1; i>=0 ; i--){
        stringRevers += string[i]
    }
    return stringRevers;
}

const result = reverseString('hello world');
console.log(result)
