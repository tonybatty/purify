const functions = require('./src/index');

test('multiplication', function(){
   const numbers = [1,2,3,4,5]
   const reference = [1,2,3,4,5]
   const multiplier = 5;
   const expectedOutput = [5, 10, 15, 20, 25];

   const output = functions.multiply(numbers, multiplier);

   expect(output).toEqual(expectedOutput);
   expect(numbers).toEqual(reference);
})

test("absolute", function(){
    const numbers = [-1,3,-4,6,-7];
    const reference = [-1,3,-4,6,-7];
    const expectedOutput = [1,3,4,6,7]

    const output = functions.absolute(numbers)

    expect(output).toEqual(expectedOutput)
    expect(numbers).toEqual(reference)
})

test("concatNames", function(){
    const names = [{first: "Alan", last: "Sugar"}, {first: "Tony", last: "Batty"}, {first: "Jamal", last: "Westfield"}]
    const reference = [{first: "Alan", last: "Sugar"}, {first: "Tony", last: "Batty"}, {first: "Jamal", last: "Westfield"}]
    const expectedOutput = ["Alan Sugar", "Tony Batty", "Jamal Westfield"]

    const output = functions.concatNames(names)

    expect(output).toEqual(expectedOutput)
    expect(names).toEqual(reference);
})

test("numbersToStrings",function(){
    const things = ["jamal", 1, "tony", 2]
    const reference = ["jamal", 1, "tony", 2]
    const expectedOutput = ["jamal", "1", "tony", "2"]

    const output = functions.numbersToStrings(things);

    expect(output).toEqual(expectedOutput);
    expect(things).toEqual(reference)
})

test("sortByLength", function(){
    const strings = ["orange", "red", "green", "blue"]
    const expectedOutput = ["red", "blue", "green", "orange"]
    const reference = ["red", "blue", "green", "orange"]

    const output = functions.sortByLength(strings);

    expect(output).toEqual(expectedOutput);
    expect(strings).toEqual(reference)
} )

test("lastTwo", function(){
    const numbers = [1,2,3,4]
    const expectedOutput = [3,4]

    const output = functions.lastTwo(numbers);

    expect(output).toEqual(expectedOutput)
    expect(numbers).toEqual(numbers)
})

test("incrementYear", function(){
    const cars = 
    [{make: "Vauxhall",
    model: "Astra",
    year: 1992},
    {make: "Ford",
    model: "Fiesta",
    year: 2007}]

    const expectedOutput = 
    [{make: "Vauxhall",
    model: "Astra",
    year: 1993},
    {make: "Ford",
    model: "Fiesta",
    year: 2008}]

    const reference = 
    [{make: "Vauxhall",
    model: "Astra",
    year: 1992},
    {make: "Ford",
    model: "Fiesta",
    year: 2007}]

    const output = functions.incrementYear(cars)

    expect(output).toEqual(expectedOutput)
    expect(cars).toEqual(reference)

})

test.only("totalSales",function(){
    const sales = {
        Mary: [57, 12, 31, 4],
        Dave: [43, 2, 12]
    }

    const reference = {
        Mary: [57, 12, 31, 4],
        Dave: [43, 2, 12]
    }

    const expectedOutput = {
        Mary: 104,
        Dave: 67
    }

    const output = functions.totalSales(sales)

    expect(output).toEqual(expectedOutput)
    expect(sales).toEqual(reference)
})