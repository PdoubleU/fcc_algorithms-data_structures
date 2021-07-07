/*
Goal: 
  Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
  Arguments to test the solution:
    pairwise([1, 4, 2, 3, 0, 5], 7) should return 11;
    pairwise([1, 3, 2, 4], 4) should return 1;
    pairwise([1, 1, 1], 2) should return 1;
    pairwise([0, 0, 0, 0, 1, 1], 1) should return 1;
    pairwise([], 100) should return 0;
    
About solution:
  I decided to use recursion in this exercise to practice this approach. 
*/

function pairwise(arr, arg) {
  let sumOfIndicies = 0; //this variable will be return as a result of function
  let depthLevel = 1; //describes the depth level in recursion and is used to represent the index of the 

  function recursivePairwise(array) {
    if(!array.length) return; //guard pattern: stop recursion, prevent infinite loop
    let currElem = array.shift(); //the current element is taken from the given array to compare with the rest of the elements, and the array is shrunk in the same operation
    
    if(currElem !== null) { //make sure that the currElem hasn't been used before
      //loop through all elements in the mutated array and check if the equation is true -> 
      //(looking for the sum equal to the given number as second argument in the main function)
      for (let index = 0; index < array.length; index++) {
        let elem = array[index];
        if (elem + currElem === arg) {
          //we've got pair! so let's update the sum of indicies: 
          sumOfIndicies += depthLevel + (index + depthLevel - 1)
          array.splice(index, 1, null); //value used in this operation has to be blocked for further iterations, so let's put null here
          break;
        }
      }
    }
    depthLevel++;
    recursivePairwise(array);
  }
  recursivePairwise(arr)
  return sumOfIndicies
}

pairwise([0, 0, 0, 0, 1, 1], 1);
