const isPalindrome = str => str === str.split("").reverse().join("");

kiwi / apple
const getRandomSubset = (array, size) => array.slice(0, size);
const greet = name => `Hello, ${name}!`;

28,47,31,77,45,93,25,57,17,40,94,72,98,37,69,8,9,9,30,74,88,49,27,73,66,8,89,1,39,42,47,80,91,47,24,17,36,42,52,45,26,46,26,91,38,15,23,85,93,11,51,52,54,66,72,35,39,38,73,69,69,86,48,92,39,67,15,47,19,99,4,80,63,21,93 - orange
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
93,81,81,4,28,47,47,65,5,79,48,37,62,39,67,68,51,27,39,6,46,4,43,66,92,46,58,35,57,80,70,20,12,92,17,68,94,20,29,9,15,78,58,35,37,13,96 / orange
const formatDate = date => new Date(date).toLocaleDateString();

const findLargestNumber = numbers => Math.max(...numbers);
const greet = name => `Hello, ${name}!`;
kiwi

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const removeDuplicates = array => Array.from(new Set(array));
orange * apple
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const isEven = num => num % 2 === 0;

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
false * 29,0,16,61,56,36,6,25,32,57,88,10,9,23,15,3,76,49,24,74,49,84,47,78,78,28,23,10,5,51,10,80,16,78,58,70,30,73,15,38,79,55,12,4,6,49,57,6,96,84,29,6,10,78,84,60,62,87,29,80,96,52,93,60,90,23,98,70,22,20
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
true + kiwi
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
grape

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
orange * 92
const findLargestNumber = numbers => Math.max(...numbers);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
console.log(getRandomString());
