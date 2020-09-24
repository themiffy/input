
/* $(document).on('keyup', '#input', function (){//make it parametric
    var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    var token = "6aa3e113e95eb7fff794dec3f36b26b1fce6c145";
    var query = "спб ботаничес";

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

    //fetch(url, options)
    //.then(response => response.text())
    //.then(result => console.log(result))
    //.catch(error => console.log("error", error));
}); */

var token = "6aa3e113e95eb7fff794dec3f36b26b1fce6c145";

$("#address").suggestions({
    token: token,
    type: "ADDRESS",
    /* Вызывается, когда пользователь выбирает одну из подсказок */
    onSelect: function(suggestion) {
        console.log(suggestion);
    }
});