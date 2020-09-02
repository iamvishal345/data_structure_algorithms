const findFactorialRecursive=(number)=>{
    if(number=== 0 || number=== 0)return 1
    if(number === 2)return 2
    return  number * findFactorialRecursive(number-1)
}

const findFactorialIterative=(number)=>{
    let factorial = 1
    for (let i = number; i >=2; i--){
        factorial = factorial*i
    }
    return factorial
}

// console.log(findFactorialRecursive(5))
// console.log(findFactorialIterative(0))
//011235813
let calculations = 0
const fibonacciRecursive = (index)=>{
    calculations++
    if(index<2)return index
    return fibonacciRecursive(index-1)+fibonacciRecursive(index-2)
}

const fibonacciIterative = (index)=>{
    if(index===0)return 0
    if(index===1)return 1
    if(index===2)return 1
    let firstNumber = 1;
    let secondNumber = 1
    let temp
    for (let i = 3; i <=index; i++) {
        temp = firstNumber+secondNumber
        firstNumber =secondNumber
        secondNumber = temp
    }
    console.log(secondNumber)
}
// fibonacciIterative(6)
console.log(fibonacciRecursive(35))
console.log(calculations)