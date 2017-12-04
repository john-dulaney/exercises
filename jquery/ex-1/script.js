$(document).ready(function() {


    const outputEl = $("#tvShows")

    $.ajax({
        "url": "tvShows.json",  
        "method": "GET"
    }).then(
        function (theShows) {
            let showHTMLRepresentations = ""
            theShows.tvShows.forEach(show => {
                showHTMLRepresentations +=  `
                    <div>
                        <h1>${show.title}</h1>
                        <p> Genre: ${show.genre}</p>
                        <p>Channel: ${show.channel}</p>
                    </div>
                `
            })
            outputEl.html(showHTMLRepresentations)
        }
    )

});