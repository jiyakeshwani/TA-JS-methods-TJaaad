let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = persons.name;
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.grade;
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.sex;
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
peopleName.filter(people.name.startsWith('J')|| people.Name.startsWith('P'));
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
peopleName.filter(people.name.startsWith('A')|| people.Name.startsWith('C'));
// Log all the filtered male ('M') in persons array
persons.sex.filter(persons.sex == male)
// Log all the filtered female ('F') in persons array
persons.sex.filter(persons.sex == female)
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
Persons.sex.filter(persons.sex == female.startsWith('C') || persons.sex == female.startsWith('C') );
// Log all the even numbers from peopleGrade array
persons.grade.filter(grade => grade % 2 == 0);
// Find the first name that starts with 'J' in persons array and log the object
persons.name.find(persons.name.startsWith('J'));
console.log(persons.name);
// Find the first name that starts with 'P' in persons array and log the object
persons.name.find(persons.name.startsWith('P'));
console.log(persons.name);
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let filter = persons.name.filter(persons.name.startsWith('J') , persons.grade< 10 , persons.sex == female )


console.log(filter);
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(persons.sex == female)
// Filter all the male from persons array and store in malePersons array
let femalePersons = persons.filter(persons.sex == male)
// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.grade.reduce(
  function(acc , cv ,index){
    acc = acc + cv
   return acc;
}, 0)

// Find the average grade

// Find the average grade of male

// Find the average grade of female

// Find the highest grade
persons.grade.find(persons.grade.lenght-1)
// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
persons.grade.sort((a,b) => a-b)
// Sort the peopleGrade in descending order
persons.grade.sort((a,b) => b-a)
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`
persons.name.sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
