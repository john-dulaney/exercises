$(document).ready(() => {
    $.ajax({
            url: "staff.json"
        })
        .then(students => {
            console.log("students", students)
            // const studentsEl = document.getElementById("staff__list")
            let studentsEl = ""
            students.students.forEach(b => {
                studentsEl.html += `
                <div id="">
                    <p>${b.name} ${b.age} ${b.color}</p>
                 </div>
                `
            })
            $("#staff__list").html(studentsEl)
        })
    })
    // studentsDOM()

//exports
// module.exports = studentsDOM