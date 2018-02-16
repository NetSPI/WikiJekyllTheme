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
    $('#tabs .tabInput').attr('checked', false);
    updateTab(null, true);
  });

  //If there's no hash set a default one
  if (!window.location.hash) {
    window.location.hash = $(".tabs .tabInput")[0].id;
  } else {
    //If the hash we have doesn't exist, keep it, but just show another tab
    if (!$(".tabs .tabInput#" + window.location.hash.replace('#', '')).length) {
      $(".tabs .tabInput")[0].attr('checked', 'checked');
    }
  })
})
