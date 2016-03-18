
$(document).ready(function(){
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $(".navbar-fixed-top").css("background-color", "white");
            $(".test").css("color", "lightgreen");

            $( "#customnavbrand" ).hover(function () {
                    $(this).css({"color":"red"});
                },
                function () {
                    $(this).css({"color":"lightgreen"});
                });

        } else {
            $(".navbar-fixed-top").css("background-color", "transparent","style-color", "green" );
            $(".test").css("color", "white");
            $( "#customnavbrand" ).hover(function () {
                    $(this).css({"color":"white"});
                },
                function () {
                    $(this).css({"color":"white"});
                });
        }
    });
});