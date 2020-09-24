var token = "6aa3e113e95eb7fff794dec3f36b26b1fce6c145";
var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";

$("#address").suggestions({
    token: token,
    type: "ADDRESS",
    /* Вызывается, когда пользователь выбирает одну из подсказок */
    onSelect: function(suggestion) {
        console.log(suggestion);
    }
});

$(document).ready(function(){

    var table = document.getElementById("suggestions_table");

    function show(result){
        //console.log(result.suggestions[0]);
        result.suggestions.forEach(element => {
            //console.log(element.value);
            var new_row = table.insertRow();
            new_row.innerHTML = element.value;
        });

    }

    $('#inp').on('keyup',function(){
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
        .then(result => show(result))
        .catch(error => console.log("error", error));
    })
    
});