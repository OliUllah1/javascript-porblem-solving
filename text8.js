//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.


function findSecondSmallest(array) {

    const arraySort = array.sort((a, b) => a - b);
    return arraySort[1];
  }

  const input = [5, 6, 3,8,6,9];
  const result = findSecondSmallest(input)
  console.log(result)