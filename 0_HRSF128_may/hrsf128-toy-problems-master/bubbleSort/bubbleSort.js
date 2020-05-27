/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? => (O(N^2)If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.
//if the first element is greater than the
//  * second element, it swaps the two. It then compares the second to the third,
//  * and the third to the fourth, and so on; in this way, the largest values
//  * "bubble" to the end of the array.

var bubbleSort = function(array) {
  // Your code here.
  // iterate over array
    // check whether first element is greater than the second element, it change the location.
      // once you are done with inner for loop, iterate over outer array and keep comparing the size

  let temp;
  // let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j+1]) {
        temp = array[i];
        array[i] = array[j+1];
        array[j+1] = temp;
        //console.log(array)
      }
    }
    console.log(array)
  }
  return array;
};
//time complexity of bubble sort algorithm without swapped flag? => O(N^2)
//time complexity of bubble sort algorithm with swapped flag? => O(N^2)

//console.log(bubbleSort([2, 1, 3])); // yields [1, 2, 3]
//bubbleSort([5, 3, 1, 4, 6])
console.log(bubbleSort([5, 3, 1, 4, 6])); // yields [1, 2, 3]

// 1st Iteration: [5,3,1,4,6] -> [3,5,1,4,6] -> [3,1,5,4,6] -> [3,1,4,5,6] -> [3,1,4,5,6]
// 2nd Iteration: [3,1,4,5,6] -> [1,3,4,5,6] -> [1,3,4,5,6] -> [1,3,4,5,6] -> [1,3,4,5,6]
// 3rd Iteration: [1,3,4,5,6] -> [1,3,4,5,6] -> [1,3,4,5,6] -> [1,3,4,5,6] -> [1,3,4,5,6]

//Optimization

// var bubbleSort = function(array) {
//   // Your code here.
//   // iterate over array
//     // check whether first element is greater than the second element, it change the location.
//       // once you are done with inner for loop, iterate over outer array and keep comparing the size

//   let temp;
//   // let result = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] > array[j+1]) {
//         temp = array[i];
//         array[i] = array[j+1];
//         array[j+1] = temp;
//         //console.log(array)
//       }
//     }
//     console.log(array)
//   }
//   return array;
// };