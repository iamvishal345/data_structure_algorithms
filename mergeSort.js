let arr = [9,5,8,3,23,78,35,32,1,96,58,6,0]

const mergeSort = (arr)=>{

    if(arr.length === 1)return arr
    let half = Math.ceil(arr.length/2)
    let left = arr.splice(0,half)
    let right = arr.splice(-half)

    return merge(mergeSort(left),mergeSort(right))
}
const merge = (left,right)=>{
    console.log(left,right)
    let leftIndex = 0
    let rightIndex = 0
    let resultArr = []
    while(leftIndex<left.length && rightIndex< right.length){
        if(left[leftIndex]< right[rightIndex]){
            resultArr.push(left[leftIndex])
            leftIndex++
        }else{
            resultArr.push(right[rightIndex])
            rightIndex++
        }
    }

    return resultArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

console.log(mergeSort(arr))