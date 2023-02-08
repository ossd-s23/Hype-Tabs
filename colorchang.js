function changeTabColor(color) {
    browser.tabs.query({active: true, currentWindow: true})
      .then((tabs) => {
        const activeTab = tabs[0];
        browser.tabs.executeScript({
          code: `document.body.style.backgroundColor = "${color}"`
        });
      });
  }