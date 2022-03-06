const removeFromArray = function (array, ...args) {
  return array.filter((arrayItem) => !args.includes(arrayItem));
/*                   ^^ filter out the arrayItem that are included in args. 
We have an array [1, 2, 3, 4]
        ...args a rest parameter like an array [2, 3]
We filter the array from the items in in args array
are the [2, 3] in the args included array[1, 2 , 3, 4]?
if yes, remove them for eg. 1
(arrayItem) => !false <-(arrayItem not includes in args)
(arrayItem) => true, passes condition so will be put into new array

*/

}
console.log(removeFromArray([1, 2, 3, 4],2,3))
// Do not edit below this line
module.exports = removeFromArray;
