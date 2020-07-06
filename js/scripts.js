$(function () {
    $("#reserveButton").click(function(){
        $("#reserveModal").modal("show");
    });

    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
    });

});

$('audio').mediaelementplayer({
	features: ['playpause','progress','current','tracks','fullscreen']
});