function isString(argument) {
    return typeof argument === 'string';
  }
  
  // Cas de test pour isString
  console.log(isString('Hello'));
  console.log(isString(123));
  console.log(isString(true));
  console.log(isString({}));
  console.log(isString([]));
  console.log(isString(''));
  
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Cas de test pour reverseString
  console.log(reverseString('Hello'));
  console.log(reverseString('JavaScript'));
  console.log(reverseString('12345'));
  console.log(reverseString('!@#$%'));
  
  function getLastElement(arr) {
    return arr[arr.length - 1];
  }
  
  // Cas de test pour getLastElement
  console.log(getLastElement([1, 2, 3, 4, 5])); 
  console.log(getLastElement(['a', 'b', 'c', 'd'])); 
  console.log(getLastElement([true, false, true])); 
  console.log(getLastElement([]));
  
  function isUpperCase(str) {
    return str === str.toUpperCase();
  }
  
  // Cas de test pour isUpperCase
  console.log(isUpperCase('HELLO')); 
  console.log(isUpperCase('Hello'));
  console.log(isUpperCase('12345')); 
  console.log(isUpperCase('!@#$%')); 
  console.log(isUpperCase('')); 
  console.log(isUpperCase('WORLD!')); 
  
  function estUndefined(value) {
    return typeof value === 'undefined';
  }
  
  // Cas de test pour estUndefined
  console.log(estUndefined(undefined)); 
  console.log(estUndefined(null)); 
  console.log(estUndefined(0)); 
  console.log(estUndefined('')); 
  console.log(estUndefined(NaN)); 
  console.log(estUndefined({})); 
  console.log(estUndefined([])); 
  
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Cas de test pour isEven
  console.log(isEven(4)); 
  console.log(isEven(7)); 
  console.log(isEven(0)); 
  console.log(isEven(-2)); 
  console.log(isEven(-3));
  console.log(isEven(10)); 
  