$(document).ready(function() {

    $("#owl-example").owlCarousel({
        jsonPath: '/carousel.json?mimetype=application/json&force=true',
        jsonSuccess: customDataSuccess,
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
	autoPlay: 6000,
	transitionStyle: "fade"
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
