browser.tabs.onActivated.addListener(toGoogle);
function toGoogle() {
    browser.tabs.query({active:true, currentWindow: true})
      .then((tabs) => {
        const activeTab = tabs[0].id;
        browser.tabs.update(
            activeTab,
            {
                url: "https://www.google.com",
                active: true
            }
        )
    });

  }

browser.browserAction.onClick.addListener(changeTabColor);
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
    });
}
