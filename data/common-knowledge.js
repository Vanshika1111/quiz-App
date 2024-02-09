const quizData = {
  title: "Quize app Application"
};

const questions = [
  {
    text: "What does the acronym DOM stand for?",
    type: "mc",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Data Object Model", correct: false },
      { text: "Document Oriented Model", correct: false },
      { text: "Digital Object Model", correct: false }
    ]
  },
  {
    text: "Which keyword is used to declare a variable in JavaScript?",
    type: "mc",
    answers: [
      { text: "var", correct: true },
      { text: "let", correct: false },
      { text: "const", correct: false },
      { text: "variable", correct: false }
    ]
  },
  {
    text: "What does the term 'Hoisting' refer to in JavaScript?",
    type: "mc",
    answers: [
      { text: "The process of moving all variable and function declarations to the top of their containing scope.", correct: true },
      { text: "The process of converting data types implicitly.", correct: false },
      { text: "The process of defining variables inside a function.", correct: false },
      { text: "The process of optimizing code for better performance.", correct: false }
    ]
  },
  {
    text: "Which built-in method is used to split a string into an array of substrings?",
    type: "mc",
    answers: [
      { text: "split()", correct: true },
      { text: "slice()", correct: false },
      { text: "splice()", correct: false },
      { text: "substring()", correct: false }
    ]
  },
  {
    text: "What is the purpose of the 'typeof' operator in JavaScript?",
    type: "mc",
    answers: [
      { text: "To determine the type of a variable or expression.", correct: true },
      { text: "To define the type of a function.", correct: false },
      { text: "To assign a type to a variable.", correct: false },
      { text: "To check if a variable is defined.", correct: false }
    ]
  },
  {
    text: "What does the '===' operator do in JavaScript?",
    type: "mc",
    answers: [
      { text: "Checks for strict equality, including type.", correct: true },
      { text: "Assigns a value to a variable.", correct: false },
      { text: "Checks for equality, converting types if needed.", correct: false },
      { text: "Performs a bitwise comparison.", correct: false }
    ]
  },
  {
    text: "Which one of the following is NOT a valid JavaScript data type?",
    type: "mc",
    answers: [
      { text: "float", correct: true },
      { text: "number", correct: false },
      { text: "string", correct: false },
      { text: "boolean", correct: false }
    ]
  },
  {
    text: "What does the 'null' value represent in JavaScript?",
    type: "mc",
    answers: [
      { text: "An intentional absence of any object value.", correct: true },
      { text: "A value that is yet to be defined.", correct: false },
      { text: "A value representing an empty string.", correct: false },
      { text: "An error condition.", correct: false }
    ]
  },
  {
    text: "What is the output of typeof null in JavaScript?",
    type: "mc",
    answers: [
      { text: "'object'", correct: true },
      { text: "'null'", correct: false },
      { text: "'undefined'", correct: false },
      { text: "'boolean'", correct: false }
    ]
  },
  {
    text: "What is the purpose of the 'this' keyword in JavaScript?",
    type: "mc",
    answers: [
      { text: "Refers to the current object.", correct: true },
      { text: "Defines a new variable within a function.", correct: false },
      { text: "Determines the data type of a variable.", correct: false },
      { text: "Specifies the access level of a variable.", correct: false }
    ]
  },
  {
    text: "What is a closure in JavaScript?",
    type: "mc",
    answers: [
      { text: "A combination of a function and the lexical environment within which that function was declared.", correct: true },
      { text: "A built-in method to close browser windows.", correct: false },
      { text: "A way to terminate a loop prematurely.", correct: false },
      { text: "A method to close the browser tab.", correct: false }
    ]
  },
  {
    text: "What is the purpose of 'use strict' in JavaScript?",
    type: "mc",
    answers: [
      { text: "To enforce stricter parsing and error handling in JavaScript.", correct: true },
      { text: "To allow the use of experimental JavaScript features.", correct: false },
      { text: "To enable the use of deprecated JavaScript syntax.", correct: false },
      { text: "To disable the use of 'eval()' function.", correct: false }
    ]
  },
  {
    text: "What is the result of 3 + '3' in JavaScript?",
    type: "mc",
    answers: [
      { text: "'33'", correct: true },
      { text: "6", correct: false },
      { text: "'6'", correct: false },
      { text: "TypeError", correct: false }
    ]
  },
  {
    text: "What is the purpose of the 'map()' function in JavaScript?",
    type: "mc",
    answers: [
      { text: "To create a new array with the results of calling a provided function on every element in the array.", correct: true },
      { text: "To concatenate two arrays.", correct: false },
      { text: "To remove elements from an array.", correct: false },
      { text: "To sort the elements of an array.", correct: false }
    ]
  },
  {
    text: "What does the 'bind()' method do in JavaScript?",
    type: "mc",
    answers: [
      { text: "Creates a new function that, when called, has its 'this' keyword set to a specified value.", correct: true },
      { text: "Binds two functions together into one.", correct: false },
      { text: "Creates a new array from a given array.", correct: false },
      { text: "Executes a function immediately after it is defined.", correct: false }
    ]
  },
  {
    text: "What is the purpose of the 'forEach()' method in JavaScript?",
    type: "mc",
    answers: [
      { text: "Executes a provided function once for each array element.", correct: true },
      { text: "Finds the first element in an array that satisfies a provided testing function.", correct: false },
      { text: "Determines whether all the elements in an array satisfy a provided testing function.", correct: false },
      { text: "Sorts the elements of an array.", correct: false }
    ]
  },
  {
    text: "What does the 'NaN' property represent in JavaScript?",
    type: "mc",
    answers: [
      { text: "Not-a-Number, indicating an unrepresentable value in operations involving numbers.", correct: true },
      { text: "An infinite value.", correct: false },
      { text: "An undefined value.", correct: false },
      { text: "A null value.", correct: false }
    ]
  },
  {
    text: "What does the 'isNaN()' function do in JavaScript?",
    type: "mc",
    answers: [
      { text: "Determines whether a value is NaN or not.", correct: true },
      { text: "Determines whether a value is an integer or not.", correct: false },
      { text: "Determines whether a value is undefined or not.", correct: false },
      { text: "Determines whether a value is null or not.", correct: false }
    ]
  },
  {
    text: "What is the purpose of the 'JSON.stringify()' method in JavaScript?",
    type: "mc",
    answers: [
      { text: "Converts a JavaScript object or value to a JSON string.", correct: true },
      { text: "Parses a JSON string, constructing the JavaScript value or object described by the string.", correct: false },
      { text: "Validates a JSON string.", correct: false },
      { text: "Removes properties from a JavaScript object.", correct: false }
    ]
  },
  {
    text: "What is the purpose of the 'Object.keys()' method in JavaScript?",
    type: "mc",
    answers: [
      { text: "Returns an array of a given object's own enumerable property names.", correct: true },
      { text: "Returns an array of a given object's prototype property names.", correct: false },
      { text: "Returns an array of a given object's own and prototype property names.", correct: false },
      { text: "Returns an array of a given object's own non-enumerable property names.", correct: false }
    ]
  }

];

module.exports = { quizData, questions };
