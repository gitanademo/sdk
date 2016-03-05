$(document).ready(function() {

    $("#owl-example").owlCarousel({
        jsonPath: '/carousel.json?mimetype=application/json&force=true',
        jsonSuccess: customDataSuccess,
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

    function customDataSuccess(data){
        var content = "";
        for(var i in data["items"]){
            var img = data["items"][i].img;
            var alt = data["items"][i].summary;

            content += "<img class=\"img-responsive\" src=\"" +img+ "\" alt=\"" +alt+ "\">"
        }
        $("#owl-example").html(content);
    }

});
