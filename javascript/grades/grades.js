console.log("cells within cells interlinked, interlinked")
//Define some objects stored in variables
const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
//figure out how to store in this guy
const grades = {
    a : "",
    b : "",
    c : "",
    d : "",
    f : ""
}



// for loop to iterate over grades
for (let i = 0; i < scores.length; i++) {
    //store in variable
    let currentGrade = scores[i]
        if (currentGrade > 90) {
            console.log(currentGrade)
        }
}



// console.log(grades)  
    
    // Loop over an array of student grades (values from 50-100) and keep track of how many students get each grade in an object named grades.
    
    // A score of 50-60 is an F
    // A score of 61-70 is a D
    // A score of 71-80 is a C
    // A score of 81-90 is a B
    // A score of 91-100 is an A
    // Start with array of random scores in your JavaScript
    // Use console.log() to output the following criteria to the browser console.
    
    // How many of each grade? Accomplish this with a for..in loop.
    // What is the lowest score? Sort the array and find out.
    // What is the highest score?
    // Which grade had the most students achieve it? Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.
    // Which grade had the fewest students achieve it?



                        // // switch (grades) {
                        // //     case grades.a:
                        // //         currentGrade > 90
                        // //         grades.a = 
                        // //         console.log(currentGrade)
                        //     // break;
                        
                        //     // case b:
                        //     //     81 < currentGrade < 90
                        //     //     console.log(grades.b)
                        //     // break;
                        
                        //     // case c:
                        //     //     70 < currentGrade < 80
                        //     //     console.log(grades.c)
                        //     // break;
                        
                        //     // case d:
                        //     //     60 < currentGrade < 70
                        //     //     console.log(grades.d)
                        //     // break;
                        
                        //     // case f:
                        //     //     50 < currentGrade < 60
                        //     //     console.log(grades.f)
                        //     // break;
                        
                        //     default: 
                        //         console.log("You're a huge failure and dissapoint to your family")
                        //         break;
                        //         }