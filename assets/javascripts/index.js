---
---
$(document).ready(function() {
  //Remove our preload class so transitions don't fire on page load
  $("body").removeClass("preload");
  //When the navigation hamburger, or X, is clicked open/close it.
  $('.n-nav-icon').on('click', function() {
    toggleNavigation();
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
    return $('.mobile').offsetParent().length > 0;
  }

  //Toggle the navigation
  function toggleNavigation() {
    if ($('.n-navbar').hasClass('default')) {
      if (isMobile()) {
        openNavigation();
      } else {
        closeNavigation();
      }
    } else {
      if (isMobile()) {
        closeNavigation();
      } else {
        openNavigation();
      }
    }
  }
  $(window).on('resize', function() {
    if (isMobile()) {
      closeNavigation();
    } else {
      openNavigation();
    }
  })

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
      $('body').addClass('noscroll');
    } else {
      $('.n-nav-icon').addClass('default');
      $(".n-navbar").addClass('default');
    }
  }

  //Since we track tabs with the #
  //This is only needed on websites that use tabs
  //But if we only include it in tab.js any page without tabs on that website
  //will remove the hash.
  $('a').on('click', function(event) {
    var href = event.currentTarget.getAttribute('href');
    if (!(/^(https?:)?\/\//).test(href)) { //If it's not a relative link, go away
      if (href.startsWith('#')) {
        window.location = href;
      } else {
        window.location = href + window.location.hash;
      }
      event.preventDefault();
    }
  })
  
  function loadGoogleAnalytics(w,d,s,l,i) {
    w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
  }
  
  //Google analytics. Putting it here and not inline with the DOM because it liked to mess with page load there.
  loadGoogleAnalytics(window, document, 'script', 'dataLayer', '{{site.data.metadata.googleTagManagerID}}');
})
