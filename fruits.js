var fruits = ['Apple', 'Banana', 'Orange'];
var bananaPosition = fruits.indexOf('Banana');
fruits[1] = 'Mango';
console.log(bananaPosition);
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);