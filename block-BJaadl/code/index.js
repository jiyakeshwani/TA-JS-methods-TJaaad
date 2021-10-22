let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(arr){
  return words.sort((a,b) => a.length - b.length)
}
// - Convert the above array "words" into an array of length of word instead of word.
words.every(words.length);
// - Create a new array that only contains word with atleast one vowel.
let vowelWords = words.filter((words) => {
  if(
  words.includes('a')||
  words.includes('e')||
  words.includes('i')||
  words.includes('o')||
  words.includes('u')
  ){
    return true;
  }else{
    return false;
  }
});
// - Find the index of the word "rhythm"
words.indexOf('rhythm')
// - Create a new array that contians words not starting with vowel.
let notVowelWords = words.filter((words) => {
  if(
  words.includes('a')||
  words.includes('e')||
  words.includes('i')||
  words.includes('o')||
  words.includes('u')
  ){
    return false;
  }else{
    return true;
  }
});
// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(arr){
  let sum = 0
  for(let i= 6; i>=numbers.length; i++){
    return sum + i
  }
}
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipliedBy3 = numbers.filter(numbers => numbers%3 ==0)
// - Create a new array that contains only even numbers
let evenNumbers = numbers.filter(numbers => numbers % 2 == 0)
// - Create  a new array that contains only odd numbers.
let oddNumbers = numbers.filter(numbers => numbers % 2 != 0)
// - Create a new array that should have true for even number and false for odd numbers.
let filterNumbers = numbers.filter((numbers) => {
  if(numbers % 2 == 0){
    return true
  }else {
    return false
  }
});
// - Sort the above number in assending order.
numbers.sort((a,b) => a-b)
// - Does sort mutate the original array?
 // no it does not affect the original array.
// - Find the sum of the numbers in the array.

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
