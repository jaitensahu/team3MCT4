document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0].url && tabs[0].url.includes("youtube.com/watch")) {
      const urlparams = new URLSearchParams(new URL(tabs[0].url).search);

      const videoId = urlparams.get("v");
      // deleteBookmark(videoId);
      chrome.storage.sync.get([videoId], (result) => {
        let dataArray = JSON.parse(result[videoId]);
        console.log("dataArray=", dataArray);

        appendData(dataArray, videoId);
        document.querySelector(".heading").innerText="Bookmarked TimeStamp"
      });
    } else {
      document.querySelector(".heading").innerHTML =
        `
        <p class="Errortext">Not a Youtube Page</p>
        <img src="./assets/cutie-cat.gif"/>

        `
    }
  });
});

function deleteBookmark(id) {
  let deleteBtn = document.querySelectorAll(".deleteBtn");
  let playBtn = document.querySelectorAll(".play");
  deleteBtn.forEach((ele) => {
    ele.addEventListener("click", deleteButton_func);
  });

  playBtn.forEach((ele) => {
    ele.addEventListener("click", playButton_func);
  });
}

function playButton_func(e){
  let targetedEle =
    e.target.parentElement.parentElement.children[0].children[0].innerText;
  let id = e.target.getAttribute("value");

  chrome.storage.sync.get([id], (result) => {
    let dataArray = JSON.parse(result[id]);
    let newArray = dataArray.filter((element) => {
      return element.desc == targetedEle;
    });
   

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
     
      const activeTabId = tabs[0].id;

      chrome.tabs.sendMessage(activeTabId, {
        message: "Hii",
        type: "type2", 
        timeToPlay: newArray[0].current_Time 
      });
    });
  })
}

function deleteButton_func(e) {
  let targetedEle =
    e.target.parentElement.parentElement.children[0].children[0].innerText;
  let id = e.target.getAttribute("value");

  chrome.storage.sync.get([id], (result) => {
    let dataArray = JSON.parse(result[id]);
    let newArray = dataArray.filter((element) => {
      return element.desc != targetedEle;
    });

    chrome.storage.sync
      .set({
        [id]: JSON.stringify([...newArray]),
      })
      .then(() => {
        console.log("Value is set");
      });

    chrome.storage.sync.get([id], (result) => {
      let dataArray = JSON.parse(result[id]);
      console.log("after Deleting data", dataArray);
      appendData(dataArray, id);
    });
  });
}

function appendData(dataArray, videoId) {
  document.querySelector(".timeStamp").innerHTML = "";
  dataArray.forEach((element) => {
    let tablerow = document.createElement("tr");
    tablerow.classList.add("bookmark");
    tablerow.innerHTML = `
          <td>
              <p>${element.desc}</p>
          </td>
          <td><img src="./Assets/video-play-icon-24 (1).png" alt="" class="play" value=${videoId}></td>
          <td> <img src="./Assets/Delete-Red-X-Button-PNG-HD-Image.png" class="deleteBtn" value=${videoId} alt=""></td>
    `;
    document.querySelector(".timeStamp").appendChild(tablerow);
    deleteBookmark(videoId);
  });
}


