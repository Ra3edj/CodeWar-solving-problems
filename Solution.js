// 1) Opposite number (code war)
function opposite(number){
    return (-number)
}

// 2) Rock Paper Scissors!
const rps = (p1, p2) => {
    if(p1 == p2){
      return "Draw!";
    }
    
    else if(p1 == "scissors"){
      return p2 == "paper" ? "Player 1 won!":"Player 2 won!";
    }
    
    else if(p1 == "rock"){
      return p2 == "scissors" ?"Player 1 won!":"Player 2 won!";
    }
    
    else if(p1 == "paper"){
      return p2 == "rock" ? "Player 1 won!":"Player 2 won!";
    }
  };

// 3) Find Nearest square number
function nearestSq(n){
  return Math.pow(Math.round(Math.sqrt(n)) , 2);
};

// 4) L1: Set Alarm
function setAlarm(employed, vacation){
  return employed == true && vacation == false ? true : false;
};

// 5) Function 3 - multiplying two numbers
function multiply(x,y){
  return x*y
}

// 6) Convert a String to a Number!
const stringToNumber = function(str){
  // put your code here
  return Number(str);
}

// 7) Is he gonna survive?
const hero = (bullets, dragons) =>{return bullets / 2  >= dragons};

// 8) Return Negative
const makeNegative = (num) => {return num > 0 ? -num : num};

// 9) Is n divisible by x and y?
const isDivisible = (n, x, y) => {return n % y == 0 && n % x == 0 ? true : false};

// 10) FIXME: Replace all dots
const replaceDots = (str)=> { return str.replace(/\./g, '-')};

// 11) Sum without highest and lowest number
function sumArray(array) {

  if(array == null || array.length == 0){return 0}
  
  else{
      let max = Math.max(...array);
      let min = Math.min(...array);
      let count = 0;

      for(let i = 0; i < array.length; i++){
          count += array[i];
      }
      if(max == min){
          return 0;
      }
      else{
          count = count - (max + min);
          return count;
      }     
  }
}
// 12) Find the position!

function position(letter){
  //Write your own Code!
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for(let i = 0; i < alphabet.length; i++){
      if(letter == alphabet[i]){
          return `Position of alphabet: ${i + 1}`
      }
  }
  }

// 13) Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  // your code here
  if(input == null || input.length == 0){return []}
  
else{
    let count_positive  = [];
    let sum_negative = 0;

    for(let i = 0; i < input.length; i++){

        if(input[i] > 0){
          count_positive.push(input[i]);
        }

        else if(input[i] < 0){
                sum_negative += input[i];
    }
       } return [count_positive.length , sum_negative];
  }
}

// 14) Convert a Boolean to a String
const booleanToString = (b)=> { return b == true?"true": b ==false? "false":null}

// 15) N-th Power
function index(array, n){
  //your code here
  if(array.length > n){
    return Math.pow(array[n],n);
  }
  else{
    return -1
  }
}
// 15) N-th Power 2)
const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;

// 16) Sum Numbers
function sum (numbers) {
  let count = 0;
if(numbers.length == 0){
return count;
}else{

for(let i = 0; i < numbers.length; i++){
    count += numbers[i];
}return count;
}
};

// 17) Capitalization and Mutability
function capitalizeWord(string) {
  let i = string.replace(string[0],string[0].toUpperCase())
  return i;
}

// 18) Will there be enough space?
function enough(cap, on, wait) {
  if(cap >= (on + wait)){
    return 0;
  }else{
    return -((cap - on) - wait)
  }
}

// 19) Playing with cubes II
class Cube {
  constructor(side = 0){
    this.side = side;
  }
  getSide() {
    return this.side > 0 ? this.side:-this.side ; 
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}

// 20) Counting sheep...
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let count = 0;
  for(let i = 0; i <= arrayOfSheep.length; i++){
      if(arrayOfSheep[i]){
        count++;
        console.log(arrayOfSheep[i]);
      }
  }
  return count;
}
