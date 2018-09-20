# Purify

* Working in pairs
* Fork and clone repo
* Run `npm install` to install `jest`
* Create a `test` folder where your tests will live
* Implement tests for each function. Provide at least 2 test cases for each function
* Rewrite functions to become pure functions. Use tests to verify the inputs to each function remain unchanged by the execution of each function
* Replace instance of `var` with `const`or `let` as appropriate
* Replace for loops etc with relevant array methods
* Submit pull request with completed code

When testing that inputs have not changed, it's best to produce similar objects for `input` and `expectedInput`. This is because, if we run the following code

```js
test('Ensure purity', function() {
  const input = {a: 10};
  const expectedOutput = {a: 20};

  const output = myFunction(input);

  expect(output).toEqual(expectedOutput);
  expect(input).toEqual(input); // will always pass
});
```

even if `input` get mutated, the second assertion will always pass because we are comparing `input` to itself. Instead, provide an `expectedInput` variable that has same value as `input`.

```js
test('Ensure purity', function() {
  const input = {a: 10};
  const expectedInput = {a: 10};

  const expectedOutput = {a: 20};

  const output = myFunction(input);

  expect(output).toEqual(expectedOutput);
  expect(input).toEqual(expectedInput); // will check that input was not mutated
});
```
