let person = {
    "firstName": "John",
    "lastName": "Dulaney",
    "age": 28,
    "fullName": function (first, last){
        return first + " " + last
    }
    
}

console.log(person.fullName)




   // Add click event listener to the save button
   const saveButtonEl = document.getElementById("articleForm__saveButton").
   addEventListener("click", event => {

      // Create a new article object
       const newArticle = articleFactory(
           document.querySelector("input[name='articleForm__photo']").value,
           document.querySelector("input[name='articleForm__title']").value,
           document.querySelector("textarea[name='articleForm__body']").value,
           document.querySelector("input[name='articleForm__date']").value
       );




      // Add new article to array
       articleDatabase.articles.push(newArticle);

      // Sort the articles by their `id` property, descending
       articleDatabase.articles.sort((p, n) => n.id - p.id);

      // Serialize and store database
       localStorage.setItem("articleDatabase", JSON.stringify(articleDatabase));
   });

