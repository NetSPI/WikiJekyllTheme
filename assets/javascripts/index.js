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
  function updateRoute(newRoute) {
    if (newRoute.indexOf('?') > -1) {
      window.location.href = newRoute + '&' + window.location.search.substring(1, window.location.search.length - 1) //Remove the '?'
    } else {
      window.location.href = newRoute + window.location.search;
    }
  }

  //On mobile
  $(window).resize(function() {
    isMobile = $('.mobile:visible').length > 0;
    if (isMobile) {
      closeNavigation();
      $('body').removeClass('noscroll');
    } else if (getCookie('nav') == 'true' || getCookie('nav') == undefined) {
      openNavigation();
      $('body').removeClass('noscroll');
    }
  })

  //Get a cookie value
  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) {
      return parts.pop().split(";").shift();
    } else {
      return undefined;
    }
  }
  if ((!getCookie('nav') && !isMobile) || getCookie('nav') == 'true') {
    openNavigation(true);
  }

  //Toggle the navigation
  function toggleNavigation() {
    $('.n-nav-icon').toggleClass('open');
    $('.n-nav-icon').toggleClass('active');
    $(".n-navbar").toggleClass('active');
    if (!isMobile) { //Save the user's preference on desktop
      document.cookie = "nav=" + $('.n-navbar').hasClass('active');
    }
  }

  //Close the navigation
  function closeNavigation(fast) {
    if (fast) {
      //A little overboard, but we have a lot of transitional elements
      // that look weird if this snaps and they don't
      $('*').addClass('no-transition');
      $('.n-nav-icon').removeClass('open');
      $('.n-nav-icon').removeClass('active');
      $(".n-navbar").removeClass('active');
      setTimeout(function() {
        $('*').removeClass('no-transition');
      }, 100)
      $('body').removeClass('noscroll');
    } else {
      $('.n-nav-icon').removeClass('open');
      $('.n-nav-icon').removeClass('active');
      $(".n-navbar").removeClass('active');
      $('body').removeClass('noscroll');
    }
  }
  //Open the navigation
  function openNavigation(fast) {
    if (fast) {
      //A little overboard, but we have a lot of transitional elements
      // that look weird if this snaps and they don't
      $('*').addClass('no-transition');
      $('.n-nav-icon').addClass('open');
      $('.n-nav-icon').addClass('active');
      $('.n-navbar').addClass('active');
      setTimeout(function() {
        $('*').removeClass('no-transition');
      }, 100)
    } else {
      $('.n-nav-icon').addClass('open');
      $('.n-nav-icon').addClass('active');
      $('.n-navbar').addClass('active');
    }
  }
})
