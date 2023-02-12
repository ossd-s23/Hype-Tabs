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

function getRandomColor() {
    const red = Math.floor((1 + Math.random()) * 256 / 2);
    const green = Math.floor((1 + Math.random()) * 256 / 2);
    const blue = Math.floor((1 + Math.random()) * 256 / 2);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

browser.tabs.onActivated.addListener(changeColor);
function changeColor() {
    const randColor = getRandomColor();
    const theme = {
        colors: {
            toolbar: randColor,
            tab_selected: randColor
        }
    };
    browser.theme.update(theme);
}
