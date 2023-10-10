# JS Object

**Complete the code in `solution.js`**

## 1. remove

Write a function named 'remove' that removes the given items and returns a new object without the provided properties.

### Expected Result:

```javascript
const object1 = { apples: 10, oranges: 15, peach: 5 };
console.log(remove(object1, 'apples', 'peach')); // { oranges: 15 }
```

## 2. isNotEmpty

Write a function named 'isNotEmpty' that makes a shallow check to make sure the object is not empty.

### Expected Result:

```javascript
const object2 = { apples: 10, oranges: 0 };
const object20 = { apples: 0, oranges: 0 };
console.log(isNotEmpty(object2)); // true
console.log(isNotEmpty(object20)); // false
```

## 3. isEqual

Write a function named 'isEqual' that makes a shallow check to see if two objects are equal.

### Expected Result:

True if objects are identical, false if objects are different

```javascript
const object3 = { apples: 10, oranges: 15 };
const object30 = { apples: 10, oranges: 15 };
const object31 = { apples: 10, oranges: 0 };
console.log(isEqual(object3, object30)); // true
console.log(isEqual(object3, object31)); // false
```

## 4. intersection

Write a function named 'intersection' that finds a shallow intersection of objects.

### Expected Result:

```javascript
const object4 = { apples: 3, oranges: 4 };
const object40 = { mangos: 5, oranges: 2 };
console.log(intersection(object4, object40)); // [ 'oranges' ]
```

#### Bonus

Check for both key and value equality

#### Expected Result:

```javascript
const object41 = { apples: 3, oranges: 2 };
const object42 = { mangos: 5, oranges: 2 };
const object43 = { mangos: 5, oranges: 3 };
console.log(intersection(object41, object42)); // { oranges: 2 }
console.log(intersection(object42, object43)); // { mangos: 5 }
```

## 5. invoke

Write a function named 'invoke' that invokes an array method on a specific object path with the given arguments.

### Expected Result:

```javascript
const object5 = { a: { b: ['apple', 'orange', 'peach'] } };
console.log(invoke(object5, 'a.b', 'splice', [1, 2])); // [ 'orange', 'peach' ]
```

## 6. isDeepEmpty

Write a function named 'isDeepEmpty' that makes a deep check to see if an object or array is empty at all levels. If the object is empty, the function should return true or else return false.

**Empty values:** {}, [], '', null, NaN, undefined

### Expected Result:

```javascript
const object6 = { a: { b: undefined } };
const object60 = { a: [{ c: null }, { d: [] }] };
const object61 = { a: [{ c: null }, { d: [0] }] };
console.log(isDeepEmpty(object6)); // true
console.log(isDeepEmpty(object60)); // true
console.log(isDeepEmpty(object61)); // false
```