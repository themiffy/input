var token = "6aa3e113e95eb7fff794dec3f36b26b1fce6c145";
var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";

$(document).ready(function(){

    var table = document.getElementById("suggestions_table");

    table.onclick = function(event) {
        let target = event.target;
        if (target.tagName != 'TR') return;
        $('#inp').val(target.innerHTML);
        $('#inp').keyup();
    };

    function show(result){

        result.suggestions.forEach(element => {
            //console.log(element.value);
            var new_row = table.insertRow();
            new_row.innerHTML = element.value;
            table.style.display = "block"; //show the table
        });

    }

    $('#inp').on('keyup',function(){
        
        table.style.display = "none"; //hiding the table
        $("#suggestions_table tr").remove();// Clearing the table
        
        var query = $('#inp').val();
        var options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({query: query})
        }
    
        fetch(url, options)
        .then(response => response.json())
        .then(result => show(result)) // Result goes into a function
        .catch(error => console.log("error", error));
    })

    $(document).mouseup(function(event){
        if(!$('#focus').is(event.target) && $('#focus').has(event.target).length === 0){
            table.style.display = "none";
        }
    });
    
});