window.onload = function() {
        // Get the current tab
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          // Inject a script into the current tab
          chrome.tabs.executeScript(tabs[0].id, {
            code: 'document.body.innerText'
          }, function(results) {
            // Get the result of the script execution
            var text = results[0];
            // Display the result in the div element
            document.getElementById('content').innerText = text;
          });
        });
};
      