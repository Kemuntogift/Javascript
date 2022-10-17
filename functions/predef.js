//Eval method
// evaluates code represented as a string
let a = 10;
let d = 20;
let text = "a* d";
let result = eval(text);
console.log(result);

// isFinite
// returns boolean
let number = isFinite(123);

//isNaN
// returns boolean
isNaN(123);
isNaN("2005/12/12");
//result 1 is false, 2 is true

// parseFloat
//Parses a string and returns a floating point number or first number
parseFloat(10);
parseFloat("10");
parseFloat("10.33");
parseFloat("34 45 66");
parseFloat("Michael has 40 dogs");
// returns, 10, 10, 10.33, 34, NaN

//parseInt
//parses a string argument and returns an integer of the specified radix
parseInt("010");
parseInt("10", 8);
parseInt("0x10");
//returns 10, 8, 16


//encodeURI
// Replaces instances of a character


// decodeURI
// decodes encodedtext from the encodeURI method