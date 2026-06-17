console.log("== REUSABLE CALCULATOR FUNCTIONS ==");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(11, 5));
console.log("Multiplication:", multiply(12, 5));
console.log("Division:", divide(10, 5));

console.log("== FIND LARGEST NUMBER IN ARRAY ==");

let numbers = [15, 40, 8, 90, 22];

function findLargest(arr) {

    let largest = arr[0];

    for(let i = 1; i < arr.length; i++) {

        if(arr[i] > largest) {
            largest = arr[i];
        }

    }

    return largest;
}

console.log("Largest Number:", findLargest(numbers));

console.log("== REVERSE ARRAY==");

let fruits = ["Apple", "Litchi", "Mango","Banana"];

function reverseArray(arr) {

  let reversed = [];
  for(let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}
return reversed;
}

console.log("Original Array:", fruits);
console.log("Reversed Array:", reverseArray(fruits));

console.log("== FUNCTION INPUT → OUTPUT DRY RUN==");

function square(num) {
return num * num;

}
let result = square(5);

console.log("Input:", 5);
  console.log("Output:", result);

