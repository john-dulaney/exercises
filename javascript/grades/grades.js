console.log("cells within cells interlinked, interlinked")
//Define some objects stored in variables
const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
console.log(scores)
//figure out how to store in this guy
const grades = {
    a : 0,
    b : 0,
    c : 0,
    d : 0,
    f : 0
}

// for loop to iterate over grades
for (let i = 0; i < scores.length; i++) {
    //store in variable
    let currentGrade = scores[i]
        if (currentGrade > 90) {
            grades.a++
        } 
        else if (currentGrade > 80){
            grades.b++
        }
        else if (currentGrade > 70){
            grades.c++
        }
        else if (currentGrade > 60){
            grades.d++
        }
        else {
            grades.f++
        }
    }   
    console.log("A's = " + grades.a + " B's = " + grades.b + " C's = " + grades.c + " D's = " + grades.d + " F's =  " + grades.f)


var classIdiot = Math.min.apply(null, scores);
console.log("Stupid kid: " + classIdiot);

var classNerd = Math.max.apply(null, scores);
console.log("Smart kid: " + classNerd);


// Which grade had the most students achieve it? Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.

// Which grade had the fewest students achieve it?



// switch (grades) {
//     case a:
//         currentGrade > 90
//         grades.a++ 
//     break;

//     case b:
//        currentGrade > 80
//         grades.b++ 
//     break;

//     case c:
//         currentGrade > 70
//         grades.c++ 
//     break;

//     case d:
//         currentGrade > 60
//         grades.d++ 
//     break;

//     case f:
//         currentGrade > 1
//         grades.f++ 
//     break;

//     default: 
//         console.log("You're a huge failure and dissapoint to your family")
//         break;
//     }

