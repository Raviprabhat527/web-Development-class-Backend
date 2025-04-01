/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('WebDevelopmentDatabase');

// Insert a few documents into the courses collection.
db.getCollection('class').insertMany([
    {
      "name": "Java",
      "Price": 25000,
      "Instructor": "Ravi"
    },
    {
      "name": "Python",
      "Price": 20000,
      "Instructor": "Sita"
    },
    {
      "name": "JavaScript",
      "Price": 18000,
      "Instructor": "Mohit"
    },
    {
      "name": "C++",
      "Price": 22000,
      "Instructor": "Amit"
    },
    {
      "name": "Data Science",
      "Price": 30000,
      "Instructor": "Priya"
    },
    {
      "name": "Machine Learning",
      "Price": 35000,
      "Instructor": "Rajesh"
    },
    {
      "name": "Web Development",
      "Price": 27000,
      "Instructor": "Anjali"
    },
    {
      "name": "Android Development",
      "Price": 26000,
      "Instructor": "Karan"
    },
    {
      "name": "SQL",
      "Price": 15000,
      "Instructor": "Neha"
    },
    {
      "name": "Artificial Intelligence",
      "Price": 40000,
      "Instructor": "Vikram"
    }
  ]
  );


// Print a message to the output window.
console.log(`Done Inserting Data`);

