// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf('101');
// - Find the last index of `9` in numbers
numbers.lastIndexOf('9');
// - Convert value of strings array into a sentance like "This is a collection of words"
strings.concat();
// - Add two new words in the strings array "called" and "sentance"
strings.push('called');
strings.push('sentence');
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.concat();
// - Remove the first word in the array (strings)
delete strings[0];
// - Find all the words that contain 'is' use string method 'includes'
strings.includes("is")
// - Find all the words that contain 'is' use string method 'indexOf'

// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every(numbers % 3 == 0);

// -  Sort Array from smallest to largest
numbers.sort((a , b) => a-b);
// - Remove the last word in strings
delete strings.lastIndexOf()
// - Find largest number in numbers

// - Find longest string in strings

// - Find all the even numbers
let even = [];
numbers.filter(
  function isEven(num){
    return num % 2 == 0
  }
)

// - Find all the odd numbers
numbers.filter(
  function isOdd(num){
    return num % 2 != 0
  }
)
// - Place a new word at the start of the array use (unshift)
numbers.unshift('0');
// - Make a subset of numbers array [18,9,7,11]

// - Make a subset of strings array ['a','collection']

// - Replace 12 & 18 with 1221 and 1881
numbers.replace(12 , 18);
numbers.replace(1221 , 1881);
// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
customers.find('j');
// - Create new array with only first name
let firstName = ['Joe' , 'John' , 'Dave' , 'Jack'];
// - Create new array with all the full names (ex: "Joe Blogs")
let fullName = ['Joe Blogs' , 'John Smith' , 'Dave Jones' , 'Jack White'];
// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
