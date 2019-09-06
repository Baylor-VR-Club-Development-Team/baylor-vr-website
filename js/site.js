// Home page
var list = ["VR", "a Team", "the future"];
var index = 1;

// Slider Object
const homeSiema = new Siema({
    selector: '.photoSlider',
    duration: 800,
    easing: 'ease-in-out',
    perPage: 1,
    startIndex: 0,
    draggable: false,
    multipleDrag: false,
    threshold: 20,
    loop: true,
    rtl: true,
    onChange: () => {
        changeWeAre();
    }
});

// Home Image Slider
setInterval(function () {
    homeSiema.next();
}, 5000);

//Set the first one before the Interval
$('#rotate').html(list[0]);
// Function called to change the WeAre tag
function changeWeAre() {
    if (index >= list.length) {
        index = 0;
    }
    $('#rotate').html(list[index]);
    index++;
}
// End Home Scroller


// Get URL Parameters for Contact for Response
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var tech = getUrlParameter('sent');
if (tech) {
    $(".alert-bottom").show();
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 100);
}

//ScrollSpy
$('body').scrollspy({
    target: '#navScroll',
    offset: 100
});
// End ScrollSpy

// Dev Team Card Carousel
const devSiema = new Siema({
    selector: '.devSlider',
    duration: 400,
    easing: 'ease-in-out',
    perPage: {
        200: 2,
        800: 3,
        1240: 4
    },
    loop: true,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20
});

setInterval(function () {
    devSiema.next();
}, 5000);

// End Dev Team Card carousel

// Twitch Online|Offline Thing
var online = 'We are currently <span class="badge-online">Online</span>';
var offline = 'We are currently <span class="badge-offline">Offline</span>';

$(document).ready(function () {
    var clientID = "9q24z9k6jxx98x57i3avgecilospmu";
    var url = "https://api.twitch.tv/kraken/streams/baylorvrclub?client_id=9q24z9k6jxx98x57i3avgecilospmu";
    $.getJSON(url, function (data) {
        console.log(data);
        if (data.stream == null) {
            $("#TwitchStatus").html(offline);
        } else {
            $("#TwitchStatus").html(online);
        }
    });
});

// End Twitch Section


// Form Validator for Contact
//$.validator.setDefaults({
//    submitHandler: function () {
//        alert("submitted!");
//    }
//});


$(document).ready(function () {
    $("#form").validate({
        debug: false,
        rules: {
            email: {
                required: true,
                email: true
            },
            name: {
                required: true,
                rangelength: [1, 30]
            },
            message: {
                required: true,
                rangelength: [1, 500]
            }
        },
        messages: {
            email: {
                required: "Please specify your email",
                minlength: "Email must longer than 3 characters",
            },
            name: {
                required: "Please specify your name",
                rangelength: "Name must be between 1 to 30 characters long"
            },
            message: {
                required: "Please enter a message",
                rangelength: "Message must be between 1 and 500 characters long"
            }
        },
        errorElement: "div",
        errorPlacement: function (error, element) {
            error.addClass("invalid-feedback");
            error.css("font-size", ".95em");
            error.insertAfter(element);

        },
        highlight: function (element, errorClass, validClass) {

            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },
        submitHandler: function (form) {
            // do other things for a valid form
            form.submit();
        }
    });
    //    console.log("Validator active");
});
// End Form Validator for Contact

// Smooth Scroll
$('a[href*="#"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 75
                }, 1000);
            }
        }
    });
// End Smooth Scroll

// Collapse navbar on click
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

/* Top Partners data and render */
const topPartnersData = [
    {
        website: "https://www.oculus.com/",
        title: "Oculus Start",
        image: "oculus.webp",
        imageAlt: "Oculus Logo"
    },
    {
        website: "http://foundry10.org/",
        title: "Gaming PC Donation",
        image: "foundry10.webp",
        imageAlt: "Foundry 10 Logo"
    },
    {
        website: "http://corporate.exxonmobil.com/",
        title: "Recruitment of VR Developers",
        image: "ExxonMobil.webp",
        imageAlt: "Exxon Mobil Logo"
    },
    {
        website: "https://artivive.com/",
        title: "AR Development Partner",
        image: "artivive.webp",
        imageAlt: "Artivive"
    },
    {
        website: "https://www.thegamergloves.com/",
        title: "eSports Team Sponsor",
        image: "GamerGloves.webp",
        imageAlt: "Gamer Gloves Logo"
    },
    {
        website: "https://styly.cc/?lang=en",
        title: "Recruitment of VR Developers",
        image: "styly.webp",
        imageAlt: "Styly Logo"
    },
    {
        website: "https://liv.tv/",
        title: "Dedicated Streaming Support and Access to Hardware",
        image: "LIV.webp",
        imageAlt: "LIV Logo"
    },
    {
        website: "https://vivereport.com/",
        title: "Press and Outreach",
        image: "vivereport.webp",
        imageAlt: "Vive Report Logo"
    },
    {
        website: "http://austinvirtualleague.com/",
        title: "Press and Outreach",
        image: "austinvirtualleague.webp",
        imageAlt: "AVL Logo"
    }
];

const developerEventPartnersData = [
    {
        website: "tps://superhotgame.com/",
        image: "superhot.webp",
        title: "Superhot"
    },
    {
        website: "https://survios.com/",
        image: "survios.webp",
        title: "Survivos"
    },
    {
        website: "http://rustltd.com/",
        image: "rustltd.webp",
        title: "Rust Ltd."
    },
    {
        website: "https://store.steampowered.com/app/538330/AEscape_VR/",
        image: "aescapevr.webp",
        title: "Aescape VR"
    }
];

const developerPartnersData = [
    {
       website:"http://www.dreadhalls.com/",
       image:"dreadhalls.webp",
       title:"Dreadhalls"
    },
    {
       website:"http://www.ndreams.com/",
       image:"ndreams.webp",
       title:"nDreams"
    },
    {
       website:"http://nopact.com/",
       image:"nopact.webp",
       title:"nopact"
    },
    {
       website:"https://www.marineverse.com/",
       image:"marineverse.webp",
       title:"Marine Verse"
    },
    {
       website:"https://owlchemylabs.com/",
       image:"OwlchemyLabs.webp",
       title:"Owlchemy Labs"
    },
    {
       website:"https://www.schellgames.com/",
       image:"SchellGames.webp",
       title:"Schell Games"
    },
    {
       website:"http://ultimerse.com/",
       image:"ultimerse.webp",
       title:"Ultimerse"
    },
    {
       website:"http://vertigo-games.com/",
       image:"vertigogames.webp",
       title:"Vertigo Games"
    },
    {
       website:"https://www.earthfall.com/",
       image:"holospark.webp",
       title:"Holospark"
    },
    {
       website:"http://www.tothetopvr.com/",
       image:"tothetop.webp",
       title:"To The Top"
    },
    {
       website:"http://www.mixedrealms.com/",
       image:"mixedrealms.webp",
       title:"Mixed Realms"
    },
    {
       website:"http://aestheticinteractive.com",
       image:"aestheticinteractive.webp",
       title:"Aesthetic Interactive"
    },
    {
        website:"http://acceleroto.com/",
        image:"acceleroto.webp",
        title:"Acceleroto"
    },
    {
       website:"http://gametroopers.net/",
       image:"gametroopers.webp",
       title:"Game Troopers"
    },
    {
       website:"https://ladrik.itch.io/undead-development",
       image:"UndeadDevelopment.webp",
       title:"Undead Development"
    },
    {
       website:"https://www.vrnerds.de/",
       image:"vrnerds.webp",
       title:"VR Nerds"
    },
    {
       website:"https://www.ovrshot.com/",
       image:"windowlickergames.webp",
       title:"Window Licker Games"
    },
    {
       website:"http://www.whitelotusinteractive.com/",
       image:"whiteLotusInteractive.webp",
       title:"White Lotus Interactive"
    },
    {
       website:"http://www.overflowgames.se/",
       image:"overflow.webp",
       title:"Overflow"
    },
    {
       website:"http://alvios.com/",
       image:"alvios.webp",
       title:"Alvrios Games"
    },
    {
       website:"https://store.steampowered.com/app/494150/The_Thrill_of_the_Fight__VR_Boxing/",
       image:"thrillofthefight.webp",
       title:"Thrill to the Fight!"
    },
    {
       website:"https://uvrtech.com/home",
       image:"uvr.webp",
       title:"UVR"
    },
    {
       website:"https://store.steampowered.com/app/525640/agecheck",
       image:"bulletsandmorevr.webp",
       title:"Bullets and More"
    },
    {
       website:"http://www.firehosegames.com/",
       image:"firehose.webp",
       title:"Fire Hose"
    },
    {
       website:"http://somatic.dk/",
       image:"somatic.webp",
       title:"Somantic"
    },
    {
       website:"http://www.alientrap.com/",
       image:"alientrap.webp",
       title:"Alien Trap"
    },
    {
       website:"https://radiantcrusade.com/",
       image:"radiance.webp",
       title:"Radiance"
    },
    {
       website:"http://www.croteam.com/",
       image:"croteam.webp",
       title:"Croteam"
    },
    {
       website:"http://www.i-illusions.com/home/",
       image:"i-illusions.webp",
       title:"I Illusions"
    },
    {
       website:"http://holos.io/",
       image:"holos.webp",
       title:"Holos"
    },
    {
       website:"https://www.masterpiecevr.com/",
       image:"masterpiecevr.webp",
       title:"Masterpiece VR"
    },
    {
       website:"http://starloopstudios.com/",
       image:"starloop.webp",
       title:"Starloop"
    },
    {
       website:"https://www.wearvr.com/developers/comrex-ag/apps",
       image:"comrexAG.webp",
       title:"Bitslap"
    },
    {
       website:"https://store.steampowered.com/app/618500/Hailstorm_VR/",
       image:"slimeq.webp",
       title:"Hailstorm"
    },
    {
       website:"https://store.steampowered.com/app/522250/Quick_Draw/",
       image:"playingwithmatches.webp",
       title:"Quick Draw"
    },
    {
       website:"http://www.thesolusproject.com/",
       image:"hourences.webp",
       title:"Solos"
    },
    {
       website:"http://giantarmy.com/",
       image:"giantarmy.webp",
       title:"Universe Sandbox"
    },
    {
       website:"http://www.keepdefending.com/home.htm",
       image:"fastertimegameslimited.webp",
       title:"Faster Time Games Limited"
    }
];

const partnersImageFolder = "assets/CompanyLogos/";

const renderPartner = function(dataArray, parentDivId, partnerDivId) {
    let list = "";//dataArray[0].hasOwnProperty("imageAlt") ? dataArray[0].imageAlt : dataArray[0].title + " Logo";
    for(i=0; i < dataArray.length; i++){
        let imgPath = partnersImageFolder + dataArray[i].image;
        let alt = dataArray[i].hasOwnProperty("imageAlt") ? dataArray[i].imageAlt : (dataArray[i].title + " Logo");
        list += "<div class=\"" + partnerDivId + "\">\n<a href=\"" + dataArray[i].website + "\" target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"" + dataArray[i].title + "\">\n<img class=\"partnerComImg\" src=\"" + imgPath + "\" alt=\"" + alt + "\">\n</a>\n</div>";
    }
    $(parentDivId).append(list);
}

// Render the top partners divs
$(document).ready(function(){
    renderPartner(topPartnersData, "#topPartners", "topPartnerDiv");
});

// Render the developer event sponsors divs
$(document).ready(function(){
    renderPartner(developerEventPartnersData, "#developerEventPartners", "partnerDivEvent");
});

// Render the developer partners
$(document).ready(function(){
    renderPartner(developerPartnersData, "#developerPartners", "partnerDivDonate");
});
