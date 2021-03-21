const substract = require('./substract')

test('properly substract two numbers',() => {
    expect(substract(3,2)).toBe(1)
})