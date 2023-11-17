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
      type:"type1"
    });
    console.log("Tab id:", videoId);
  }
});



