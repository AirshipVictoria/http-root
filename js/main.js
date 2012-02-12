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
        bio:"A native San Franciscan, is a co-founder of Confluent Entertianment, an event production company started in 2006 after the successful launch of the 2005 Fillmore ski jump which he designed and built.  In 2007 he designed a kiteboard ramp off of Crissy Field with a flow of 5,000 gallons of water a minute for Crissy Kite Days in partnership with the St. Francis Yacht Club. He is on the board and works with various Charitable groups and Foundations and has been very involved with the Northern California Norwegian community particularly as vice president of the Norway Day Festival.  With a keen interest in combining science and art to create visually stunning eyecandy the Airship Victoria continues this tradition."
    },
    andrew: {
        name: "Andrew Boyd",
        bio:"Veggies sunt bona vobis, proinde vos postulo esse magis shallot celery eggplant nori epazote burdock cress cauliflower pumpkin soko prairie turnip.<br/><br/>Jícama groundnut aubergine napa cabbage melon peanut amaranth mustard watercress. Cabbage lotus root lentil bamboo shoot aubergine spring onion watercress taro dandelion seakale garlic kale dulse winter purslane burdock welsh onion. Earthnut pea squash corn bamboo shoot ricebean radish."
    },
    mark: {
        name: "Mark Fleschler",
        bio:"Bay area native, a web developer by day who has worked at successful web startups, by night he wears a number of different technology and artistic hats in various projects.  He is currently pushing forward a number of music projects, including <a href='http://www.bleego.com'>Bleego</a>, along with a number of software projects some tied with Airship Victoria, and others completely unrelated."
    },
    matts: {
        name: "Matt Stephensen",
        bio:"Veggies sunt bona vobis, proinde vos postulo esse magis shallot celery eggplant nori epazote burdock cress cauliflower pumpkin soko prairie turnip.<br/><br/>Jícama groundnut aubergine napa cabbage melon peanut amaranth mustard watercress. Cabbage lotus root lentil bamboo shoot aubergine spring onion watercress taro dandelion seakale garlic kale dulse winter purslane burdock welsh onion. Earthnut pea squash corn bamboo shoot ricebean radish."
    },
    becca: {
        name: "Becca Wood",
        bio:"Cupcake ipsum dolor sit amet. Sweet chocolate bar macaroon chocolate cake. Tart biscuit danish lollipop lollipop. Dragée marshmallow dragée jujubes lollipop sugar plum dragée. Fruitcake fruitcake jujubes. Cookie cupcake danish marshmallow oat cake wypas jelly beans. Bear claw chocolate bar jelly wypas gingerbread cheesecake. Toffee cupcake biscuit pastry ice cream chupa chups chocolate bar. Topping applicake jelly beans toffee apple pie soufflé bear claw jelly. Jelly topping jujubes donut. Fruitcake pie jelly-o. Cake sweet roll toffee candy canes powder jelly beans liquorice chocolate cake.<br/><br/>Sweet pie marzipan cupcake sweet toffee ice cream lollipop. Chocolate chocolate lollipop. Toffee fruitcake tiramisu soufflé brownie cotton candy. Icing cookie fruitcake candy apple pie halvah pudding lemon drops. Jelly-o chocolate bar danish. Dragée lollipop brownie danish soufflé pudding caramels."
    },
    matth: {
        name: "Matt Heck",
        bio: ""
    }
};