// function onUpdated(tab) {
//     console.log(`Updated tab: ${tab.id}`);
// }

// function onError(error) {
//     console.log(`Error: ${error}`);
// }

// let css = "body { border: 20px dotted pink; }";

// function updateTabs(tabs) {
//     tabs.forEach((tab) => {
//         browser.tabs.insertCSS(tab.id, {
//             code: css
//         }).then(onUpdated, onError);
//     });
// }

// let querying = browser.tabs.query({ currentWindow: true });
// querying.then(updateTabs, onError);

// browser.browserAction.onClicked.addListener((tab) => {
//     // disable the active tab
//     browser.browserAction.disable(tab.id);
//     // requires the "tabs" or "activeTab" permission, or host permissions for the URL
//     console.log(tab.url);
// });

function logTabs(tabs) {
    for (const tab of tabs) {
        // tab.url requires the `tabs` permission or a matching host permission.
        console.log(tab.url);
    }
}

function onError(error) {
    console.error(`Error: ${error}`);
}

browser.tabs.query({}).then(logTabs, onError);
