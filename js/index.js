// From the Array of Names below, write a script to check if there is a user called - Steve
// If Steve is present, update the stevePresent Variable
// Create an IF statement that checks to see if stevePresent is set to true or false
// If True, console log -> "Yes, Steve is present"
// If False, console log -> "No, Steve is not present"

let users = ["Jim", "Mike", "Dave", "Josh", "Tim", "Jane", "Susan", "Haley", "Matthew", "John", "Spencer", "Stephan", "Mable", "Steve", "Jacob", "Ruby", "Adam", "Bruce"];
let stevePresent = true; 

if(!stevePresent){
    console.log("No, steve is not present");
} else {
    console.log("Yes, steve is present");
}







// The Array below contains a series of computer power watts, each value is one computer.
// Using a FOR loop, calculate the total power of all the computers
// Write and IF Statement that checks to see if there is enough power. 
// If True, console log -> "There is enough power!"
// If False, console log -> "There is Not enough power!"

let computers = [600, 1000, 400, 300, 600, 200, 100, 400, 500];
let requiredPower = 3500; 
let totalPower = 0;



console.log(totalPower);

for(let i = 0; i < computers.length; i++){
    totalPower += computers[i];
    console.log(totalPower)
}

if(totalPower >= requiredPower){
    console.log("There is enough power!")
} else{
    console.log("There isn't enough power!")
}


// Console Log all Odd number between 1 & 100 using the modulo operator... 

for(let i = 0; i < 100; i++){ //for loop, begin at 0 and smaller than 100 count up
    if(i % 2 !== 0){ //if variable /2 without remainder (remainder = 0) then even
     console.log(i)
    }
 }

 

// Calculate the Average for te following student marks
// Output the average to the console with the string -> "The Average is"

let marks = [23, 45, 67, 55, 80, 90, 45, 60, 56, 30, 31];
let totalMarks = 0;

for(let i = 0; i < marks.length; i++){ //sum of all the marks
    totalMarks += marks[i]; 

}
console.log(totalMarks);

let average = totalMarks/marks.length; //totalmarks divided by amount of marks

console.log(average);


 // Use the following data 
let ageOne = 23;
let userOne = "Josh";

let ageTwo = 16;
let userTwo = "Jacob";

// Write a Script that checks to see if userOne name is Josh AND that this user is Older than 18
// If True, console log -> "User and Age Match"
// If False, console log -> "User and Age Do Not Match"

if(userOne === "Josh" && ageOne > 18){
    console.log("User and age match");
   }   else{
    console.log("User and Age do not match");

 }






// Write a Script that checks to see if userTwo name is Peter OR that this user is Younger than 18
// If True, console log -> "User is Younger than 18 or is Peter"
// If False, console log -> "User is Younger than 18 and is Not Peter"


if(userTwo === "Peter" || ageTwo < 18){
    console.log("User is Younger than 18 or is Peter");
}   else{
    console.log("User is younger than 18 and is not Peter")

}
