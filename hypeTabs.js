browser.tabs.onActivated.addListener(changeTabColor);
function changeTabColor() {
    browser.tabs.query({active:true, currentWindow: true})
      .then((tabs) => {
        const activeTab = tabs[0].id;
        browser.tabs.executeScript(activeTab, {
          code: `document.body.style.backgroundColor = "green"`
        });
        // browser.browserAction.setIcon({
        //     tabId: activeTab,
        //     48: "icons/hype-tabs-48.png",
        // })
        // browser.browserAction.setTitle({
        //     title: "COOL"
        // })
        browser.tabs.update(
            activeTab,
            {url: "https://www.google.com"}
        )
      });

  }
// in background.js
// browser.tabs.query({currentWindow: true}).then(changeTabColor());
// changeTabColor();
