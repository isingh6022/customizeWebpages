var fn = function (tab) {
  console.log('executing backgr.');
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['./personalize.js'],
  });
};

chrome.action.onClicked.addListener((tab) => fn(tab));
