browser.browserAction.onClicked.addListener(changeTabColor);
function changeTabColor(activeInfo) {
    browser.tabs.query({ currentWindow: true })
        .then((tabs) => {
            const pngURL = browser.runtime.getURL("icons/hype-tabs-48.png");
            tabs.forEach((tab) => {
                const activeTab = tab.id;
                browser.tabs.executeScript(activeTab, {
                    code: `
                        document.body.style.backgroundColor = "green";
                        document.title = "HYPE";
                        document.querySelectorAll("link[rel*='icon']").forEach((element) => {
                            element.href = "${pngURL}";
                        });
                    `
                });
            });
        });
}

browser.tabs.onActivated.addListener(changeColor);
function changeColor() {
    const colors = ["red", "green", "blue", "yellow"];
    const randColor = colors[Math.floor(Math.random() * colors.length)];
    const theme = {
        colors: {
            toolbar: randColor,
            tab_selected: randColor
        }
    };
    browser.theme.update(theme);
    // browser.tabs.query({ currentWindow: true })
    //     .then((tabs) => {
    //         browser.theme.update(theme);
    //     });
}
