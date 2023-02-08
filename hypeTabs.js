// document.body.style.border = "5px solid green";
// let css = "body { border: 20px dotted pink; }";

browser.browserAction.onClicked.addListener(changeTabColor);
// browser.tabs.onActivated.addListener(changeTabColor);

// in background.js
// browser.tabs.query({ currentWindow: true }, (tabs) => {
//   var activeTab = tabs[0];
//   tabs.forEach((tab) => {
//     console.log('hello');
//     // browser.tabs.insertCSS({ code: css }).then(null, console.log('Error'));
//   })

//   browser.tabs.onActivated.addListener(changeTabColor("red"));
// });

function changeTabColor(e) {
  // document.body.style.border = "5px solid red";
  browser.tabs.query({ currentWindow: true, active: true })
    .then((tabs) => {
      const activeTab = tabs[0].id;
      browser.tabs.executeScript(activeTab, {
        code: 'document.body.style.backgroundColor = "green"'
      });
    });
}