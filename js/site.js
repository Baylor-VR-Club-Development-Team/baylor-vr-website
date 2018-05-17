// Home We Are Scroller
var list = ["VR", "a Team", "the future"];
var index = 0;

setInterval(function () {
    if (index >= list.length) {
        index = 0;
    }
    $('#rotate').html(list[index]);
    index++;
}, 3000);
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
