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
    console.log("Validator active");
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
