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

// 21) Powers of 2
function powersOfTwo(n){
    let arr = [];
    for(let i = 0; i <= n; i++){
       arr.push(Math.pow(2,i)); 
    }
    return arr;
  }

// 22) Beginner Series #1 School Paperwork
const paperwork = (n, m) => n < 0 || m < 0 ?  0 : m * n;

// 23) Reverse List Order
function reverseList(list) {return list.reverse()}

// 24) Is this my tail?
function correctTail(bod, tail){ return (bod.endsWith(`${tail}`)) ? true : false};

// 25) Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  
  if(arr1.length == 0 && arr2.length == 0){return []}
  
  else{
    let mergears = [...arr1 , ...arr2]   
    let sortarr1 = mergears.filter((value , index , mergears) => {
       return mergears.indexOf (value) === index;
  })
    return sortarr1.sort((a,b)=> a-b)
   
   }
  }

// 26) Compare within margin
function closeCompare(a, b, margin = 0){
  // ...
  if(margin >= a - b && margin >= b - a || -margin == a - b ){
    return 0
  }else if(a < b && margin <  b - a){
    return -1
  }else if(a > b && margin < a - b){
    return 1
  }
}

// 27) String Templates - Bug Fixing #5
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

// 28) Failed Sort - Bug Fixing #4
var sortArray = function(value) {
  return value.split('').sort((c, p) => c - p ).join('');
}

// 29) Find Maximum and Minimum Values of a List
var min = function(list){
    
  return Math.min(...list);
}

var max = function(list){
  
  return Math.max(...list);
}

// 30) Remove String Spaces

function noSpace(x){
  return x.replace(/ /g , "")
}

// 31) Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  return distanceToPump <= mpg * fuelLeft 
};

// 32) Convert a string to an array

function stringToArray(string){

	// code code code
  return string.split(" ")

}

// 33) Gravity Flip
const flip=(d, a)=>{
  //TODO
  return d == 'R' ? a.sort((a,b) => a - b) : a.sort((a,b) => b - a)
}

// 34) Quarter of the year
const quarterOf = (month) => {
  // Your code here
  return month >= 1 && month <=3 ? 1 : month >= 4 && month <= 6 ? 2 : month >= 7 && month <= 9 ? 3 : 4;
  
}

// 35) Can we divide it?
function isDivideBy(number, a, b) {
  // good luck
  return number % a == 0 && number % b == 0 
}

// 36) Student's Final Grade
function finalGrade (exam, projects) {
  return exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0;
}

// 37) Array plus array
function arrayPlusArray(arr1, arr2) {
  let mergearr = [...arr1 , ...arr2]; //something went wrong
  var count = 0;
  for(let i = 0; i < mergearr.length; i++){
    count += mergearr[i]
  }
  return count;
}

//38) Define a card suit  
function defineSuit(card) {
  // good luck
  return card.length == 2 ? "♠" == card[1] ? 'spades' : "♣" == card[1] ? 'clubs' :  "♦" == card[1] ? 'diamonds' : 'hearts' :
   "♠" == card[2] ? 'spades' : "♣" == card[2] ? 'clubs' :  "♦" == card[2] ? 'diamonds' : 'hearts'
}

// 39) For Twins: 1. Types
function typeValidation(variable, type) {
  // Your code should be here ;) 
  return typeof(variable) == type 
}

// 40) Type of sum
function typeOfSum(a, b) {
  // good luck
  return typeof(a) == "number" && typeof(b) == "number" ? "number" : 
  typeof(a) == "string" || typeof(b) == "string" ? "string": "number";
}

// 41) Third Angle of a Triangle
function otherAngle(a, b) {
  return 180 - a - b;
}

// 42) Reversed sequence
const reverseSeq = n => {
  let arr = [];
  for(let i = n; i > 0; i--){
    arr.push(i)
  }
  return arr;
};

// 43) Return the day
function whatday(num) {

  // put your code here
switch(num){
  case 1:
    return "Sunday";
    break;
   case 2:
    return "Monday";
    break;
   case 3:
    return "Tuesday";
    break;
  case 4:
    return "Wednesday";
    break;
   case 5:
    return "Thursday";
    break;
   case 6:
    return "Friday";
    break;
   case 7:
    return "Saturday";
    break;
    default: return "Wrong, please enter a number between 1 and 7"
}}

// 44) Sum The Strings
function sumStr(a,b) {
  return  Number(a) + Number(b) + ''
}

// 45) Invert values
function invert(array) {
  return array.map(num => -num)
}

// 46) Calculate Price Excluding VAT
//return price without vat
function excludingVatPrice(price){
  // your code
  let vat = (price * 100) / 115;
  return price == null ? -1 : Math.round((vat + Number.EPSILON) * 100) / 100
}

// 47) simple calculator
function calculator(a,b,sign){
  if(sign == "+" || "-" || "*" || "/" ){
     if(sign == "+" && typeof(a) == "number" && typeof(b) == "number"){
       return a + b;
     }else if (sign == "-" && typeof(a) == "number" && typeof(b) == "number"){
       return a - b 
     }else if(sign == "*" && typeof(a) == "number" && typeof(b) == "number"){
       return a * b
     }else if(sign == "/" && typeof(a) == "number" && typeof(b) == "number"){
       return a / b
     }else{
       return "unknown value"
     }
  }
};

// 48) Switch it Up!
function switchItUp(number){
  //Write your own Code!
    switch(number){
        case 0:
        return "Zero";
        break;
        case 1:
        return "One";
        break;
        case 2:
        return "Two";
        break;
        case 3:
        return "Three";
        break;
        case 4:
        return "Four";
        break;
        case 5:
        return "Five";
        break;
        case 6:
        return "Six";
        break;
        case 7:
        return "Seven";
        break;
        case 8:
        return "Eight";
        break;
        case 9:
        return "Nine";
        break;
        
    }}


// 49) Reversing Words in a String
function reverse(string){
  //your code here
  return string.split(" ").reverse().join(" ")
}

// 50) Remove duplicates from list
function distinct(a) {
  return a.filter((value,index) => a.indexOf(value) === index);
}

// 51) Even or Odd
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// 52) Shifty Closures
let name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};
let name1 = 'Ben';
var greet_ben = function() {
  return "Hello, " + name1 + '!';
};

// 53) Basic Training: Add item to an Array
// add the value "codewars" to the already defined websites array
websites.push("codewars")
