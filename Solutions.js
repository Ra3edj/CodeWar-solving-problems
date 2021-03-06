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
  return card.length == 2 ? "???" == card[1] ? 'spades' : "???" == card[1] ? 'clubs' :  "???" == card[1] ? 'diamonds' : 'hearts' :
   "???" == card[2] ? 'spades' : "???" == card[2] ? 'clubs' :  "???" == card[2] ? 'diamonds' : 'hearts'
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

// 54) Return to Sanity
function mystery() {
  let results = {sanity: 'Hello'};
  return results;
}

// 55) Max Headroom and JavaScript style
let max = 
  {
   name: 'Max Headroom'
  }
   
function getMax1()
{
  return max;
}

function getMax2()
{
  return max;
}

// 56) Hello Happy Codevarrior!!
function Warrior(n){
  let  name = n;  
    this.name = function(n){
      if( n ) name=n;
      return name;
    }
  }
    
  Warrior.prototype.toString = function(){
      return "Hi! my name's "+this.name();
  }

// 57) Unexpected parsing
function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return  {status: msg}

}

// 58) Switch/Case - Bug Fixing #6
function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b;
    break;
    case'-': result = value.a - value.b;
      break;
    case'/': result = value.a / value.b;
      break;
    case'*': result = value.a * value.b;
      break;
    case'%': result = value.a % value.b;
      break;
    case'^': result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}

// 59) Improving Math.round(x)
Math.roundTo = function (number, precision) {
  // TODO: Program Me
  return number.toFixed(precision) - 0
}

// 60) Power
function numberToPower(number, power){
  // Code here
  let result = 1;
   for(var i = 1; i <= power; i++){
     result *= number;
   }return result
}

// 61) Push a hash/an object into array
items = []
items.push({a: "b", c: "d"})

// 62) Convert a Number to a String!
function numberToString(num) {
  // Return a string of the number here!
  return num + ''
}

// 63) How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
   return classPoints.reduce((acc,value) => acc + value)  / classPoints.length < yourPoints;
}

// 64) Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
  //...
  return bool == true ? 'Yes':'No';
}

// 65) Find Multiples of a Number
function findMultiples(integer, limit) {
  //your code here
  let newarr = [];
  for(let i = integer; i <= limit; i += integer){
      newarr.push(i);
  }return newarr;
}

// 66) Jenny's secret message
function greet(name){
  if(name === "Johnny"){
    return "Hello, my love!";
    }
    return "Hello, " + name + "!";
}

// 67) Grasshopper - Order of operations
function orderOperations () {
  return 2 + 2 * 2 + 2 * 2 + 22
}

// 68) Grasshopper - Array Mean
var findAverage = function (nums) {
  // Code here
  return nums.reduce((acc,value) => acc + value) / nums.length
}

// 69) Sum of positive
function positiveSum(arr) {
  let positivearr =  arr.filter(positivenum => positivenum > 0);
  return positivearr.length == 0 ? 0 : positivearr.reduce((acc,value) => acc + value)
}

// 70) Reversed Strings
function solution(str){
  return str.split('').reverse().join('');
}

 // 71) Remove First and Last Character
 function removeChar(str){
  //You got this!
   return str.slice(1,-1)
   
 };
 
 // 72) String repeat
 function repeatStr (n, s) {
  return s.repeat(n);
}

// 73) Grasshopper - Summation
var summation = function (num) {
  // Code here
  let sum = 0;
  for(let i = 0; i <= num; i++){
    sum += i;
  }return sum;
}

// 74) Square(n) Sum
function squareSum(numbers){
  return numbers.reduce((acc,value) => acc + Math.pow(value , 2) , 0)
}

// 75) Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// 76) Keep Hydrated!
function litres(time) {
  return time >= 2 ? Math.floor(time * 0.5) : 0;
}

// 77) Basic Mathematical Operations
function basicOp(operation, value1, value2)
{
  // Code
  return operation == '+' ? value1 + value2 : operation == '-' ? value1 - value2 : 
  operation == '*' ? value1 * value2 : value1 / value2
}

// 78) Abbreviate a Two Word Name
function abbrevName(name){

  // code away
 let names = name.toUpperCase()
 let splitnames = names.split(' ');
 return `${splitnames[0][0]}.${splitnames[1][0]}`;

}

// 79) A Needle in the Haystack
function findNeedle(haystack) {
  // your code here
  for(let i = 0; i <= haystack.length; i++){
    if(haystack[i] == 'needle'){
        return `found the needle at position ${i}`
    }
  }
}

// 80) Convert number to reversed array of digits
function digitize(n) {
  //code here
  return String(n).split('').reverse().map(num => num - 0)
}

// 81) Beginner - Lost Without a Map
function maps(x){
   return x.map(num => num * 2)
  }

// 82) Returning Strings
function greet(name){
  //your code here
  return `Hello, ${name} how are you doing today?`
}

// 83) Reversed Word
function reverseWords(str){
  return str.split(' ').reverse().join(' '); // reverse those words
}

// 84) Calculate average
function find_average(array) {
    // your code here
    return array.length == 0 ? 0 : array.reduce((acc , value) => acc + value) / array.length;
  }

// 85) You only need one - Beginner
function check(a, x) {
    // your code here
    return a.includes(x);
  }

// 86) Opposites Attract
function lovefunc(flower1, flower2){
    // moment of truth
    return flower1 % 2 == 0 && flower2 % 2 == 1 ? true : flower1 % 2 == 1 && flower2 % 2 == 0 ? true : false; 
  }

// 87) Are You Playing Banjo?
function areYouPlayingBanjo(name) {
    // Implement me
    return name[0] == 'R' || name[0] == 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
  }

 // 88)  Beginner - Reduce but Grow
function grow(x){
    return x.reduce((acc , value) => acc * value)
 }

// 89) Get the mean of an array
function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    return Math.floor(marks.reduce((acc , value) => acc + value) / marks.length);
  }

// 90) MakeUpperCase
function makeUpperCase(str) {
    // Code here
    return str.toUpperCase();
  }

// 91) DNA to RNA Conversion
function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    return dna.replace(/T/g , 'U')
  }

// 92) Count the Monkeys!
function monkeyCount(n) {
    // your code here
      let arr = [];
      for(let i = 1; i <= n; i++){
        arr.push(i);
      }return arr;
    }

// 93) Sentence Smash
function smash (words) {
   return words.join(' ')
};

// 94) Count by X
function countBy(x, n) {
    let z = [];
    for(let i = x; i <= x * n; i += x){
      z.push(i)
    }
    return z;
  }

// 95) You Can't Code Under Pressure #1
function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
  }

// 96) Sum Mixed Array
function sumMix(x){
  //  acc - 0 or value - 0 convert the string to number 
  return x.reduce((acc,value) => (acc - 0) + (value - 0)) - 0
}

// 97) Remove exclamation marks
function removeExclamationMarks(s) {
    return s.replace(/!/g , "");
  }

// 98) Double Char
function doubleChar(str) {
    // Your code here
    return str.split('').map(string => string.repeat(2)).join('')
  }

// 99) Removing Elements
function removeEveryOther(arr){
    //your code here
    let newarr = [];
    for(let i = 0; i < arr.length ; i += 2){
      newarr.push(arr[i])
    } return newarr;
}

// 100) Thinkful - Logic Drills: Traffic light
function updateLight(current) {
    //your code here!
    return current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green'
  
  }

// 101) Beginner Series #4 Cockroach
function cockroachSpeed(s) {
    //Good Luck!
    return Math.floor(s * 27.7778)
  }

// 102) Get Planet Name By ID
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name ='Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }
    
    return name;
  }

// 103) Keep up the hoop
function hoopCount (n) {
    //your code goes here    
   return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it" 
 }

// 104) Squash the bugs
function findLongest(str){
  
    let spl = str.split(" ");
    let longest = 0
    
    for (var i = 0; i < spl.length; i++){
      if (spl[i].length > longest){
        longest = spl[i].length
      
      }}
      return longest
  }


// 105) Parse nice int from char problem
function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :) 
      return +inputString[0]
    }


// 106) Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
    return numbers.filter(num => num % divisor == 0)
  }

// 107) All Star Code Challenge #18
function strCount(str, letter){  
    //code here
    let arr = [];
    for(let i = 0; i <= str.length; i++){
      if(str[i] == letter){
        arr.push(str[i])
      }
    }return arr.length
  }

// 108) To square(root) or not to square(root)
function squareOrSquareRoot(array) {
    return array.map(num => Math.sqrt(num) - Math.floor(Math.sqrt(num)) !== 0 ? num * num : Math.sqrt(num))  
  }

// 109) Difference of Volumes of Cuboids
function findDifference(a, b) {
    //loading...
    return a.reduce((acc,value) => acc * value) > b.reduce((acc,value) => acc * value) ? 
       a.reduce((acc,value) => acc * value) - b.reduce((acc,value) => acc * value) : 
    b.reduce((acc,value) => acc * value) - a.reduce((acc,value) => acc * value)
  }

// 110) Unfinished Loop - Bug Fixing #1
function createArray(number){
  var newArray = [];
  
  for(var i = 1; i <= number; i++){
    newArray.push(i);
  }
  
  return newArray;
}

// 111) Is it a palindrome?
function isPalindrome(x) {
    // your code here
    return x.split('').reverse().join('').toUpperCase() == x.toUpperCase() ? true : false;
  }

// 112) Is it even?
function testEven(n) {
    //Your awesome code here!
  return n % 2 == 0;
}

// 113) Grasshopper - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    // code goes here
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// 114) What is between?
function between(a, b) {
    // your code here
    let arr = [];
    for(let i = a; i <= b; i++){
      arr.push(i)
    }return arr
}

// 115) Grasshopper - Debug sayHello
function sayHello(name) {
  return 'Hello, ' + name
}


// 116) Grasshopper - If/else syntax debug
function checkAlive (health) {
    if (health > 0) {
      return true
    } else{
      return false
    }
  }
