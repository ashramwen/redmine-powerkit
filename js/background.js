const networkFilters = {
  urls: ['*://redmine.yjtech.tw/agile/board*'],
};
chrome.webRequest.onResponseStarted.addListener(
  () =>
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) =>
      chrome.tabs.sendMessage(tabs[0].id, { action: 'change_color' })
    ),
  networkFilters
);

const test = (a) => {};
