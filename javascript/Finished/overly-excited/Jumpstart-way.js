


// //State the sentence inside variable words
//     let words = "The walrus danced through the trees in the light of the moon"

// //Splits the sentence inside the var words into an array sorted word by word
//     sentenceWalrus = words.split(" ")

// //Function calling theWordArray
// function overlyExcited (theWordArray){

// //stating sentence as a variable with empty quotes allowing it will be used later in the for loop
//   let sentence = ""

// //for loop. i equals 0, if theWordArray's length is greater than 0 the function will run; every loop, +1 will be added to the ran array object
//   for (let i = 0; i < theWordArray.length; i++){ 
// //stating variable 'currentWordArray' is equal to theWordArray calling the i loop to iterate over it      
//     let currentWordArray = theWordArray[i]
// //sentence is stated then called inside of itself to develop into a string of "" + currentWordArray
//     sentence = sentence + " " + currentWordArray
// //console logging sentence    
//     console.log(sentence)
//    }
//  }
//  overlyExcited(sentenceWalrus)

var words = "I am a happy-go-lucky tall guy that is really only 5 feet tall at this point."
sentenceBio = words.split(" ")

function overlyExcited (theWordArray) //overlyExcited?
{
var sentence = ""
for (var i = 0; i < theWordArray.length; i = i + 1)

{ 
var currentWordArray = theWordArray[i]
sentence = sentence + " " + currentWordArray
console.log(sentence)
}
}

overlyExcited(sentenceBio)

