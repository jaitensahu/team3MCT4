chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    tab.url &&
    tab.url.includes("youtube.com/watch") &&
    changeInfo.status == "complete"
  ) {
    console.log("Tab updated:", tabId);
    const urlparams = new URLSearchParams(new URL(tab.url).search);
    const videoId = urlparams.get("v");

    // Sending Message to contentScript.js of updated Tabs.
    chrome.tabs.sendMessage(tabId, {
      message: "Hello from background!",
      videoId: videoId,
    });
    console.log("Tab id:", videoId);
  }
});


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const keyToCheck = message.videoId;
  console.log(keyToCheck);

  chrome.storage.sync.set({ 'key': keyToCheck }).then(() => {
    console.log("Value is set");
  });
  
  chrome.storage.sync.get(["key"]).then((result) => {
    console.log("Value currently is " + result.key);
    console.log(result)
  });
});
