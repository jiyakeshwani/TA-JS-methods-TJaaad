Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
   numbers.join('-');
3. `flat`
   numbers.flat();
4. `push`
   colors.push('yellow');
5. `indexOf`
   numbers.indexOf('2');
6. `lastIndexOf`
   numbers.lastIndexOf();
7. `includes`
   colors.includes("red");
8. `reverse`
   numbers.reverse();
9. `every`
   numbers.every(functionname);
10. `shift`
    numbers.shift();
11. `splice`
    numbers.splice(0 '0');
12. `find`
    colors.find('blue');
13. `unshift`
    numbers.unshift();
14. `findIndex`
    numbers.findIndex(2);
15. `filter`
    numbers.filter(word => word.length > 2);
16. `flat`
    colors.flat();
17. `forEach`
    numbers.forEach(number => console.log(number));
18. `map`
    numbers.map(number => number \* 2);
19. `pop`
    colors.pop();
20. `reduce`
    let array1 = [1, 2, 3, 4];
    let reducer = (acc, currentValue) => acc + currentValue;
    console.log(array1.reduce(reducer));

21. `slice`
    numbers.slice(1);
22. `some`
    let even = (number) => number % 2 === 0;

numbers.some(even);
