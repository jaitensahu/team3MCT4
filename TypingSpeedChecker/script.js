let firstSection = document.querySelector(".first_section");
let btn = document.querySelector("#play");
let loading = document.querySelector("#load");
let second = document.querySelector(".inSecond");
let misTag = document.querySelector(".mistake span");
let cpmTag = document.querySelector(".cpm span");
let wpmTag = document.querySelector(".wpm span");
let tryBtn = document.querySelector("#try");
console.log(tryBtn);

let charIndex =0;
let misTakes=0;
// console.log(charIndex);

let timeTag = document.querySelector(".time span b")
// console.log(timeTag);
let timer = null;
let maxTime = 60;
let timeLeft =maxTime;
let isTyping =0;

// firstSection.style.display = "none"
loading.style.display = "none"
second.style.display = "none"

btn.addEventListener("click",(e)=>{
    
    firstSection.style.display ="none";
        loading.style.display ="block";
        setTimeout(()=>{
            loading.style.display ="none";
            second.style.display ="block"
        },4000)  
})

let paragraph = ["Games and sports are very important in one’s life. Those who participate in games and sports have a good outlook on life because they are likely to be physically and mentally fit. They are beneficial in a variety of ways, including helping to maintain blood pressure, increase blood flow, improve thinking capacity and attention, and so on. It assists in the development of a team spirit and develops a leadership quality in the individual, in addition to being physically and intellectually fit. When people participate in sports or games, they become more intelligent, energetic, and courageous. Many children pursue careers in numerous sports and games, making them well-known figures in society.","Our environment is nature’s most precious and vital gift, and it needs to be handled with utmost care. It is the natural ecological system where we live, depending on each other for survival. The environment is divided into physical and biological components. The atmosphere, lithosphere and hydrosphere constitute the physical category, and the biological category comprises human beings and other living beings. In simple terms, the environment is defined as the combination and interrelation between all biotic and abiotic components. The ecosystem of our environment needs to be maintained in a proper balance, and if any part of it is disturbed, the whole ecosystem gets affected.","India is a vast country with various religions and various cultural practices. People with different cultural beliefs stay together in harmony. They celebrate festivals together and share love and respect with each other. Some major festivals celebrated in India are Holi, Diwali, Dussehra, Eid, Christmas, etc. The festivals can be national or religious. Some national festivals are Independence day, Republic day, Gandhi Jayanti, etc. The national festivals are celebrated together as a nation. These festivals reflect the love for the nation and share love and respect for each other. We also pay tribute to the nation and the heroes of our nation"];


let typingText = document.querySelector(".typing-text p");
let inputField = document.querySelector(".input-field");



function randomPara(){
    let randomIndex = Math.floor(Math.random()*paragraph.length);
    typingText.innerHTML="";
    let sepSplit = paragraph[randomIndex].split("");
        sepSplit.forEach((val)=>{
            // console.log(span);
            let spanTag =`<span>${val}</span>`;
            typingText.innerHTML+=spanTag;
            
        });

        //   focus on the input tag
        document.addEventListener("keydown",()=>{
            inputField.focus();
        });
        document.addEventListener("click",()=>{
            inputField.focus();
        });
        typingText.querySelectorAll("span")[0].classList.add("active")
}
function inTyping(){
    let characters = typingText.querySelectorAll("span");
    let typeChar = inputField.value.split("")[charIndex];
   
    if(charIndex <characters.length-1 && timeLeft>0){
        // pick
    if(!isTyping){
        timer = setInterval(initTimer,1000);
        isTyping = true;
    }

    if(typeChar==null){
        charIndex--;
       if( characters[charIndex].classList.contains("incorrectWords")){
        misTakes--;
       }
        characters[charIndex].classList.remove("correctWords","incorrectWords");
    }else{
        if(characters[charIndex].innerText ===typeChar){
            characters[charIndex].classList.add("correctWords");
        }else{
            misTakes++;
            // console.log(misTakes);
            characters[charIndex].classList.add("incorrectWords");
        }
        charIndex++;
    }
    characters.forEach(span =>{
        span.classList.remove("active");
        characters[charIndex].classList.add("active");
    })
    let wpm = Math.round((((charIndex - misTakes)/5)/(maxTime-timeLeft))*60);

    wpm = wpm <0 || !wpm || wpm ===Infinity ? 0 : wpm;

    wpmTag.innerText =wpm;

    misTag.innerText = misTakes;
    cpmTag.innerText = charIndex-misTakes;
    // pick
    }else{
        inputField.value="";
        clearInterval(timer)
    }

}
function initTimer(){
    if(timeLeft>0){
        timeLeft--;
        timeTag.innerText =timeLeft;
    }else{
        clearInterval(timer)
    }
}

function reset(){
    randomPara();
    timeLeft =maxTime;
    charIndex = 0;
    misTakes=0;
    isTyping=0;
    timeTag.innerText =timeLeft;
    misTag.innerText = misTakes;
    wpmTag.innerText = 0;
    cpmTag.innerText =0;
    inputField.value="";
    clearInterval(timer)
}

randomPara();
inputField.addEventListener("input",inTyping);
tryBtn.addEventListener("click",reset);