function updateTab(tab, ignoreURL) {
  if (!tab)
    return;
  $('#tabs #' + tab+"Tab").attr('checked', 'checked')
  if (!ignoreURL) {
    window.location.hash = tab;
  }
}

//On forward/back buttons refresh everything
$(window).on("popstate", function(e) {
  updateTab(null, true);
});
