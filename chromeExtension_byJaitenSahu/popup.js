let i=1;



chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message.videoId)
    chrome.storage.local.get(message.videoId, (result) => {
        if (Object.keys(result).includes(message.videoId) ){
          console.log(`Key '${message.videoId}' exists in Chrome Storage.`);
          // Perform actions if the key exists
        } else {
          console.log(`Key '${message.videoId}' does not exist in Chrome Storage.`);
          // Perform actions if the key does not exist

            let key=message.videoId;
            console.log("hii",key);
          chrome.storage.local.set({ key : 'value' }, () => {
            console.log('Data stored locally.');
          });
        }
      });  

    let timeStamp_container=document.querySelector(".timeStamp")
    let para=document.createElement("p");
    para.innerHTML=`TimeStamp${i++}${message.timestamp}`
    timeStamp_container.appendChild(para);

})
  