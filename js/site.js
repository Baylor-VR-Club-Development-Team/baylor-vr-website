// Home page
const typeWriterWords = ["VR", "a Team", "the future"];
let index = 1;

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
        updateTypeWriter();
    }
});

// Home Image Slider
setInterval(function () {
    homeSiema.next();
}, 5000);

//Set the first one before the Interval
$('#rotate').html(typeWriterWords[0]);

// Function called to change the WeAre tag
function updateTypeWriter() {
    if (index >= typeWriterWords.length) {
        index = 0;
    }
    $('#rotate').html(typeWriterWords[index]);
    index++;
}

//ScrollSpy
$('body').scrollspy({
    target: '#navScroll',
    offset: 100
});

setInterval(function () {
    devSiema.next();
}, 5000);
// End Dev Team Card carousel

// Twitch Online|Offline Thing
const online = 'We are currently <span class="badge-online">Online</span>';
const offline = 'We are currently <span class="badge-offline">Offline</span>';

$(function () {
    const url = "https://api.twitch.tv/kraken/streams/baylorvrclub?client_id=9q24z9k6jxx98x57i3avgecilospmu";
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

// Smooth Scroll
$('a[href*="#"]').on("click", (function (event) {
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
}));

// Collapse navbar on click
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// Top Partners data and render
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
        website: "http://www.dreadhalls.com/",
        image: "dreadhalls.webp",
        title: "Dreadhalls"
    },
    {
        website: "http://www.ndreams.com/",
        image: "ndreams.webp",
        title: "nDreams"
    },
    {
        website: "http://nopact.com/",
        image: "nopact.webp",
        title: "nopact"
    },
    {
        website: "https://www.marineverse.com/",
        image: "marineverse.webp",
        title: "Marine Verse"
    },
    {
        website: "https://owlchemylabs.com/",
        image: "OwlchemyLabs.webp",
        title: "Owlchemy Labs"
    },
    {
        website: "https://www.schellgames.com/",
        image: "SchellGames.webp",
        title: "Schell Games"
    },
    {
        website: "http://ultimerse.com/",
        image: "ultimerse.webp",
        title: "Ultimerse"
    },
    {
        website: "http://vertigo-games.com/",
        image: "vertigogames.webp",
        title: "Vertigo Games"
    },
    {
        website: "https://www.earthfall.com/",
        image: "holospark.webp",
        title: "Holospark"
    },
    {
        website: "http://www.tothetopvr.com/",
        image: "tothetop.webp",
        title: "To The Top"
    },
    {
        website: "http://www.mixedrealms.com/",
        image: "mixedrealms.webp",
        title: "Mixed Realms"
    },
    {
        website: "http://aestheticinteractive.com",
        image: "aestheticinteractive.webp",
        title: "Aesthetic Interactive"
    },
    {
        website: "http://acceleroto.com/",
        image: "acceleroto.webp",
        title: "Acceleroto"
    },
    {
        website: "http://gametroopers.net/",
        image: "gametroopers.webp",
        title: "Game Troopers"
    },
    {
        website: "https://ladrik.itch.io/undead-development",
        image: "UndeadDevelopment.webp",
        title: "Undead Development"
    },
    {
        website: "https://www.vrnerds.de/",
        image: "vrnerds.webp",
        title: "VR Nerds"
    },
    {
        website: "https://www.ovrshot.com/",
        image: "windowlickergames.webp",
        title: "Window Licker Games"
    },
    {
        website: "http://www.whitelotusinteractive.com/",
        image: "whiteLotusInteractive.webp",
        title: "White Lotus Interactive"
    },
    {
        website: "http://www.overflowgames.se/",
        image: "overflow.webp",
        title: "Overflow"
    },
    {
        website: "http://alvios.com/",
        image: "alvios.webp",
        title: "Alvrios Games"
    },
    {
        website: "https://store.steampowered.com/app/494150/The_Thrill_of_the_Fight__VR_Boxing/",
        image: "thrillofthefight.webp",
        title: "Thrill to the Fight!"
    },
    {
        website: "https://uvrtech.com/home",
        image: "uvr.webp",
        title: "UVR"
    },
    {
        website: "https://store.steampowered.com/app/525640/agecheck",
        image: "bulletsandmorevr.webp",
        title: "Bullets and More"
    },
    {
        website: "http://www.firehosegames.com/",
        image: "firehose.webp",
        title: "Fire Hose"
    },
    {
        website: "http://somatic.dk/",
        image: "somatic.webp",
        title: "Somantic"
    },
    {
        website: "http://www.alientrap.com/",
        image: "alientrap.webp",
        title: "Alien Trap"
    },
    {
        website: "https://radiantcrusade.com/",
        image: "radiance.webp",
        title: "Radiance"
    },
    {
        website: "http://www.croteam.com/",
        image: "croteam.webp",
        title: "Croteam"
    },
    {
        website: "http://www.i-illusions.com/home/",
        image: "i-illusions.webp",
        title: "I Illusions"
    },
    {
        website: "http://holos.io/",
        image: "holos.webp",
        title: "Holos"
    },
    {
        website: "https://www.masterpiecevr.com/",
        image: "masterpiecevr.webp",
        title: "Masterpiece VR"
    },
    {
        website: "http://starloopstudios.com/",
        image: "starloop.webp",
        title: "Starloop"
    },
    {
        website: "https://www.wearvr.com/developers/comrex-ag/apps",
        image: "comrexAG.webp",
        title: "Bitslap"
    },
    {
        website: "https://store.steampowered.com/app/618500/Hailstorm_VR/",
        image: "slimeq.webp",
        title: "Hailstorm"
    },
    {
        website: "https://store.steampowered.com/app/522250/Quick_Draw/",
        image: "playingwithmatches.webp",
        title: "Quick Draw"
    },
    {
        website: "http://www.thesolusproject.com/",
        image: "hourences.webp",
        title: "Solos"
    },
    {
        website: "http://giantarmy.com/",
        image: "giantarmy.webp",
        title: "Universe Sandbox"
    },
    {
        website: "http://www.keepdefending.com/home.htm",
        image: "fastertimegameslimited.webp",
        title: "Faster Time Games Limited"
    }
];

const partnersImageFolder = "assets/CompanyLogos/";

const renderPartner = function (dataArray, parentDivId, partnerDivId) {
    let list = "";//dataArray[0].hasOwnProperty("imageAlt") ? dataArray[0].imageAlt : dataArray[0].title + " Logo";
    for (let i = 0; i < dataArray.length; i++) {
        let imgPath = partnersImageFolder + dataArray[i].image;
        let alt = dataArray[i].hasOwnProperty("imageAlt") ? dataArray[i].imageAlt : (dataArray[i].title + " Logo");
        list += "<div class=\"" + partnerDivId + "\">\n<a href=\"" + dataArray[i].website + "\" target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"" + dataArray[i].title + "\">\n<img class=\"partnerComImg\" src=\"" + imgPath + "\" alt=\"" + alt + "\">\n</a>\n</div>";
    }
    $(parentDivId).append(list);
};

const renderOfficerCard = function(officer) {
    return `<div class="col-md-3 cardOfficer">
                <img src="${officerFolderPath}${officer.image}" alt="${officer.name}">
                <div class="overlayOfficer">
                    <div class="textOfficer">
                        ${officer.name}<br> ${officer.position}
                    </div>
                    <div class="OffBtn">
                        <a href="${officer.linkedIn}" target="_blank" class="btn btn-primary" role="button" aria-pressed="true">LinkedIn</a>
                    </div>
                </div>
            </div>`;
};

const renderOfficerCards = function() {
    let officerRender = "";
    for (let i = 0; i < officers.length; i++) {
        officerRender += renderOfficerCard(officers[i]);
        console.log(officerRender);
    }
    $("#officerContent").append(officerRender);
};

$(function () {
    // Render the top partners divs
    renderPartner(topPartnersData, "#topPartners", "topPartnerDiv");
    // Render the developer event sponsors divs
    renderPartner(developerEventPartnersData, "#developerEventPartners", "partnerDivEvent");
    // Render the developer partners
    renderPartner(developerPartnersData, "#developerPartners", "partnerDivDonate");
    //
    renderOfficerCards();
});

const officerFolderPath = "assets/Officers/";
const officers = [
    {
        name: "Reece Kemball-Cook",
        position: "President",
        image: "ReeceKC/1.webp",
        linkedIn: "https://www.linkedin.com/in/reece-kemball-cook-54557b150/"
    },
    {
        name: "Alexandra Barnett",
        position: "Vice President",
        image: "AliB/1.webp",
        linkedIn: "https://www.linkedin.com/in/alexandra-barnett-24930a163/"
    },
    {
        name: "Sean Blonien",
        position: "Director of Development",
        image: "SeanB/1.webp",
        linkedIn: "https://www.linkedin.com/in/seanblonien/"
    },
    {
        name: "Cameron Hay",
        position: "eSports Captain",
        image: "CameronH/1.webp",
        linkedIn: ""
    },
    {
        name: "Josh Holland",
        position: "Treasurer",
        image: "JoshH/1.webp",
        linkedIn: "https://www.linkedin.com/in/joshholland1/"
    },
    {
        name: "Brittany LaVergne",
        position: "Social Media Chair",
        image: "placeholder_officer.jpg",
        linkedIn: "https://www.linkedin.com/in/brittany-lavergne/"
    },
];

// Mailchimp Javascript
(function () {
    window.fnames = [];
    window.ftypes = [];
    fnames[0] = 'EMAIL';
    ftypes[0] = 'email';
    fnames[1] = 'FNAME';
    ftypes[1] = 'text';
    fnames[2] = 'LNAME';
    ftypes[2] = 'text';
    fnames[3] = 'ADDRESS';
    ftypes[3] = 'address';
    fnames[4] = 'PHONE';
    ftypes[4] = 'phone';
}(jQuery));
const $mcj = jQuery.noConflict(true);