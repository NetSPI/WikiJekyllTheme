---
---
$(document).ready(function() {

  //When the navigation hamburger, or X, is clicked open/close it.
  $('.n-nav-icon').click(function() {
    toggleNavigation();
    //Hide the scroll from the main content, so it doesn't affect the full nav on mobile
    if (isMobile()) {
      if ($('.n-navbar').hasClass('active')) {
        $('body').addClass('noscroll');
      } else {
        $('body').removeClass('noscroll');
      }
    }
  });

  //Set the active route
  function initializeRoute() {
    var els = $('.n-navbar li a');
    for (var i = 0; i < els.length; i++) {
      var el = $(els[i])[0];
      if (el.getAttribute('data-route')) {
        //Normalize the route ending
        var route = el.getAttribute('data-route').replace(/\/$/, '');
        var pathname = window.location.pathname.replace(/\/$/, '');
        if (route === pathname) {
          $($(el).parent()).addClass('active');
          break;
        }
      }
    }
  }
  initializeRoute();
  function isMobile() {
    return $('.mobile:visible').length > 0;
  }

  //Toggle the navigation
  function toggleNavigation() {
    $('.n-nav-icon').toggleClass('default');
    $(".n-navbar").toggleClass('default');
  }

  //Close the navigation
  function closeNavigation() {
    if (isMobile()) {
      $('.n-nav-icon').addClass('default');
      $(".n-navbar").addClass('default');
    } else {
      $('.n-nav-icon').removeClass('default');
      $(".n-navbar").removeClass('default');
    }
    $('body').removeClass('noscroll');
  }
  //Open the navigation
  function openNavigation() {
    if (isMobile()) {
      $('.n-nav-icon').removeClass('default');
      $(".n-navbar").removeClass('default');
    } else {
      $('.n-nav-icon').addClass('default');
      $(".n-navbar").addClass('default');
    }
    $('body').removeClass('noscroll');
  }

  //Since we track tabs with the #
  //This is only needed on websites that use tabs
  //But if we only include it in tab.js any page without tabs on that website
  //will remove the hash.
  //We also use this to add the pagebase for all <a> tags, so that's useful.
  $('a').click(function(event) {
    var href = event.currentTarget.getAttribute('href');
    if (!(/^(https?:)?\/\//).test(href)) { //If it's not a relative link, go away
      event.preventDefault();
      window.location = "{{site.pagebase}}"+ href + window.location.hash;
    }
  })
})
