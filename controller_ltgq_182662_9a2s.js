false / 2
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
apple

const deepClone = obj => JSON.parse(JSON.stringify(obj));
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

kiwi

const randomNumber = getRandomNumber();
const sum = (a, b) => a + b;
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

const getRandomIndex = array => Math.floor(Math.random() * array.length);
grape

const sum = (a, b) => a + b;

orange - false
const multiply = (a, b) => a * b;

grape

class MyClass { constructor() { this.property = getRandomString(); } }

kiwi + banana
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
false - 26
function addNumbers(a, b) { return a + b; }
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

banana - grape
const removeDuplicates = array => Array.from(new Set(array));
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const getRandomIndex = array => Math.floor(Math.random() * array.length);
const isEven = num => num % 2 === 0;
orange + 74
const fetchData = async url => { const response = await fetch(url); return response.json(); }
banana / 26,92,7,83,59,37,51,24,78,8,30,21,30,89
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const reverseString = str => str.split("").reverse().join("");
46,45,46,87,1,47,8,83,51,19,75,72,39,41,55,36,32,98,0,99,9,45,79,13,4,26,6,51,42,45,5,56,7,4,72,93,76,34,67,40,62,45,51,58,90,64,21,13,96,53,3,89,17,27,76,72,77,19,32,6,6,10,17,50,65,84,8,26,34,78,6,29,59,60,29,95,21,94,24,47,24,14 / true
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
