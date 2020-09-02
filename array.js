class MyArray{
    constructor(){
        this.length = 0
        this.data = {}
    }

    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item;
        this.length++
        return this.length
    }
    pop(){
        let lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
    }
    delete(index){
        this.shiftItems(index)
        delete this.data[this.length-1]
        this.length--

    }
    shiftItems(index){
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1]
        }
    }
}

const newarr = new MyArray()
newarr.push("Hi")
newarr.push("fiji")
newarr.push("you")
newarr.push("me")
newarr.delete(2)
console.log(newarr)
