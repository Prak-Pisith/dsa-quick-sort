/* 
  Quick Sort Algorithm
  TODO:
    - Randomly find the pivol element 
    - Compare each element with pivot, if element is smaller than pivot move element to left else move element to right
    - Recursively compare and move element
    - merge them together with pivot element [...left, pivot, ...right]
*/

function quickSort(numbers: number[]): number[] {

  // Base case
  if (numbers.length <= 1) return numbers;

  // Randomly find pivot
  const pivot = numbers[Math.floor(Math.random() * numbers.length)];
  const leftArray: number[] = [];
  const rightArray: number[] = [];

  for (let num of numbers) {
    // numbers smaller than pivot to the left
    if (num < pivot) {
      leftArray.push(num);
    // numbers greater than pivot to the right
    } else if (num > pivot) {
      rightArray.push(num);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}


const numbers: number[] = [5,7,1,3,8,9,2,6];
console.log(`Before sort: ${numbers}`);
const sorted: number[] = quickSort(numbers);
console.log(`After sort: ${sorted}`);


