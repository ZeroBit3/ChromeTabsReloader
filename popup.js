document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("reload").addEventListener("click", function() {
    chrome.tabs.query({}, function(tabs) {
      for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.reload(tabs[i].id);
      }
    });
  });
});