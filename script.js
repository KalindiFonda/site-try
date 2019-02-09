

$(document).ready(function() {
  document.getElementsByTagName("html")[0].style.visibility = "visible";
});


$(".text").each("mouseover", function() {
  $(".text").addClass('permahover');
});


$(function() {
    $(window).on('scroll', function() {
        $('.img').css('margin-top', $(window).scrollTop() * -.3);
    });
});
