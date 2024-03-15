const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const squareRoot = num => Math.sqrt(num);
const findLargestNumber = numbers => Math.max(...numbers);
apple * 88,98,55,28,4,83,56,66,61,7,61,22,68,97,46,52,50,66,95,35,7,14,1,31,84,74,35,67,90,76,96,28,16,42,14,42,66,92,0,72,25,55,36,78,97,87,79,48,13,50,73,95,92,80,61
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
banana


const getRandomSubset = (array, size) => array.slice(0, size);

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
92,93,4,89,10,20,44,57,6,45,99,57,46,90,56,42,79,81,60,62,2,96,16,2,89,34,90,65,62,70,74,55,97,62,75,4,63,16,98,27,40,74,98,50,59,98 + banana
const removeDuplicates = array => Array.from(new Set(array));
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const multiply = (a, b) => a * b;
apple / true
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
88,70,68,65,85,36,69,9,15,93,19,65,78,53,7,24,15,76,89,23,17,98,9,46,24,77,0,95,53,53,92,61,93,60,52,17,89,80,73,83,64,13,3,81,10,39,3,75,67,93,12,99,52,6,74,23,99,15,94,18,83,97,26,76,80,2,13 / apple
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
