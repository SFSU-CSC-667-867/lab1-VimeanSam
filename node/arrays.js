// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice

// use forEach
const test = [9, 3, 4];
console.log(test);
test.forEach((n) => {
    console.log(n);
});

// use map
const newArray = test.map(i => i+1);
console.log(newArray);
// use pop
//remove the last element
newArray.pop();
console.log(newArray);
// use push
newArray.push(6);
console.log(newArray);
// use shift
//pop front
newArray.shift();
console.log(newArray);
// use unshift
//push front
newArray.unshift(5);
console.log(newArray);
// use filter
