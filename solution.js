// 1. remove
const object1 = { apples: 10, oranges: 15, peach: 5 };
//write your code here
const remove = (obj, str1, str2) => {
    let result = {};
    Object.keys(obj).forEach((key) => {
        if (key !== str1 && key !== str2) {
            result[key] = obj[key];
        }
    });
    return result;
}
console.log(remove(object1, 'apples', 'peach')); // { oranges: 15 }


// 2. isNotEmpty
const object2 = { apples: 10, oranges: 0 };
const object20 = { apples: 0, oranges: 0 };
//write your code here

const isNotEmpty = obj => Object.values(obj).some(val => val != false && val !== undefined);

//Alternative
// const isNotEmpty = obj => {
//     let result = true;
//     let checkFalsy = [];
//     Object.values(obj).forEach(val => {
//         if (val == false || val === undefined) checkFalsy.push(false);
//     });
//     if (checkFalsy.length === Object.keys(obj).length) result = false;
//     return result;
// };
console.log(isNotEmpty(object2)); // true
console.log(isNotEmpty(object20)); // false


// 3. isEqual
const object3 = { apples: 10, oranges: 15 };
const object30 = { apples: 10, oranges: 15 };
const object31 = { apples: 10, oranges: 0 };
//write your code here
const isEqual = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);
console.log(isEqual(object3, object30)); // true
console.log(isEqual(object3, object31)); // false





// 4. intersection
const object4 = { apples: 3, oranges: 4 };
const object40 = { mangos: 5, oranges: 2 };
const intersection = (obj, obj2) => {
    let intersection = [];
    Object.keys(obj).forEach((key) => {
        Object.keys(obj2).forEach((key2) => {
            if (key === key2) {
                intersection.push(key);
            }
        });
    });
    return intersection;
}
console.log(intersection(object4, object40)); // [ 'oranges' ]



//4 => bonus 
console.log('---------------------------------------------------Aufgabe 4 => bonus');
const object41 = { apples: 3, oranges: 2 };
const object42 = { mangos: 5, oranges: 2 };
const object43 = { mangos: 5, oranges: 3 };
const intersection2 = (obj, obj2) => {
    let intersection = {};
    Object.entries(obj).forEach(([key, value]) => {
        Object.entries(obj2).forEach(([key2, value2]) => {
            if (key === key2 && value === value2) {
                intersection[key] = value;
            }
        });
    });
    return intersection;
}
console.log(intersection2(object41, object42)); // { oranges: 2 }
console.log(intersection2(object42, object43)); // { mangos: 5 }
console.log('---------------------------------------------------ENDE Aufgabe 4 => bonus');



// 5. invoke
const object5 = { a: { b: ['apple', 'orange', 'peach'] } };
//write your code here
const invoke = (obj, path, func, indizes) => {
    let properties = path.split('.');
    return obj[properties[0]][properties[1]][func](indizes[0], indizes[1]);
}
console.log(invoke(object5, 'a.b', 'splice', [1, 2])); // [ 'orange', 'peach' ]




// 6. isDeepEmpty
const object6 = { a: { b: undefined } }; // true
const object60 = { a: [{ c: null }, { d: [] }] }; // true
const object61 = { a: [{ c: null }, { d: [0] }] }; // false
//write your code here
const isDeepEmpty = obj => {
    if (Array.isArray(obj)) {
        return obj.every(isDeepEmpty);
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).every(key => isDeepEmpty(obj[key]));
    } else {
        if (obj === {} || obj === [] || obj === '' || obj === null || obj === NaN || obj === undefined) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(isDeepEmpty(object6)); // true
console.log(isDeepEmpty(object60)); // true
console.log(isDeepEmpty(object61)); // false
