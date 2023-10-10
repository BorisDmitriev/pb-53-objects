# JS Object

**Vervollständige den Code in `solution.js`**

## 1. remove

Schreibe eine Funktion namens `remove`, die die angegebenen Elemente entfernt und ein neues Objekt ohne die angegebenen Eigenschaften zurückgibt.

### Erwartetes Ergebnis:

```javascript
const object1 = { apples: 10, oranges: 15, peach: 5 };
console.log(remove(object1, 'apples', 'peach')); // { oranges: 15 }
```

## 2. isNotEmpty

Schreibe eine Funktion namens `isNotEmpty`, die eine oberflächliche bzw. flache (shallow) Prüfung durchführt, um sicherzustellen, dass das Objekt nicht leer ist.

### Erwartetes Ergebnis:

```javascript
const object2 = { apples: 10, oranges: 0 };
const object20 = { apples: 0, oranges: 0 };
console.log(isNotEmpty(object2)); // true
console.log(isNotEmpty(object20)); // false
```

## 3. isEqual

Schreibe eine Funktion mit dem Namen `isEqual`, die eine oberflächliche Prüfung vornimmt, um festzustellen, ob zwei Objekte gleich sind.

### Erwartetes Ergebnis:

Wahr, wenn die Objekte identisch sind, falsch, wenn die Objekte unterschiedlich sind.

```javascript
const object3 = { apples: 10, oranges: 15 };
const object30 = { apples: 10, oranges: 15 };
const object31 = { apples: 10, oranges: 0 };
console.log(isEqual(object3, object30)); // true
console.log(isEqual(object3, object31)); // false
```

## 4. intersection

Schreibe eine Funktion namens `intersection`, die eine flache Schnittmenge von Objekten findet.

### Erwartetes Ergebnis:

```javascript
const object4 = { apples: 3, oranges: 4 };
const object40 = { mangos: 5, oranges: 2 };
console.log(intersection(object4, object40)); // [ 'oranges' ]
```

#### Bonus

Prüfe auf Gleichheit von Schlüssel und Wert.

#### Erwartetes Ergebnis:

```javascript
const object41 = { apples: 3, oranges: 2 };
const object42 = { mangos: 5, oranges: 2 };
const object43 = { mangos: 5, oranges: 3 };
console.log(intersection(object41, object42)); // { oranges: 2 }
console.log(intersection(object42, object43)); // { mangos: 5 }
```

## 5. invoke

Schreibe eine Funktion namens `invoke`, die eine Array-Methode auf einem bestimmten Objektpfad mit den angegebenen Argumenten aufruft.

### Erwartetes Ergebnis:

```javascript
const object5 = { a: { b: ['apple', 'orange', 'peach'] } };
console.log(invoke(object5, 'a.b', 'splice', [1, 2])); // [ 'orange', 'peach' ]
```

## 6. isDeepEmpty

Schreiben Sie eine Funktion mit dem Namen `isDeepEmpty`, die tiefgehend prüft, ob ein Objekt oder ein Array auf allen Ebenen leer ist. Wenn es leer ist, sollte die Funktion true oder false zurückgeben.

**Leere Werte:** {}, [], '', null, NaN, undefined

### Erwartetes Ergebnis:

```javascript
const object6 = { a: { b: undefined } };
const object60 = { a: [{ c: null }, { d: [] }] };
const object61 = { a: [{ c: null }, { d: [0] }] };
console.log(isDeepEmpty(object6)); // true
console.log(isDeepEmpty(object60)); // true
console.log(isDeepEmpty(object61)); // false
```
