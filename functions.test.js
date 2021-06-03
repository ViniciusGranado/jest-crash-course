const functions = require("./functions");

// Equal to
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// Not equal to
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// Null
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// Falsy
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
})

// Equal to object
test('Should be Vinicius Granado object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Vinicius',
    lastName: 'Granado',
    test: undefined,
  });
});