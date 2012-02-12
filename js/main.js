$(".menu ul li").click(function () {
    $(".content").fadeTo(0,0);
    var el = $(this);
    var c = $("#" + el.attr("content"));
    $(".content .box").each(function() {
       $(this).hide();
    });
    c.show();
    $(".content").fadeTo(500,1);
});

$(document).ready(function() {
    $(".content").fadeTo(0, 1);
});

$("#crew img").click(function() {
    var id = $(this).attr("id");
    $(".bio .boxHeader").html(CrewData[id].name);
    $(".bio #biocontent").html(CrewData[id].bio);
    $(".bio").fadeTo(500, 1);
});

$(".menu ul li").mouseover(function () {
    $(this).animate({color:"#a08050"},300);
});

$(".menu ul li").mouseout(function () {
    $(this).animate({color:"#ddd"},100);
});