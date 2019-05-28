//
// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation and JS data structures.
// Activity
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Your trip planner must work in either direction, i.e. planTrip('N', 'Times Square', '6', '33rd') (starting at Times Square) should work as well as the reverse trip planTrip('6', '33rd', 'N', 'Times Square') (starting at 33rd).
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Depending on what kind of data structures you use to represent the lines and stations, you might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


// place stops into an array
// wrap into object with trainline
// when more trainlines, place into another object called MTA

 let numOfStops = 0;

 const mta = {

    lines: {
      N: [
         'Times Square',
         '34th',
         '28th',
         '23rd',
         'Union Square',
         '8th',
       ],
      L: [
        '8th',
        '6th',
        'Union Square',
        '3rd',
        '1st',
      ],
      6: [
        'Grand Central',
        '33rd',
        '28th',
        '23rd',
        'Union Square',
        'Astor Place',
      ]
    },

    startIndex: function(line, start){
      return this.lines[line].indexOf(start); // finds index number of station in lines N L 6
    },
    stopIndex: function(line2, end){
      return this.lines[line2].indexOf(end);
    },
    stopsMade: function(line, start, end){

    const stations = this.lines[line]; // Just to simplify things

    //let numOfStops = 0; // Allows you to keep track of number of stops
    // If index numbers are getting larger
    if (this.startIndex(line, start) < this.stopIndex(line, end)) {
      for (let i = this.startIndex(line, start)+1; i <= this.stopIndex(line, end); i++) {
        console.log(stations[i]);
        numOfStops += 1;
      } // end of loop CAN USE SLICE instead of FOR LOOP and .reverse()

    } else {
    // if index numbers are getting smaller
      for (let i = this.startIndex(line, start)-1; i >= this.stopIndex(line, end); i--) {
        console.log(stations[i]);
        numOfStops += 1;
      }
    }

  }, //end of stopsMade
  planTrip: function(line, start, line2, end){
      numOfStops = 0;
     if (line === line2) {
       this.stopsMade(line, start, end);
     } else {
       this.stopsMade(line, start, 'Union Square');
       console.log('Change at Union Square');
       this.stopsMade(line2, 'Union Square', end);
     }
     console.log(numOfStops, `stops in total`)
   },



 }; //end mta object

mta.planTrip('6','28th','6','28th');
mta.planTrip('6','28th','N','28th');
mta.planTrip('N','28th','6','28th');



// Clojure "hosted" in java
//LISP and scheme  = "functional programming"
// vs OOP(classes)
// treats everything in a list
// .indexOf (. means use in JAVA)
//


//
// to change stations at Union
// i <= this.stopIndex('Union Square')
// console.log('Change at Union Square')
// let i = this.startIndex('Union Square')+1
// // How to specify line and stations
// . . .




// add stops from first function to second function
//singleTrip (line, start, end)





// list number of stops using index
