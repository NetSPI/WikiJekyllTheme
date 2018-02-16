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
  //Same if there's a hash that we don't have
  if (areTabsOnPage() && !doesHashExistOnPage()) {
    window.location.hash = $(".tabs .tabInput")[0].id;
    }
  }
  
  //Are there tabs on the page
  function areTabsOnPage() {
   return $(".tabs .tabInput").length>0;
  }
    
  //Does the current hash have a matching tab on the page
  function doesHashExistOnPage() {
    return ($(".tabs .tabInput#" + window.location.hash.replace('#', '')).length>0)
  }
})
