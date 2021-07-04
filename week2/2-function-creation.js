
/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  if (Number.isInteger(num)) {
    return 'true';
}
else 
return 'false';}
console.log(validate(12));
/* 
Write a function that removes an element from an array
The function must:
- NOT change the original array
- return a new array with the item removed
- remove the item at the specified index
*/

function remove(arr, index) {
 // let index ;
  rm = arr.splice(index,1);
  return arr;
  
}
console.log(remove([ 10 ,  293 ,  292 ,  176 ,  29 ] ,  3));
/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(arr) {
  Per = Math.ceil(arr);
  return  '"' + Per + '%' +  '"' ;
}
console.log(formatPercentage([ 23 ,  18 ,  187.2 ,  0.372 ]));
