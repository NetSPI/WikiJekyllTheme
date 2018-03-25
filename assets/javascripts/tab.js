---
---
$(document).ready(function() {
  window.updateTab = function(tab, ignoreURL) {
    if (!tab)
      return;
    if (!ignoreURL) {
      window.location.hash = tab;
    }
  }
  $(window).on("popstate", function(e) {
    $('#tabs .tabInput').each(function(element) {
      element.checked=false;
    });
  })
  //If there's no hash set a default one
  //Same if there's a hash that we don't have
  var ignorePageURLCheck = $('.tabs [data-tabs-ignore-url="true"]').length>0;
  if (areTabsOnPage() && !doesHashExistOnPage() && !ignorePageURLCheck) {
    window.location.hash = $(".tabs .tabInput")[0].id;
  }

  //Are there tabs on the page
  function areTabsOnPage() {
    return $(".tabs .tabInput").length > 0;
  }

  //Does the current hash have a matching tab on the page
  function doesHashExistOnPage() {
    if (!window.location.hash.replace('#', ''))
      return false;
    return ($(".tabs .tabInput#" + window.location.hash.replace('#', '')).length > 0)
  }
})
