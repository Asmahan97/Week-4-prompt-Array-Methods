// Defining some arrays

let numbersOne = [1, 4, 5, 7];
let numbersTwo = [23, 4, 65, 12];
let numbersThree = [1, 2];
var emptyArray = []

// Write a function which doubles the number it's given



// Write a function which multiplies the first num, by the second

function multiply(num1, num2) {
  return num1 * num2;
}

// Use the map method, to call the doubleNum function

const map1Arrow = numbersOne.map((element) => element * 2);

const map1Callback = numbersOne.map(doubleNum);

const map1InlineCallback = numbersOne.map(function timesTwo(element) {
  return element * 2;
});


// Use the map method to multiply the element by its index

const map2 = numbersOne.map(multiply);

// Log the result
//console.log(map2)


// 2. Use the filter method to fill an array with the numbers which are divisible by two

function divisibleByTwo(num) {
  return (num % 2 == 0) ? true : false
}
//console.log(divisibleByTwo())

//console.log(numbersOne.filter(divisibleByTwo))
//console.log(numbersTwo.filter(divisibleByTwo))
//console.log(numbersThree.filter(divisibleByTwo))

// 3. Use the reduce method, to return the total of each array

let sum = numbersOne.reduce(function (accumulator, current) {
  return accumulator + current;
});
//console.log(sum);


let input = document.querySelector('input')
let value = input.value
let function1 = document.getElementById('function1')
let function2 = document.getElementById('function2')
let button = document.getElementById('button')
let outputMessage = document.querySelector('p')


function1.addEventListener('click', doubleNum)
function doubleNum(input) {
  let value1 = input.value*2
  outputMessage.innerText=value1
  }

  function2.addEventListener('click', multiply)
  function multiply(input) {
    return input * input;
  }

  function output() {
    if (doubleNum) {
      outputMessage.innerText = doubleNum.value
    }
    else if (multiply) {
      outputMessage.innerText = multiply.value
    }
  }
  
  button.addEventListener('click', output);
  
  
  