let i=0;
document.addEventListener("DOMContentLoaded", () => {
// console.log("hii",i++);
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
   
    if (tabs[0].url && tabs[0].url.includes("youtube.com/watch")) {
      const urlparams = new URLSearchParams(new URL(tabs[0].url).search);
      
      const videoId = urlparams.get("v");
     
      chrome.storage.sync.get([videoId], (result) => {
        let dataArray=JSON.parse(result[videoId]);
        console.log("dataArray=",dataArray);

        dataArray.forEach(element => {
          let para=document.createElement("p");
          para.innerText=element.desc;
          document.querySelector(".timeStamp").appendChild(para)
        });

      });
    } else {
      document.querySelector(".timeStamp").innerHTML =
        "<p>Galat Jagah pe Aagye ho tum</p>";
    }

    

  });
});