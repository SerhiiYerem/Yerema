const squareRoot = num => Math.sqrt(num);

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const formatDate = date => new Date(date).toLocaleDateString();
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
