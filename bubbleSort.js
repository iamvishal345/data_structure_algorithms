let arr = [9,5,8,3,23,78,35,32,0,96,58,6,1]

const bubbleSort = (arr)=>{
    let steps = true;
    while(true){
        steps = true
        for (let i = 0; i < arr.length-1; i++) {
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                steps = false
            }
        }
        if(steps)break;
    }
    return arr
}

console.log(bubbleSort(arr))