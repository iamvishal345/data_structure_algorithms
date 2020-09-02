let arr = [9,5,8,3,23,78,35,32,1,96,58,6,0]

const selectionSort = (arr)=>{

    let minIndex

    for (let i = 0; i < arr.length-1; i++) {
        minIndex = i
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
    }
    return arr
}

console.log(selectionSort(arr))