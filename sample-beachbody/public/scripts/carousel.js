$(document).ready(function() {

    $("#owl-example").owlCarousel({
        jsonPath: '/carousel.json?mimetype=application/json&force=true',
        jsonSuccess: customDataSuccess,
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
	autoPlay: 5000,
	transitionStyle: "fade"
    });

    function customDataSuccess(data){
        var content = "";
        for(var i in data["items"]){
            var img = data["items"][i].img;
            var alt = data["items"][i].summary;
            var promo = data["items"][i].promo;
            var market = data["items"][i].market;

            if (market) {
              content += "<div>";
              content += "<img class=\"img-responsive\" src=\"" +img+ "\">";
              content += "<h1>" +promo+ "</h1>";
              content += "<h3>" +alt+ "</h3>";
              content += "</div>";
            }
        }
        $("#owl-example").html(content);
    }

});
