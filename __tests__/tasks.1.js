const rewire = require('rewire');

describe('1. remove', () => {
  it('Should  be defined', () => {
    const solution = rewire('../solution');
    const remove = solution.__get__('remove');
    expect(remove).toBeDefined();
  });

  it('Should receive an object as the first parameter and returns the object without the items supplied  as following parameters', () => {
    const solution = rewire('../solution');
    const remove = solution.__get__('remove');
    expect(
      remove({ key: 'value', hello: 'world', num: 99 }, 'hello', 'num')
    ).toEqual({ key: 'value' });
  });
});

describe('2. isNotEmpty', () => {
  it('Should  be defined', () => {
    const solution = rewire('../solution');
    const isNotEmpty = solution.__get__('isNotEmpty');
    expect(isNotEmpty).toBeDefined();
  });

  it('Should receive an object and returns false if the object is empty', () => {
    const solution = rewire('../solution');
    const isNotEmpty = solution.__get__('isNotEmpty');
    expect(isNotEmpty({ hello: undefined })).toBeFalsy();
    expect(isNotEmpty({ key: undefined, hello: undefined })).toEqual(false);
  });

  it('Should receive an object and returns true if the object is not empty', () => {
    const solution = rewire('../solution');
    const isNotEmpty = solution.__get__('isNotEmpty');
    expect(isNotEmpty({ key: 'value', hello: 'world' })).toEqual(true);
    expect(isNotEmpty({ key: undefined, hello: 'world' })).toEqual(true);
    expect(isNotEmpty({ key: 'value', hello: undefined })).toEqual(true);
  });
});

describe('3. isEqual', () => {
  it('Should  be defined', () => {
    const solution = rewire('../solution');
    const isEqual = solution.__get__('isEqual');
    expect(isEqual).toBeDefined();
  });

  it('Should receive two objects and returns true if both are the same object', () => {
    const solution = rewire('../solution');
    const isEqual = solution.__get__('isEqual');
    expect(isEqual({ key: 'value' }, { key: 'value' })).toBeTruthy();
  });

  it('Should receive two objects and returns false if both objects are not the same.', () => {
    const solution = rewire('../solution');
    const isEqual = solution.__get__('isEqual');
    expect(isEqual({ key: 'value' }, { anotherKey: 'value' })).toEqual(false);
  });
});

describe('4. intersection', () => {
  it('Should  be defined', () => {
    const solution = rewire('../solution');
    const intersection = solution.__get__('intersection');
    expect(intersection).toBeDefined();
  });

  it('Should compare two objects and returns the common elements', () => {
    const solution = rewire('../solution');
    const intersection = solution.__get__('intersection');
    expect(
      intersection(
        { key: 'value', hello: 'world', num: 90 },
        { anotherKey: 'value', hello: 'another world', num: 99 }
      )
    ).toEqual(['hello', 'num']);
  });
});

describe('5. invoke', () => {
  it('Should  be defined', () => {
    const solution = rewire('../solution');
    const invoke = solution.__get__('invoke');
    expect(invoke).toBeDefined();
  });

  it('Should receive four arguments, the first is an object, the second is the path to the array inside that object, the third is the array method, and finally, the fourth is the arguments for that array method - the function should apply that method to the targeted array.', () => {
    const solution = rewire('../solution');
    const invoke = solution.__get__('invoke');
    expect(
      invoke({ key: { hello: [6, 7, 8] } }, 'key.hello', 'splice', [1, 2])
    ).toEqual([7, 8]);
  });
});

describe('6. isDeepEmpty', () => {
  it('Should  be defined', () => {
    const solution = rewire('../solution');
    const isDeepEmpty = solution.__get__('isDeepEmpty');
    expect(isDeepEmpty).toBeDefined();
  });

  it('Should check if a nested object is empty and, if so, returns true ', () => {
    const solution = rewire('../solution');
    const isDeepEmpty = solution.__get__('isDeepEmpty');
    expect(isDeepEmpty({ key: { hello: undefined } })).toBeTruthy();
    expect(isDeepEmpty({ a: [{ c: null }, { d: [] }] })).toBeTruthy();
    expect(isDeepEmpty([{ a: [{ c: null }, { d: [] }] }, {}])).toBeTruthy();
  });

  it(`Should check if a nested object is empty and returns false if it's not`, () => {
    const solution = rewire('../solution');
    const isDeepEmpty = solution.__get__('isDeepEmpty');
    expect(isDeepEmpty({ key: 'value', hello: 'world' })).toEqual(false);
    expect(isDeepEmpty({ key: 'value', hello: undefined })).toEqual(false);
    expect(isDeepEmpty({ key: { hello: undefined, num: 99 } })).toEqual(false);
    expect(isDeepEmpty({ a: [{ c: null }, { d: [0] }] })).toEqual(false);
    expect(isDeepEmpty([{ a: [{ c: null }, { d: [false] }] }, {}])).toEqual(
      false
    );
  });
});
