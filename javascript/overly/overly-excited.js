
//Overly Excited

var sentence = ['The', 'walrus', 'danced', 'through', 'the', 'trees', 'in', 'the', 'light', 'of', 'the', 'moon'];
 function addExcitement (theWordArray) {
     let sentence = ""
    for (let i = 0; i < theWordArray.length; i++){
    let currentWordArray = theWordArray[i]
    sentence += currentWordArray + " " 

    if (i % 3 == 2) {
        sentence += "!"}
        
        console.log(sentence)
    }
 }
 addExcitement(sentence);
