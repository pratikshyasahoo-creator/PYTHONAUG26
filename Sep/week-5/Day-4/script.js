// Array

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);

// literal
// object

let objArr = new Array(1, 2, 3, 4);
console.log(objArr);

console.log(arr.length);

// method
arr.push(10);
arr.pop();
arr.pop();

arr.unshift(3, 5);
arr.shift();

console.log(arr);

console.log(arr.slice(4, 1)); // stIDx < endIdx

console.log(arr.slice(-2));

// arr.splice(1,2,80)

// console.log(arr.toSpliced(1,2,80))
// console.log(arr);

console.log(arr.toReversed());
console.log(arr);

console.log(arr.toSorted());
console.log(arr);

const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.join("-"));

let newArr = new Array(1, 2, 3);
console.log(newArr);

newArr.fill(8);
console.log(newArr);

//special method
// foreach
// map
// filter
// find
// findIndex
// reduce
// some
// every
// flat

let numbArr = [1, 2, 3, 4, 5];

numbArr.forEach((v) => {
  console.log(v);
});

let updateArr = numbArr.map((v, i) => {
  if (i === numbArr.length - 1) {
    return numbArr[i];
  }
  return v + 2;
});

console.log(updateArr);

let filterArr = numbArr.filter((v) => {
  return v % 2 === 0;
});

console.log(filterArr);

// %    1 % 2  == 1

console.log(numbArr.find((v) => v === 4));

let sum = numbArr.reduce((acuumu, curr) => {
  return acuumu + curr;
});
console.log(sum);

let isEven = numbArr.some((v) => v % 2 == 0);
console.log(isEven);

let nArr = [1, 2, [3, [4,5]]];
console.log(nArr.flat(Infinity));

nArr[0]=90;
console.log(nArr)

let str="Hello World";

// str[0]="S"
// console.log(str[0]);

console.log(str.replaceAll("l","S"))
console.log(str.split("o"))
