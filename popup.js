document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("reload").addEventListener("click", function() {
    chrome.tabs.query({}, function(tabs) {
      for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.reload(tabs[i].id);
      }
           // Add these lines for feedback:
           var statusMessage = document.getElementById("statusMessage");
           if (statusMessage) {
             statusMessage.textContent = "All tabs reloaded!";
             statusMessage.style.display = "block"; // Or "inline" or ""
             setTimeout(function() {
               statusMessage.style.display = "none";
             }, 3000); // Hide after 3 seconds
           }
    });
  });
});