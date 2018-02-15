$(document).ready(function() {
  window.updateTab = function(tab, ignoreURL) {
    if (!tab)
      return;
    $('#tabs #' + tab + "Tab").attr('checked', 'checked')
    if (!ignoreURL) {
      window.location.hash = tab;
    }
  }

  //On forward/back buttons refresh everything
  $(window).on("popstate", function(e) {
    updateTab(null, true);
  });

  //Since we track tabs with the #
  $('a').click(function(event) {
    event.preventDefault();
    if (/^(https?:)?\/\//.test(event.currentTarget.pathname)) { //If it's not a relative link, go away
      window.location = event.currentTarget.pathname;
    } else {
      window.location = event.currentTarget.pathname + window.location.hash;
    }
  })
})
