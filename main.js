$(document).ready(function () {
  // About Links
  var windA = $(window);

  windA.on("scroll", function () {
    var bodyScrollA = windA.scrollTop();

    if (bodyScrollA > 500) {
      $(".about-links").addClass("sticky-about-links");
    } else {
      $(".about-links").removeClass("sticky-about-links");
    }
  });

  // Toggle Video Play & Pause
  $(".video-section-container").on("click", function () {
    var mediaVideo = $("video").get(0);
    if (mediaVideo.paused) {
      mediaVideo.play();
      $(this).find(".vid-play").hide();
      $(this).find(".vid-pause").removeClass("d-none");
      $(this).parent().find(".video-section-details").fadeOut(500);
      setInterval(function () {
        $(".vid-pause").addClass("d-none");
      }, 3000);
    } else {
      mediaVideo.pause();
      $(this).find(".vid-play").show();
      $(this).find(".vid-pause").addClass("d-none");
      $(this).parent().find(".video-section-details").fadeIn(500);
    }
  });

  // Toggle Navbar
  $(".nav-toggler").on("click", function () {
    $(".nav-links").toggleClass("navbar-open");
  });

  // Navbar Close
  $(".nav-close").on("click", function () {
    $(".nav-links").removeClass("navbar-open");
  });
});
