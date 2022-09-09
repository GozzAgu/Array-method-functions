const numbers = [2,4,6,8,0,8,6,4,2,1,3,5,7,9,7,5,3,1];
const names = ['john', 'sarah'];
let locations = ['abuja', 'lagos'];
const obj = {name: 'james', age: 23}

//
const realNumbers = Array.from(new Set(numbers));

//REDUCE FUNCTION
function reduce() {
    if(numbers.length === realNumbers.length) {
        console.log('no dupes');
    } else {
        console.log('1 reduce function', realNumbers);
    }
}
reduce();



//PUSH FUNCTION
let pushNumber = 0;
function push() {
    realNumbers[realNumbers.length] = pushNumber;
    console.log('2 push function', realNumbers);
}
push();



//POP FUNCTION
function pop() {
    realNumbers.splice(realNumbers.length - 1)
    console.log('3 pop function', realNumbers);
}
pop();



//UNSHIFT FUNCTION
function unshift() {
    let firstNumber = [];
        newNum = [...firstNumber, ...realNumbers];
        console.log('4 unshift function', newNum);
}
unshift();



//SHIFT FUNCTION
function shift() {
    let lastNumber = [];
    newNum = [...realNumbers, ...lastNumber];
    console.log('5 shift function', newNum);
}
shift();



//CONCAT FUNCTION
function concat() {
    locations = [...locations, ...names];
    console.log('6 concat function', locations);
};
concat();


//TOSTRING FUNCTION
function toString() {
    let realNumbers = numbers + '';
    console.log('7 toString function', realNumbers)
}
toString();


//FILTER FUNCTION
function filter() {
    console.log('8 filter function')
    for(i = 0; i < 10; i++) {
        if(i % 2 == 0) {
            console.log(i)
        }
    };
}
filter();
