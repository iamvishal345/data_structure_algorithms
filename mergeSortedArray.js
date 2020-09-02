const arr1 = [0,7,9,12,18,19]
const arr2 = [2,4,6,8,11,15,17]

const mergeSortedArray = (arr1,arr2)=>{
    const mergedArr = []
    let item1 = arr1[0]
    let item2 = arr2[0]
    let i = 1
    let j = 1

    while (item1||item2) {
        if(!item2 || item1<item2){
            mergedArr.push(item1)
            item1 = arr1[i]
            i++
        }else{
            mergedArr.push(item2)
            item2 = arr2[j]
            j++
        }
    }
    return mergedArr
}

console.log(mergeSortedArray(arr1,arr2))