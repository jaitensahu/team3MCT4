chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch") && changeInfo.status=='complete') {
    console.log("Tab updated:", tabId);
    const urlparams= new URLSearchParams(new URL(tab.url).search);
    const videoId=urlparams.get("v");
    
    // Sending Message to contentScript.js of updated Tabs.
    chrome.tabs.sendMessage(tabId, { 
        message: "Hello from background!", 
        "videoId":videoId
    });
    console.log("Tab id:", videoId);
  }
});


// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     console.log(message.videoId)
//     chrome.storage.local.get(message.videoId, (result) => {
//         if (Object.keys(result).includes(message.videoId) ){
//           console.log(`Key '${message.videoId}' exists in Chrome Storage.`);
//           // Perform actions if the key exists
//         } else {
//           console.log(`Key '${message.videoId}' does not exist in Chrome Storage.`);
//           // Perform actions if the key does not exist
//         }
//       });  

//     let timeStamp_container=document.querySelector(".timeStamp")
//     let para=document.createElement("p");
//     para.innerHTML=`TimeStamp${i++}${message.timestamp}`
//     timeStamp_container.appendChild(para);

// })
