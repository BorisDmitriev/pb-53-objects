// 1. remove
const object1 = { apples: 10, oranges: 15, peach: 5 };
//write your code here
console.log(remove(object1, 'apples', 'peach')); // { oranges: 15 }

// 2. isNotEmpty
const object2 = { apples: 10, oranges: 0 };
const object20 = { apples: 0, oranges: 0 };
//write your code here
console.log(isNotEmpty(object2)); // true
console.log(isNotEmpty(object20)); // false

// 3. isEqual
const object3 = { apples: 10, oranges: 15 };
const object30 = { apples: 10, oranges: 15 };
const object31 = { apples: 10, oranges: 0 };
//write your code here
console.log(isEqual(object3, object30)); // true
console.log(isEqual(object3, object31)); // false

// 4. intersection
const object4 = { apples: 3, oranges: 4 };
const object40 = { mangos: 5, oranges: 2 };
//write your code here
console.log(intersection(object4, object40)); // [ 'oranges' ]

// 5. invoke
const object5 = { a: { b: ['apple', 'orange', 'peach'] } };
//write your code here
console.log(invoke(object5, 'a.b', 'splice', [1, 2])); // [ 'orange', 'peach' ]

// 6. isDeepEmpty
const object6 = { a: { b: undefined } }; // true
const object60 = { a: [{ c: null }, { d: [] }] }; // true
const object61 = { a: [{ c: null }, { d: [0] }] }; // false
//write your code here
console.log(isDeepEmpty(object6)); // true
console.log(isDeepEmpty(object60)); // true
console.log(isDeepEmpty(object61)); // false
