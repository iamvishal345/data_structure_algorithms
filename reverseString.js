const string = "This is a String"

const reverseString = (string)=>{
    let arrString = string.split('')
    let arrLength = arrString.length
    let reverseArr = []
    for (let i = arrLength-1; i >=0; i--) {
        reverseArr.push(arrString[i])
    }
    return reverseArr.join('')
}

console.log(reverseString(string));