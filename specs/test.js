
const {add, subtract, multiply, divide} = require("../lib/expressions")


test( "addition : given 1 and 2 returns 3", () => { 
    expect(add(1,2)).toBe(3)
} ) 

test( "subtraction : given 1 and 2 returns 1", () => { 
    expect(subtract(2,1)).toBe(1)
} ) 

test( "multiplication : given 1 and 2 returns 2", () => { 
    expect(multiply(2,1)).toBe(2)
} ) 

test( "divides : given 2 and 1 returns 2", () => { 
    expect(divide(2,1)).toBe(2)
} ) 