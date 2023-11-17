let currentVideoBookmark=[];
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const controls = document.querySelector(".ytp-right-controls");
  let  data = updateBookmark();
  let btnn = document.querySelector(".costumbtn");
  if (!btnn) {
    let bookmarkBtn = document.createElement("img");
    bookmarkBtn.src = chrome.runtime.getURL("./download (1).png");
    const btn = document.createElement("button");
    btn.classList.add("ytp-button");
    btn.classList.add("costumbtn");
    btn.appendChild(bookmarkBtn);
    controls.appendChild(btn);
    btnn = document.querySelector(".costumbtn");

    btnn.addEventListener("click", () => {
      updateBookmark();
      // console.log("currentBookmark=",currentVideoBookmark);
      const videoPlayer = document.querySelector("video");
      const timeStamp = Math.floor(videoPlayer.currentTime);
      let time_in_hr = convertSectoHr(timeStamp);

      let newBookMark = {
        current_Time: timeStamp,
        desc: "bookmark at" + " " + time_in_hr,
      };



      
      let key = message.videoId;


      // 1 2 3 4 5
      chrome.storage.sync
        .set({
          [key]: JSON.stringify([...currentVideoBookmark, newBookMark]),
        })
        .then(() => {
          console.log("Value is set");
        });
    });
  }
    data = updateBookmark();

function updateBookmark() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get([message.videoId], (result) => {
      let dataArray = result[message.videoId] ? JSON.parse(result[message.videoId]) : [];
      console.log("dataArray =", dataArray);
      resolve(dataArray);
    });
  });
}

data.then((data2) => {
  currentVideoBookmark=data2;
  // This will log the retrieved data once it's available
}).catch((error) => {
  console.error(error); // Handle any errors during retrieval
});


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


