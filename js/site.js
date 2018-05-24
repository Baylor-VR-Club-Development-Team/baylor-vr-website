// Lazy Loading
window.addEventListener('load', function () {
    var allimages = document.getElementsByTagName('img');
    for (var i = 0; i < allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) {
            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        }
    }
}, false);

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

//ScrollSpy
$('body').scrollspy({
    target: '#navScroll',
    offset: 100
})
// End ScrollSpy

// Dev Team Card Carousel

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
