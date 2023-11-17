let names = document.querySelector(".nm");
let obj = document.querySelector(".obj");
let results=document.querySelector(".outputcontainer");
let container= document.querySelector(".container2");
let headcolor = document.getElementById("headrcolor");
let txtColor = document.getElementById("hdtxtcolor");
let emails= document.querySelector(".email");
let nums = document.querySelector(".num");
let contry = document.querySelector(".cont");
let forjob = document.querySelector("#titl");
let resumeTypes = document.querySelector("#resumeTpes");
let Employ = document.querySelector(".employments");
let Empbtn = document.querySelector(".addEmp");
let ProjectDetails = document.querySelector(".Projects");
let projBtn = document.querySelector(".addProj");
let EducationDetails = document.querySelector(".Projects");
let EducatBtn = document.querySelector(".addeducate");

// -------------download proccess----------------------//
let finalesResume = document.querySelector(".outputTypOne");

let downloadbtn = document.querySelector(".download");

// function downevent(btn2,val){
//     // console.log(val);
//     btn2.addEventListener("click",()=>{
//         val.style.width="100%";
//         finalesResume.style.width="100%";
//         html2pdf(val)
//         .from(val);
    
//     })
    
// }

//     downevent(downloadbtn,results);


function downevent(btn2, val) {
    btn2.addEventListener("click", () => {
        val.style.width = "100%";
        // finalesResume.style.height="180vh";
        // finalesResume.style.width = "100%";
        html2pdf(val, {
            // margin: 10,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        }).from(val);
    });
}

downevent(downloadbtn, finalesResume);
// ---------------------------output fetched-------------------------//
let newtemp = document.querySelector(".outputTypTwo");
newtemp.style.display = "none";
let txt = document.querySelector(".name");
// -----------------------for heading-------------------------------//
headcolor.addEventListener("input",(e)=>{
    document.querySelector(".header").style.backgroundColor=`${e.target.value}`;
});
// -----------------------name in heading------------------//
names.addEventListener("input", (e)=>{
    // console.log(e.target);
    txt.textContent = `${e.target.value}`;
    document.querySelector(".name2").textContent=`${e.target.value}`;
})
// -------------------name color --------------------------//--------------its not working------------------//
txtColor.addEventListener("input", (e)=>{
    // console.log(e.target);
    txt.style.color=`${e.target.value}`;
    document.querySelector(".titl").style.color=`${e.target.value}`;
})
// const skillsName = document.getElementById("skillNm");
// const skillContainer = document.querySelector(".skill");

// let idx=0;

// skillsName.addEventListener("input", (e)=>{
//     console.log(e.target.value[e.target.value.length-1]);
//     // let skilnm=document.querySelector(".skill");
//     let nms = document.createElement("p");
//     if(e.target.value[e.target.value.length-1] == ","){
//         // console.log(e.target.value.slice())
//         idx = e.target.value.length-1;
//        nms.innerText=`${e.target.value}`;
//        skillContainer.append(nms);
//     }else if(e.key==="Backspace"){
//         skilnm.removeChild(nms);
//         // if(e.target.value.length>0){
//         //     e.target.value.slice(0,e.target.value.length);
//         // }
//     }
//     // else{
//     //     nms.textContent=`${e.target.value}`;
//     //     skilnm.append(nms);
//     // }
// })

// const skillsName = document.getElementById("skillNm");
// const skillContainer = document.querySelector(".skill");

// skillsName.addEventListener("input", (e) => {
//     if (e.inputType === "insertText" && e.data === ",") {
//         // Input is a comma, create a new element
//         let skillItem = document.createElement("p");
//         skillItem.textContent = skillsName.value.trim(); 
//         skillContainer.appendChild(skillItem);
//         skillsName.value = ""; 
//     } else if (e.inputType === "deleteContentBackward") {
//         // Backspace pressed, remove the last character
//         let inputValue = skillsName.value;
//         if (inputValue.length > 0) {
//             // Remove the last character
//             skillsName.value = inputValue.slice(0, -1);
//         } else {
//             // If the input is empty, remove the last skill
//             let lastSkill = skillContainer.lastChild;
//             if (lastSkill) {
//                 skillContainer.removeChild(lastSkill);
//             }
//         }
//     }
// });

emails.addEventListener("input", (e)=>{
    document.querySelector(".p2").textContent=`${e.target.value}`;
    document.querySelector(".envel").textContent=`${e.target.value}`;
})
nums.addEventListener("input", (e)=>{
    document.querySelector(".p1").textContent=`${e.target.value}`;
    document.querySelector(".phon").textContent=`${e.target.value}`;
})
contry.addEventListener("input", (e)=>{
    document.querySelector(".p3").textContent=`${e.target.value}`;
    document.querySelector(".locat").textContent=`${e.target.value}`;
})

forjob.addEventListener("input", (e)=>{
    document.querySelector(".titl").textContent=`${e.target.value}`;
    document.querySelector(".titl2").textContent=`${e.target.value}`;
})

obj.addEventListener("input", (e)=>{
    document.querySelector(".sumry").innerHTML=`<li>${e.target.value}</li>`;
    document.querySelector(".summry").innerHTML=`<li>${e.target.value}</li>`;
})

// ---------------------------------resume template changes -------------------------------------//

let x="true";
resumeTypes.addEventListener("change",(e)=>{
    if(x==="true"){
        finalesResume.style.display="none";
        newtemp.style.display = "flex";
        x="false";
    }
    else{
        finalesResume.style.display="flex";
        newtemp.style.display = "none";
        x="true";
    }
})
// ---------------creating funtion for append the employement details----------------------//

function createProfesionaldtl(dateStart,dateEnd,JobTitles,Employer,Descriptions){
    // console.log(dateStart,dateEnd,JobTitles,Employer,Descriptions);
    
}

// -------------------------------  Employe btn pe dtls form create -------------------------//


Empbtn.addEventListener("click",(e)=>{

    e.preventDefault();
    let newform = document.createElement("div");
    newform.classList.add("empdtls");
    newform.innerHTML=`<lable>Start</lable>
    <input type="month" placeholder="------" class="dateSt">
    <lable>End</lable>
    <input type="month" placeholder="------" class="dateEn">
    <input type="text" placeholder="Job Title" class="JbTitl">
    <input type="text" placeholder="Employer" class="Empnm">
    <textarea name="" placeholder="Descriptions..." id="DescripDtl"  class="obj" maxlength="100"></textarea>
    `;
    Employ.appendChild(newform);
    let dateStart= newform.querySelector(".dateSt");
    let dateEnd= newform.querySelector(".dateEn");
    let JobTitles= newform.querySelector(".JbTitl");
    let Employer = newform.querySelector(".Empnm");
    let Descriptions = newform.querySelector("#DescripDtl");

    createProfesionaldtl(dateStart,dateEnd,JobTitles,Employer,Descriptions);


})

// -------------------Project btn pe dtls form create -------------------------//

projBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let ProjForm = document.createElement("div");
    ProjForm.classList.add("allProj")
    ProjForm.innerHTML=`<lable>Start</lable>
    <input type="month" placeholder="------">
    <lable>End</lable>
    <input type="month" placeholder="------">
    <input type="text" placeholder="Project Title">
    <textarea name="" placeholder="Description" id=""  class="obj" maxlength="100"></textarea>
    `;

    ProjectDetails.appendChild(ProjForm);
})




