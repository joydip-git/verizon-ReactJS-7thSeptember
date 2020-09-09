// function Person() {
//     this.age = 0;
//     var that = this;
//     // console.log(this)
//     setInterval(function() {
//         // console.log(this)
//         that.age++;
//         console.log(that.age)
//     }, 1000);
// }
/*
function Person() {
    this.age = 0;
    //var that = this;
    // console.log(this)
    setInterval(() => {
        // console.log(this)
        this.age++;
        console.log(this.age)
    }, 1000);
}

var p = new Person();

var add = (x, y) => {
    return (x + y);
}
var result = add(10, 20);
console.log(result)
*/
function counter() {
    this.count = 0;
    console.log(this)
    var increaseCounter = () => {
        console.log(this)
        this.count++;
        console.log(this.count);
    }
    //increaseCounter = increaseCounter.bind(this);
    return increaseCounter;
}
var callback = new counter();
callback();
callback();
// callback.increaseCounter();
// callback.increaseCounter();

//Object.bind(increaseCounter, new counter());

/*
class Counter {
    constructor() {
        this.counter = 0;
    }
    increaseCounter() {
        this.counter++
        console.log(this.counter)
    }

     //Counter.prototype.increaseCounter = function(){ this.counter++;}

}
var counterObj = new Counter();
counterObj.increaseCounter();//Counter.prototype.increaseCounter.apply(this);
counterObj.increaseCounter();
*/


