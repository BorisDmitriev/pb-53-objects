# JS Object
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


**Complete the code in `solution.js`**

## 1. remove

Write a function named `remove` that removes the given items and returns a new object without the provided properties.

### Expected Result:

```javascript
const object1 = { apples: 10, oranges: 15, peach: 5 };
console.log(remove(object1, 'apples', 'peach')); // { oranges: 15 }
```

## 2. isNotEmpty

Write a function named `isNotEmpty` that makes a shallow check to make sure the object is not empty.

### Expected Result:

```javascript
const object2 = { apples: 10, oranges: 0 };
const object20 = { apples: 0, oranges: 0 };
console.log(isNotEmpty(object2)); // true
console.log(isNotEmpty(object20)); // false
```

## 3. isEqual

Write a function named `isEqual` that makes a shallow check to see if two objects are equal.

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

Write a function named `intersection` that finds a shallow intersection of objects.

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

Write a function named `invoke` that invokes an array method on a specific object path with the given arguments.

### Expected Result:

```javascript
const object5 = { a: { b: ['apple', 'orange', 'peach'] } };
console.log(invoke(object5, 'a.b', 'splice', [1, 2])); // [ 'orange', 'peach' ]
```

## 6. isDeepEmpty

Write a function named `isDeepEmpty` that makes a deep check to see if an object or array is empty at all levels. If the object is empty, the function should return true or else return false.

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

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. remove

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | Should  be defined |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Should receive an object as the first parameter and returns the object without the items supplied  as following parameters |

### 2. isNotEmpty

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Should  be defined |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Should receive an object and returns false if the object is empty |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | Should receive an object and returns true if the object is not empty |

### 3. isEqual

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | Should  be defined |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | Should receive two objects and returns true if both are the same object |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | Should receive two objects and returns false if both objects are not the same. |

### 4. intersection

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | Should  be defined |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | Should compare two objects and returns the common elements |

### 5. invoke

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status10.svg) | Should  be defined |
| ![Status](../../blob/badges/.github/badges/main/status11.svg) | Should receive four arguments, the first is an object, the second is the path to the array inside that object, the third is the array method, and finally, the fourth is the arguments for that array method - the function should apply that method to the targeted array. |

### 6. isDeepEmpty

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status12.svg) | Should  be defined |
| ![Status](../../blob/badges/.github/badges/main/status13.svg) | Should check if a nested object is empty and, if so, returns true  |
| ![Status](../../blob/badges/.github/badges/main/status14.svg) | Should check if a nested object is empty and returns false if it's not |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-Objects-Exercises)


[//]: # (autograding info end)