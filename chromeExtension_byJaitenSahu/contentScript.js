chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // console.log("Message received in content script:", message.message,message.videoId,sender);
  // console.log(localStorage.getItem(message.videoId));

  // if (localStorage.getItem(message.videoId) == null) {
  //   localStorage.setItem(message.videoId, message.videoId);
  // } else {
  //   // console.log("Already present mam")
  // }
  const controls = document.querySelector(".ytp-right-controls");

let btnn=document.querySelector(".costumbtn");
console.log(btnn);
if(!btnn){
  let bookmarkBtn = document.createElement("img");
  bookmarkBtn.src = chrome.runtime.getURL("./download (1).png");
  const btn = document.createElement("button");
  btn.classList.add("ytp-button");
  btn.classList.add("costumbtn");
  btn.appendChild(bookmarkBtn);
  controls.appendChild(btn);
  btnn=document.querySelector(".costumbtn");
}
abc(btnn)
  
 
  // console.log(timeStamp);
  function abc(btnn){
    btnn.addEventListener("click",()=>{
      const videoPlayer = document.querySelector("video");
      const timeStamp = Math.floor(videoPlayer.currentTime);
    
      chrome.runtime.sendMessage(
        {
           timestamp: timeStamp,
          "videoId": message.videoId
        }
        
        );
  })
  }
  
});

// let btnn=document.querySelector(".costumbtn");

