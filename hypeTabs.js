document.body.style.border = "5px solid red";
// in background.js
browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    browser.tabs.onCreated.addListener(changeTabColor("red"));
});
  
function changeTabColor(color) {
    browser.tabs.query({currentWindow: true})
      .then((tabs) => {
        const activeTab = tabs[0];
        browser.tabs.executeScript({
          code: `document.body.style.backgroundColor = "${color}"`
        });
    });
}