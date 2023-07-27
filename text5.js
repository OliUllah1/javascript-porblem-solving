//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(x,y,operator){
    if(operator == '+'){
        return x+y;
    }
    else if(operator == '-'){
        return x-y;
    }
    else if(operator == '*'){
        return x*y;
    }
    else if(operator =='/'){
        return x/y;
    }
}

const result = calculator(4,2,'/')
console.log(result)