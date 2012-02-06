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