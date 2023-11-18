let currentVideoBookmark = [];
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if(message.type=="type1"){
  const controls = document.querySelector(".ytp-right-controls");

  let btnn = document.querySelector(".costumbtn");
  if (!btnn) {
    let bookmarkBtn = document.createElement("img");
    bookmarkBtn.src = chrome.runtime.getURL("Assets/786352.png");
    const btn = document.createElement("button");
    btn.classList.add("ytp-button");
    btn.classList.add("costumbtn");
    btn.appendChild(bookmarkBtn);
    controls.appendChild(btn);
    btnn = document.querySelector(".costumbtn");

    btnn.addEventListener("click", async () => {
      currentVideoBookmark = await updateBookmark();
      const videoPlayer = document.querySelector("video");
      const timeStamp = Math.floor(videoPlayer.currentTime);
      let time_in_hr = convertSectoHr(timeStamp);

      let newBookMark = {
        current_Time: timeStamp,
        desc: "Bookmark At" + " " + time_in_hr,
      };

      let key = message.videoId;

      console.log("current1=", currentVideoBookmark);

      chrome.storage.sync
        .set({
          [key]: JSON.stringify([...currentVideoBookmark, newBookMark]),
        })
        .then(() => {
          console.log("Value is set");
        });
    });
  }

  currentVideoBookmark = await updateBookmark();

  function updateBookmark() {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get([message.videoId], (result) => {
        let dataArray = result[message.videoId]
          ? JSON.parse(result[message.videoId])
          : [];
        resolve(dataArray);
      });
    });
  }
}else if(message.type=='type2'){
  console.log("hii you got the message" , message["timeToPlay"]);
  const videoPlayer = document.querySelector("video");
  videoPlayer.currentTime=message["timeToPlay"];
  
}
});

function convertSectoHr(timestamp) {
  return (
    Math.floor(timestamp / 3600) +
    ":" +
    Math.floor(timestamp / 60) +
    ":" +
    Math.floor(timestamp % 60)
  );
}
