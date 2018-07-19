$(document).ready(function () {
    $('#next-race-countdown').html('loading...');
    var date = new Date("Jul 20, 2018 11:00:00").getTime();
    var x = setInterval(function () {
    
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = date - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    $('#next-race-countdown').html('<h3>Next GP (FP1) in ' + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s </h3>");
    
    }, 1000);

    if (distance < 0) {
        clearInterval(x);
        $('#next-race-countdown').html("#UNKNOWN");
    }
});