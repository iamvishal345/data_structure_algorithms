// deep compare

var a, b;

const compare = (a,b)=>{

    if(typeof a !== typeof b){
        return false
    }
    
    if(typeof a === "string" || typeof a === "number" || typeof a === "boolean"){
        return a ===b
    }
    
    if(Array.isArray(a)){
        return compareArray(a,b)
    }
    
    return compareObject(a,b)

}

const compareArray = (a,b)=>{

    if(typeof a !== typeof b){
            return false
     }
     
     if(a.length !== b.length) return false;

    for(let i=0; i<a.length; i++){
        if(typeof a[i] === "object"){
            if(Array.isArray(a[i]) && Array.isArray(b[i])){
                return compareArray(a[i],b[i])
            }else{
                return compareObject(a[i],b[i])
            }
            
        }else{
            return a[i] === b[i]
        }
        
    }
    
    return true
}

const compareObject = (a,b)=>{
    
    if(Object.keys(a).length !== Object.keys(b).length) return false
    
    
    
 

}


const redux = {
    store:{};
    reducer:(state,action){
        return state
    },
    dispatch:(action){
        
        this.store = reducer(this.store,action)
        
    },
    subscribe:(propName){
        
    }



}

useSelector

state = {
    data: {
        name: 'ABC',
        values: {
            description: 'Lorem ipsumn...',
            title: 'New State'
        }
    }
}

const title = useSelector((state) => state.data.values).title;
const title2 = useSelector((state) => state.data.values.title);





[[price, beauty], [], [], []]

Input
[[1,4], [2,3], [1,6], [3,5]]
Input 2
prices[1, 2, 3, 4, 5]

[4, 3, 5, 0, 0]


const getData = (arr,prices){
    prices.map(price=>({[price]:0}))
    const beauty = {1:6,3:5, 4:0}
    
    for(let i =0; i<prices.lenght; i++){
            
            
        
    }

}




// [2,5,6,3] => 90

// [1,5,4,2,3,6] => 120

// [-4, -5,-7, 2, 3, 6]

// [-5, 4, 3, 2]

const 