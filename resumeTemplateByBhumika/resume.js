let names = document.querySelector(".nm");
let obj = document.querySelector(".obj");
let results=document.querySelector(".outputcontainer");
let container= document.querySelector(".container2");
let headcolor = document.getElementById("headrcolor");
let txtColor = document.getElementById("hdtxtcolor");
let backcolor = document.getElementById("backcolor");
let emails= document.querySelector(".email");
let nums = document.querySelector(".num");
let contry = document.querySelector(".cont");
let forjob = document.querySelector("#titl");
let resumeTypes = document.querySelector("#resumeTpes");
let Employ = document.querySelector(".employments");
let Empbtn = document.querySelector(".addEmp");
let ProjectDetails = document.querySelector(".Projects");
let projBtn = document.querySelector(".addProj");
let EducationDetails = document.querySelector(".EducationDtls");
let EducatBtn = document.querySelector(".addeducate");
let experianceone =  document.querySelector(".experiance");
let experiancetwo = document.querySelector(".experiancc");
let ProjectAppendOne = document.querySelector(".ProjectsDetails");
let ProjectAppendTwo = document.querySelector(".ProjectsDetailes");
let QualificationsOne=document.querySelector(".Qualifications");
let QualificationsTwo=document.querySelector(".Qualificationes");

// -------------download proccess----------------------//
let finalesResume = document.querySelector(".outputTypOne");
let downloadbtn = document.querySelector(".download");


function downevent(btn2, val) {
    btn2.addEventListener("click", () => {
        val.style.width = "100%";
        val.style.height = "100%";
        html2pdf(val, {
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        }).from(val);
    });
}


//downevent(downloadbtn, finalesResume);



// ---------------------------output fetched-------------------------//
let newtemp = document.querySelector(".outputTypTwo");
newtemp.style.display = "none";
let txt = document.querySelector(".name");

// --------------------------add skills in resume-------------------------------//

const skillsName = document.getElementById("skillNm");
let skillContainer = document.querySelector(".skill");
let skillcontainernxt = document.querySelector(".skille");


let idx=0;
skillsName.addEventListener("input", (e)=>{
    let nms = document.createElement("p");
    nms.classList.add("Skillnm");
    if(e.target.value[e.target.value.length-1] == "," && e.data != null){
       let idx2 = e.target.value.length-1;
       nms.innerText=`${e.target.value.slice(idx,idx2)}`;
       var clone = nms.cloneNode(true);
       skillContainer.appendChild(nms);
       skillcontainernxt.appendChild(clone);
       idx=idx2+1;
    }
    if((e.data == null && e.target.value[e.target.value.length-1] == ",") || e.target.value=="" ){
        AllSkills = document.querySelectorAll(".Skillnm");
        skillContainer.removeChild(AllSkills[AllSkills.length-1]);
        skillcontainernxt.removeChild(AllSkills[AllSkills.length-1]);
        if(e.target.value.length>0){
            e.target.value.slice(0,e.target.value.length);
        }
    }
})

// -----------------------for heading-------------------------------//
headcolor.addEventListener("input",(e)=>{
    document.querySelector(".header").style.backgroundColor=`${e.target.value}`;
});
// -----------------------name in heading------------------//
names.addEventListener("input", (e)=>{
    txt.textContent = `${e.target.value}`;
    document.querySelector(".name2").textContent=`${e.target.value}`;
})
// -------------------name color --------------------------//
txtColor.addEventListener("input", (e)=>{
    txt.style.color=`${e.target.value}`;
    document.querySelector(".titl").style.color=`${e.target.value}`;
})
// ---------------------------------------- back color--------------------------//
backcolor.addEventListener("input", (e)=>{

    document.querySelector(".outputleft").style.backgroundColor=`${e.target.value}`;
})
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
        downevent(downloadbtn, newtemp );
    }
    else{
        finalesResume.style.display="flex";
        newtemp.style.display = "none";
        x="true";
        downevent(downloadbtn, finalesResume );
    }
})

let counter=0;
let count=0;
let countt=0;
// ---------------creating funtion for append the employement details in 1st template----------------------//
function createProfesionaldtlOne(dateStart,dateEnd,JobTitles,Employer,Descriptions){

    let expOne = document.createElement("div");
    expOne.classList.add("ProfessionalExpOne");
    expOne.innerHTML=`<div class="leftinfoOne" data-id="${counter}">
    <ul><li class="tiO${counter}"></li></ul>
    <p  class="empNamO${counter}"><p>
    <p  class="discO${counter}"><p>
    </div><div class="timing"><span  class="spO1${counter}">-Present</span><span  class="spO2${counter}"></span></div>`;
    
    let expTwo = document.createElement("div");
    expTwo.classList.add("ProfessionalExpTwo");
    expTwo.innerHTML=`<div class="leftinfoTwo" data-id="${counter}">
    <ul><li class="tiT${counter}"></li></ul>
    <p  class="empNamT${counter}"><p>
    <p  class="discT${counter}"><p>
    </div><div class="timing"><span  class="spT1${counter}">-Present</span><span  class="spT2${counter}"></span></div>`;
    
    
    
    
    dateStart.addEventListener("input", (e)=>{
        let varible= document.querySelector(".spO1"+`${counter}`);
        varible.textContent=`${e.target.value}`;
        document.querySelector(".spT1"+`${counter}`).textContent=`${e.target.value}`;
        
    })
    dateEnd.addEventListener("input", (e)=>{
        document.querySelector(`.spO2${counter}`).textContent=`${e.target.value}`;
        document.querySelector(`.spT2${counter}`).textContent=`${e.target.value}`;
    })
    JobTitles.addEventListener("input", (e)=>{
        document.querySelector(`.tiO${counter}`).textContent=`${e.target.value}`;
        document.querySelector(`.tiT${counter}`).textContent=`${e.target.value}`;
    })
    Employer.addEventListener("input", (e)=>{
        document.querySelector(`.empNamO${counter}`).textContent=`${e.target.value}`;
        document.querySelector(`.empNamT${counter}`).textContent=`${e.target.value}`;

    })
    Descriptions.addEventListener("input", (e)=>{
        document.querySelector(`.discO${counter}`).textContent=`Descrip:-${e.target.value}`;
        document.querySelector(`.discT${counter}`).textContent=`Descrip:-${e.target.value}`;
        
    })
    // var cloned = exp.cloneNode(true);
    experianceone.appendChild(expOne);
    experiancetwo.appendChild(expTwo);

    // createProfesionaldtlTwo(dateStart,dateEnd,JobTitles,Employer,Descriptions);
}

// -------------------------------  Employe btn pe details input create -------------------------//


Empbtn.addEventListener("click",(e)=>{
    counter++;
    console.log(counter);
    e.preventDefault();
    let newform = document.createElement("div");
    newform.classList.add("empdtls");
    newform.innerHTML=`<lable>Start</lable>
    <input type="month" placeholder="------" class="dateSt${counter}" >
    <lable>End</lable>
    <input type="month" placeholder="------" class="dateEn${counter}" >
    <input type="text" placeholder="Job Title" class="JbTitl${counter}" >
    <input type="text" placeholder="Employer" class="Empnm${counter}" >
    <textarea name="" placeholder="Descriptions..." class="DescripDtl${counter}" maxlength="100"></textarea>
    `;
    Employ.appendChild(newform);
    let dateStart= newform.querySelector(`.dateSt${counter}`);
    let dateEnd= newform.querySelector(`.dateEn${counter}`);
    let JobTitles= newform.querySelector(`.JbTitl${counter}`);
    let Employer = newform.querySelector(`.Empnm${counter}`);
    let Descriptions = newform.querySelector(`.DescripDtl${counter}`);
    // console.log(dateStart);
    createProfesionaldtlOne(dateStart,dateEnd,JobTitles,Employer,Descriptions);
    // counter++;
    // createProfesionaldtltwo(dateStart,dateEnd,JobTitles,Employer,Descriptions);

})

// ---------------------------------------creating funtion for append the Projrct details in template------------------------------------------------------//

function createProjectsDetaile(StartDate,EndDate,ProjDetle,DescriptionsProj){
    
    let ProjOne = document.createElement("div");
    ProjOne.classList.add("AddProjOne");
    ProjOne.innerHTML=`<div class="leftinfoOne" data-id="${count}">
    <ul><li  class="titlO${count}"></li></ul>
    <p  class="discriO${count}"><p>
    </div><div class="timing"><span  class="proO1${count}">-Present</span><span  class="proO2${count}"></span></div>`

    let ProjTwo = document.createElement("div");
    ProjTwo.classList.add("AddProjTwo");
    ProjTwo.innerHTML=`<div class="leftinfoTwo" data-id="${count}">
    <ul><li class="titlT${count}"></li></ul>
    <p class="discriT${count}"><p>
    </div><div class="timing"><span class="proT1${count}">-Present</span><span class="proT2${count}"></span></div>`

    StartDate.addEventListener("input", (e)=>{
        let varibles= document.querySelector(".proO1"+`${count}`);
        varibles.textContent=`${e.target.value}`;
        document.querySelector(".proT1"+`${count}`).textContent=`${e.target.value}`;
        
    })
    EndDate.addEventListener("input", (e)=>{
        document.querySelector(`.proO2${count}`).textContent=`${e.target.value}`;
        document.querySelector(`.proT2${count}`).textContent=`${e.target.value}`;
    })
    ProjDetle.addEventListener("input", (e)=>{
        document.querySelector(`.titlO${count}`).textContent=`${e.target.value}`;
        document.querySelector(`.titlT${count}`).textContent=`${e.target.value}`;
    })
    DescriptionsProj.addEventListener("input", (e)=>{
        document.querySelector(`.discriO${count}`).textContent=`Descrip:-${e.target.value}`;
        document.querySelector(`.discriT${count}`).textContent=`Descrip:-${e.target.value}`;
    })

    ProjectAppendOne.appendChild(ProjOne);
    ProjectAppendTwo.appendChild(ProjTwo);
}

// -------------------Project btn pe details inputs create

projBtn.addEventListener("click", (e)=>{
    count++;
    e.preventDefault();
    let ProjForm = document.createElement("div");
    ProjForm.classList.add("allProj")
    ProjForm.innerHTML=`<lable>Start</lable>
    <input type="month" placeholder="------" id="stDate${count}" >
    <lable>End</lable>
    <input type="month" placeholder="------" id="enDate${count}">
    <input type="text" placeholder="Project Title" id="ProjDtl${count}">
    <textarea name="" placeholder="Description" id="DescripProj${count}"  class="obj" maxlength="100"></textarea>
    `;

    ProjectDetails.appendChild(ProjForm);
    let StartDate= ProjForm.querySelector(`#stDate${count}`);
    let EndDate= ProjForm.querySelector(`#enDate${count}`);
    let ProjDetle= ProjForm.querySelector(`#ProjDtl${count}`);
    let DescriptionsProj = ProjForm.querySelector(`#DescripProj${count}`);

    createProjectsDetaile(StartDate,EndDate,ProjDetle,DescriptionsProj);
})

// --------------------------------------------------------------------------//
function createEducationDetails(StartD,EndD,Degree,institute,InstituteDesc){
    let QualiOne = document.createElement("div");
    QualiOne.classList.add("QualificateDtlOne");
    QualiOne.innerHTML=`<div class="leftinfoOne" data-id="${countt}">
    <ul><li  class="qaliO${countt}"></li></ul>
    <p  class="ensNamO${countt}"><p>
    <p  class="disccO${countt}"><p>
    </div><div class="timing"><span class="QualiO1${countt}">-Present</span><span class="QualiO2${countt}"></span></div>`;

    let QualiTwo = document.createElement("div");
    QualiTwo.classList.add("QualificateDtlTwo");
    QualiTwo.innerHTML=`<div class="leftinfoTwo" data-id="${countt}">
    <ul><li  class="qaliT${countt}"></li></ul>
    <p class="ensNam${countt}"><p>
    <p class="discc${countt}"><p>
    </div><div class="timing"><span class="QualiT1${countt}">-Present</span><span class="QualiT2${countt}"></span></div>`;


    StartD.addEventListener("input", (e)=>{
        document.querySelector(".QualiO1"+`${countt}`).textContent=`${e.target.value}`;
        document.querySelector(".QualiT1"+`${countt}`).textContent=`${e.target.value}`;
        
    })
    EndD.addEventListener("input", (e)=>{
        document.querySelector(`.QualiO2${countt}`).textContent=`${e.target.value}`;
        document.querySelector(`.QualiT2${countt}`).textContent=`${e.target.value}`;
    })
    Degree.addEventListener("input", (e)=>{
        document.querySelector(`.qaliO${countt}`).textContent=`${e.target.value}`;
        document.querySelector(`.qaliT${countt}`).textContent=`${e.target.value}`;

    })
    institute.addEventListener("input", (e)=>{
        document.querySelector(`.ensNamO${countt}`).textContent=`${e.target.value}`;
        document.querySelector(`.ensNamT${countt}`).textContent=`${e.target.value}`;

    })
    InstituteDesc.addEventListener("input", (e)=>{
        document.querySelector(`.disccO${countt}`).textContent=`Descrip:-${e.target.value}`;
        document.querySelector(`.disccT${countt}`).textContent=`Descrip:-${e.target.value}`;
    })
    
    QualificationsOne.appendChild(QualiOne);
    QualificationsTwo.appendChild(QualiTwo);

}
// Education btn pe educationdetails input create

EducatBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    countt++;
    let EduForm = document.createElement("div");
    EduForm.classList.add("allProj")
    EduForm.innerHTML=`<lable>Start</lable>
    <input type="month" placeholder="------" id="StartD${countt}">
    <lable>End</lable>
    <input type="month" placeholder="------" id="EndD${countt}">
    <input type="text" placeholder="Qualification" id="Qualif${countt}">
    <input type="text" placeholder="School/College" id="InstiName${countt}">
    <textarea name="" placeholder="Description" id="decribe${countt}"  class="obj" maxlength="100"></textarea>
    `;

    EducationDetails.appendChild(EduForm);
    let StartD = EduForm.querySelector(`#StartD${countt}`);
    let EndD= EduForm.querySelector(`#EndD${countt}`);
    let Degree= EduForm.querySelector(`#Qualif${countt}`);
    let institute = EduForm.querySelector(`#InstiName${countt}`);
    let InstituteDesc = EduForm.querySelector(`#decribe${countt}`);
    
    createEducationDetails(StartD,EndD,Degree,institute,InstituteDesc);
})




