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

window.CrewData = {
    kristian: {
        name: "Kristian Akseth",
        bio:"Cupcake ipsum dolor sit amet. Sweet chocolate bar macaroon chocolate cake. Tart biscuit danish lollipop lollipop. Dragée marshmallow dragée jujubes lollipop sugar plum dragée. Fruitcake fruitcake jujubes. Cookie cupcake danish marshmallow oat cake wypas jelly beans. Bear claw chocolate bar jelly wypas gingerbread cheesecake. Toffee cupcake biscuit pastry ice cream chupa chups chocolate bar. Topping applicake jelly beans toffee apple pie soufflé bear claw jelly. Jelly topping jujubes donut. Fruitcake pie jelly-o. Cake sweet roll toffee candy canes powder jelly beans liquorice chocolate cake.<br/><br/>Sweet pie marzipan cupcake sweet toffee ice cream lollipop. Chocolate chocolate lollipop. Toffee fruitcake tiramisu soufflé brownie cotton candy. Icing cookie fruitcake candy apple pie halvah pudding lemon drops. Jelly-o chocolate bar danish. Dragée lollipop brownie danish soufflé pudding caramels."
    },
    andrew: {
        name: "Andrew Boyd",
        bio:"Veggies sunt bona vobis, proinde vos postulo esse magis shallot celery eggplant nori epazote burdock cress cauliflower pumpkin soko prairie turnip.<br/><br/>Jícama groundnut aubergine napa cabbage melon peanut amaranth mustard watercress. Cabbage lotus root lentil bamboo shoot aubergine spring onion watercress taro dandelion seakale garlic kale dulse winter purslane burdock welsh onion. Earthnut pea squash corn bamboo shoot ricebean radish."
    },
    mark: {
        name: "Mark Fleschler",
        bio:"Bacon ipsum dolor sit amet chuck salami chicken pastrami biltong. Frankfurter drumstick ham, turducken brisket pastrami cow beef. Ground round drumstick ham hock meatloaf, filet mignon shank ball tip tail bresaola meatball short loin bacon. Leberkase shoulder fatback ground round, venison spare ribs rump sirloin meatloaf flank capicola bresaola chicken filet mignon. Turducken t-bone venison, bacon pork chop cow ham hock brisket pastrami jowl pig short loin. Bacon spare ribs shoulder flank, boudin tongue hamburger capicola pig turkey rump.<br/><br/>Spare ribs jowl bresaola, short ribs rump strip steak salami ribeye tri-tip drumstick turkey ham hock jerky. Tongue chuck filet mignon turkey, pork capicola jerky pastrami frankfurter biltong beef drumstick ham. Fatback tail flank drumstick ribeye cow. Hamburger ball tip venison pastrami, shank sirloin jerky swine filet mignon kielbasa boudin capicola cow drumstick leberkase."
    },
    matts: {
        name: "Matt Stephensen",
        bio:"Veggies sunt bona vobis, proinde vos postulo esse magis shallot celery eggplant nori epazote burdock cress cauliflower pumpkin soko prairie turnip.<br/><br/>Jícama groundnut aubergine napa cabbage melon peanut amaranth mustard watercress. Cabbage lotus root lentil bamboo shoot aubergine spring onion watercress taro dandelion seakale garlic kale dulse winter purslane burdock welsh onion. Earthnut pea squash corn bamboo shoot ricebean radish."
    },
    becca: {
        name: "Becca Wood",
        bio:"Cupcake ipsum dolor sit amet. Sweet chocolate bar macaroon chocolate cake. Tart biscuit danish lollipop lollipop. Dragée marshmallow dragée jujubes lollipop sugar plum dragée. Fruitcake fruitcake jujubes. Cookie cupcake danish marshmallow oat cake wypas jelly beans. Bear claw chocolate bar jelly wypas gingerbread cheesecake. Toffee cupcake biscuit pastry ice cream chupa chups chocolate bar. Topping applicake jelly beans toffee apple pie soufflé bear claw jelly. Jelly topping jujubes donut. Fruitcake pie jelly-o. Cake sweet roll toffee candy canes powder jelly beans liquorice chocolate cake.<br/><br/>Sweet pie marzipan cupcake sweet toffee ice cream lollipop. Chocolate chocolate lollipop. Toffee fruitcake tiramisu soufflé brownie cotton candy. Icing cookie fruitcake candy apple pie halvah pudding lemon drops. Jelly-o chocolate bar danish. Dragée lollipop brownie danish soufflé pudding caramels."
    }
};