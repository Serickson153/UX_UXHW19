$(document).ready(function() {
  $(".button").on("click", function() {
      $(this).addClass("animated");
      setTimeout(() => {
          $(this).removeClass("animated");
      }, 500);
      $('html, body').animate({
        scrollTop: $("#myworkSection").offset().top
    }, {
        duration: 800,
        easing: 'swing',
        start: function() {
            console.log("Scroll animation started. Let's Go!");
        }
    });
});
});