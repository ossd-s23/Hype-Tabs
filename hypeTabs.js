browser.browserAction.onClicked.addListener(changeTabColor);

function changeTabColor() {
    browser.tabs.query({active:true, currentWindow: true})
      .then((tabs) => {
        const activeTab = tabs[0].id;
        browser.tabs.executeScript(activeTab, {
            code: `document.body.style.backgroundColor = "green"`
          });
      });

  }
browser.tabs.onActivated.addListener(toGoogle);
function toGoogle() {
    browser.tabs.query({active:true, currentWindow: true})
      .then((tabs) => {
        const activeTab = tabs[0].id;
        browser.tabs.update(
            activeTab,
            {url: "https://www.google.com"}
        )
      });

  }
