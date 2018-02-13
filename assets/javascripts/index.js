$(document).ready(function() {
  var isMobile = $('.mobile:visible').length > 0;

  //When the navigation hamburger, or X, is clicked open/close it.
  $('.n-nav-icon').click(function() {
    toggleNavigation();
    //Hide the scroll from the main content, so it doesn't affect the full nav on mobile
    if (isMobile) {
      if ($('.n-navbar').hasClass('active')) {
        $('body').addClass('noscroll');
      } else {
        $('body').removeClass('noscroll');
      }
    }
  });

  //Maybe add handling of identical query params
  window.updateRoute = function(newRoute) {
    if (newRoute.indexOf('?') > -1) {
      window.location.href = newRoute + '&' + window.location.search.substring(1, window.location.search.length - 1) //Remove the '?'
    } else {
      window.location.href = newRoute + window.location.search;
    }
  }

  //Set the active route
  function initializeRoute() {
    var els = $('.n-navbar li a');
    for (var i = 0; i < els.length; i++) {
      var el = $(els[i])[0];
      if (el.getAttribute('data-route') && el.getAttribute('data-route') == window.location.pathname) {
        $($(el).parent()).addClass('active');
        break;
      }
    }
  }
  initializeRoute();
  //On mobile
  $(window).resize(function() {
    isMobile = $('.mobile:visible').length > 0;
    if (isMobile) {
      closeNavigation();
      $('body').removeClass('noscroll');
    }
  })

  //Toggle the navigation
  function toggleNavigation() {
    $('.n-nav-icon').toggleClass('open');
    $('.n-nav-icon').toggleClass('active');
    $(".n-navbar").toggleClass('active');
  }

  //Close the navigation
  function closeNavigation() {
    $('.n-nav-icon').removeClass('open');
    $('.n-nav-icon').removeClass('active');
    $(".n-navbar").removeClass('active');
    $('body').removeClass('noscroll');
  }
  //Open the navigation
  function openNavigation() {
    $('.n-nav-icon').addClass('open');
    $('.n-nav-icon').addClass('active');
    $('.n-navbar').addClass('active');
  }
})
