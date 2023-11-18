document.addEventListener("DOMContentLoaded", function () {
    const twoColumnsTemplate = document.querySelector('.outputTypOne');
    const minimalistTemplate = document.querySelector('.outputTypTwo');
    let finalesResume = document.querySelector(".main");
    let newtemp = document.querySelector(".mainright");
    let empBtn = document.querySelector(".Buildbtn");
    let projBtn = document.querySelector(".addProj");
    let educateBtn = document.querySelector(".addeducate");
    let projectDetails = [];
    let employmentDetails = [];
    let educationDetails = [];
    minimalistTemplate.style.display = "none";
    resumeTypes.addEventListener("change", function (e) {
        const selectedValue = e.target.value;
        if (selectedValue === "TwoColumns") {
            twoColumnsTemplate.style.display = "block";
            minimalistTemplate.style.display = "none";
        } else if (selectedValue === "Minimalist") {
            twoColumnsTemplate.style.display = "none";
            minimalistTemplate.style.display = "block";
        }
    });


    let downloadbtn = document.querySelector(".download");
    downloadbtn.addEventListener("click", function () {
        const twoColumnsTemplate = document.querySelector('.outputTypOne');
        const minimalistTemplate = document.querySelector('.outputTypTwo');

        let val;
        if (resumeTypes.value === "TwoColumns") {
            val = twoColumnsTemplate;
        } else if (resumeTypes.value === "Minimalist") {
            val = minimalistTemplate;
        }

        if (val) {
            val.style.width = "100%";
            val.style.height = "100%";
            html2pdf(val, {
                filename: 'resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            }).from(val);
        }
    });

    const skillsName = document.getElementById("skillNm");
    let skillContainer = document.querySelector(".skill");
    let skillcontainernxt = document.querySelector(".skille");
    let idx = 0;

    skillsName.addEventListener("input", function (e) {
        let nms = document.createElement("p");
        nms.classList.add("Skillnm");
        if (e.target.value[e.target.value.length - 1] == "," && e.data != null) {
            let idx2 = e.target.value.length - 1;
            nms.innerText = `${e.target.value.slice(idx, idx2)}`;
            var clone = nms.cloneNode(true);
            skillContainer.appendChild(nms);
            skillcontainernxt.appendChild(clone);
            idx = idx2 + 1;
        }
        if ((e.data == null && e.target.value[e.target.value.length - 1] == ",") || e.target.value == "") {
            let AllSkills = document.querySelectorAll(".Skillnm");
            skillContainer.removeChild(AllSkills[AllSkills.length - 1]);
            skillcontainernxt.removeChild(AllSkills[AllSkills.length - 1]);
            if (e.target.value.length > 0) {
                e.target.value.slice(0, e.target.value.length);
            }
        }
    });

    let headcolor = document.getElementById("headrcolor");
    let txtColor = document.getElementById("hdtxtcolor");
    let backcolor = document.getElementById("backcolor");

    headcolor.addEventListener("input", function (e) {
        document.querySelector(".header").style.backgroundColor = `${e.target.value}`;
    });

    txtColor.addEventListener("input", function (e) {
        document.querySelector(".name").style.color = `${e.target.value}`;
        document.querySelector(".titl").style.color = `${e.target.value}`;
    });

    backcolor.addEventListener("input", function (e) {
        document.querySelector(".outputleft").style.backgroundColor = `${e.target.value}`;
    });

    let names = document.querySelector(".nm");
    let emails = document.querySelector(".email");
    let nums = document.querySelector(".num");
    let contry = document.querySelector(".cont");

    names.addEventListener("input", function (e) {
        document.querySelector(".name").textContent = `${e.target.value}`;
        document.querySelector(".name2").textContent = `${e.target.value}`;
    });

    emails.addEventListener("input", function (e) {
        document.querySelector(".p2").textContent = `${e.target.value}`;
        document.querySelector(".envel").textContent = `${e.target.value}`;
    });

    nums.addEventListener("input", function (e) {
        document.querySelector(".p1").textContent = `${e.target.value}`;
        document.querySelector(".phon").textContent = `${e.target.value}`;
    });

    contry.addEventListener("input", function (e) {
        document.querySelector(".p3").textContent = `${e.target.value}`;
        document.querySelector(".locat").textContent = `${e.target.value}`;
    });

    let forjob = document.querySelector("#titl");
    let obj = document.querySelector(".obj");

    forjob.addEventListener("input", function (e) {
        document.querySelector(".titl").textContent = `${e.target.value}`;
        document.querySelector(".titl2").textContent = `${e.target.value}`;
    });

    obj.addEventListener("input", function (e) {
        document.querySelector(".sumry").innerHTML = `<li>${e.target.value}</li>`;
        document.querySelector(".summry").innerHTML = `<li>${e.target.value}</li>`;
    });

    let counter = 0;

    function openEmploymentForm() {
        counter++; // Increment counter for unique identification
        const Employ = document.getElementById("Employ");
        let newform = document.createElement("div");
        newform.classList.add("empdtls");
        newform.dataset.id = counter; // Assign a unique data-id to the form
        newform.innerHTML = `
            <label>Start</label>
            <input type="month" placeholder="------" id="dateSt${counter}" class="dateSt">
            <label>End</label>
            <input type="month" placeholder="------" id="dateEn${counter}" class="dateEn">
            <input type="text" placeholder="Job Title" id="JbTitl${counter}" class="JbTitl">
            <input type="text" placeholder="Employer" id="Empnm${counter}" class="Empnm">
            <textarea name="" placeholder="Descriptions..." id="DescripDtl${counter}" class="obj" maxlength="100"></textarea>
        `;
        Employ.appendChild(newform);

        newform.querySelector(`#dateSt${counter}`).addEventListener('input', function () {
            updateEmploymentOutput(counter);
        });
        newform.querySelector(`#dateEn${counter}`).addEventListener('input', function () {
            updateEmploymentOutput(counter);
        });
        newform.querySelector(`#JbTitl${counter}`).addEventListener('input', function () {
            updateEmploymentOutput(counter);
        });
        newform.querySelector(`#Empnm${counter}`).addEventListener('input', function () {
            updateEmploymentOutput(counter);
        });
        newform.querySelector(`#DescripDtl${counter}`).addEventListener('input', function () {
            updateEmploymentOutput(counter);
        });
    }

    function openProjectForm() {
        counter++; // Increment counter for unique identification
        const Employ = document.getElementById("Employ");
        let newform = document.createElement("div");
        newform.classList.add("empdtls");
        newform.dataset.id = counter; // Assign a unique data-id to the form
        newform.innerHTML = `
            <label>Start</label>
            <input type="month" placeholder="------" id="projDateSt${counter}" class="dateSt">
            <label>End</label>
            <input type="month" placeholder="------" id="projDateEn${counter}" class="dateEn">
            <input type="text" placeholder="Job Title" id="projJbTitl${counter}" class="JbTitl">
            <input type="text" placeholder="Employer" id="projEmpnm${counter}" class="Empnm">
            <textarea name="" placeholder="Descriptions..." id="projDescripDtl${counter}" class="obj" maxlength="100"></textarea>
        `;
        Employ.appendChild(newform);

        newform.querySelector(`#projDateSt${counter}`).addEventListener('input', function () {
            updateProjectOutput(counter);
        });
        newform.querySelector(`#projDateEn${counter}`).addEventListener('input', function () {
            updateProjectOutput(counter);
        });
        newform.querySelector(`#projJbTitl${counter}`).addEventListener('input', function () {
            updateProjectOutput(counter);
        });
        newform.querySelector(`#projEmpnm${counter}`).addEventListener('input', function () {
            updateProjectOutput(counter);
        });
        newform.querySelector(`#projDescripDtl${counter}`).addEventListener('input', function () {
            updateProjectOutput(counter);
        });
    }

    function openEducationForm() {
        counter++; // Increment counter for unique identification
        const Employ = document.getElementById("Employ");
        let newform = document.createElement("div");
        newform.classList.add("empdtls");
        newform.dataset.id = counter; // Assign a unique data-id to the form
        newform.innerHTML = `
            <input type="text" placeholder="Institution" id="eduInstitution${counter}" class="eduInstitution">
            <input type="text" placeholder="Degree" id="eduDegree${counter}" class="eduDegree">
            <input type="text" placeholder="Graduation Year" id="eduGradYear${counter}" class="eduGradYear">
        `;
        Employ.appendChild(newform);

        newform.querySelector(`#eduInstitution${counter}`).addEventListener('input', function () {
            updateEducationOutput(counter);
        });
        newform.querySelector(`#eduDegree${counter}`).addEventListener('input', function () {
            updateEducationOutput(counter);
        });
        newform.querySelector(`#eduGradYear${counter}`).addEventListener('input', function () {
            updateEducationOutput(counter);
        });
    }

    function updateEmploymentOutput() {
        const experienceElement = document.querySelector('.experiance');
        const experienceElement2 = document.querySelector('.experiancc');
        experienceElement.innerHTML = ''; // Clear existing content
        experienceElement2.innerHTML = ''; // Clear existing content

        // Append captured employment details to the output template
        employmentDetails = Array.from(document.querySelectorAll('.empdtls')).map((form, index) => ({
            position: document.getElementById(`JbTitl${form.dataset.id}`)?.value || "",
            employer: document.getElementById(`Empnm${form.dataset.id}`)?.value || "",
            duration: `${document.getElementById(`dateSt${form.dataset.id}`)?.value || ""} - ${document.getElementById(`dateEn${form.dataset.id}`)?.value || ""}`,
            description: document.getElementById(`DescripDtl${form.dataset.id}`)?.value || "",
        }));

        employmentDetails.forEach((employment) => {
            // Append to the relevant output elements
            experienceElement.innerHTML += `
                <div class="employment-item">
                    <h4>${employment.position}</h4>
                    <p>${employment.employer}</p>
                    <p>${employment.duration}</p>
                    <p>${employment.description}</p>
                </div>
            `;
        });

        employmentDetails.forEach((employment) => {
            // Append to the relevant output elements
            experienceElement2.innerHTML += `
                <div class="employment-item">
                    <h4>${employment.position}</h4>
                    <p>${employment.employer}</p>
                    <p>${employment.duration}</p>
                    <p>${employment.description}</p>
                </div>
            `;
        });
    }

    function updateProjectOutput(formId) {
        const projectsElement = document.querySelector('.ProjectsDetails');
        const projectsElement2 = document.querySelector('.ProjectsDetails2');
        projectsElement.innerHTML = ''; // Clear existing content
        projectsElement2.innerHTML = ''; // Clear existing content

        // Append captured project details to the output template
        projectDetails = Array.from(document.querySelectorAll('.empdtls')).map((form, index) => ({
            jobTitle: document.getElementById(`projJbTitl${form.dataset.id}`)?.value || "",
            employer: document.getElementById(`projEmpnm${form.dataset.id}`)?.value || "",
            startDate: document.getElementById(`projDateSt${form.dataset.id}`)?.value || "",
            endDate: document.getElementById(`projDateEn${form.dataset.id}`)?.value || "",
            description: document.getElementById(`projDescripDtl${form.dataset.id}`)?.value || "",
        }));

        projectDetails.forEach((project) => {
            // Append to the relevant output elements
            projectsElement.innerHTML += `
                <div class="project-item">
                    <h4>${project.jobTitle}</h4>
                    <p>${project.employer}</p>
                    <p>${project.startDate} - ${project.endDate}</p>
                    <p>${project.description}</p>
                </div>
            `;
        });

        projectDetails.forEach((project) => {
            // Append to the relevant output elements
            projectsElement2.innerHTML += `
                <div class="project-item">
                    <h4>${project.jobTitle}</h4>
                    <p>${project.employer}</p>
                    <p>${project.startDate} - ${project.endDate}</p>
                    <p>${project.description}</p>
                </div>
            `;
        });
    }

    function updateEducationOutput(formId) {
        const educationElement = document.querySelector('.Qualifications');
        const educationElement2 = document.querySelector('.Qualifications2');
        educationElement.innerHTML = ''; // Clear existing content
        educationElement2.innerHTML = ''; // Clear existing content

        // Append captured education details to the output template
        educationDetails = Array.from(document.querySelectorAll('.empdtls')).map((form, index) => ({
            institution: document.getElementById(`eduInstitution${form.dataset.id}`)?.value || "",
            degree: document.getElementById(`eduDegree${form.dataset.id}`)?.value || "",
            graduationYear: document.getElementById(`eduGradYear${form.dataset.id}`)?.value || "",
        }));

        educationDetails.forEach((education) => {
            // Append to the relevant output elements
            educationElement.innerHTML += `
                <div class="education-item">
                    <h4>${education.degree}</h4>
                    <p>${education.institution}</p>
                    <p>${education.graduationYear}</p>
                </div>
            `;
        });

        educationDetails.forEach((education) => {
            // Append to the relevant output elements
            educationElement2.innerHTML += `
                <div class="education-item">
                    <h4>${education.degree}</h4>
                    <p>${education.institution}</p>
                    <p>${education.graduationYear}</p>
                </div>
            `;
        });
    }

    document.querySelector(".addEmp").addEventListener("click", openEmploymentForm);
    document.querySelector(".addProj").addEventListener("click", openProjectForm);
    document.querySelector(".addeducate").addEventListener("click", openEducationForm);

    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
            updateEmploymentOutput(); // Update output after deleting an employment item
        }

        if (e.target.classList.contains("deleteProj")) {
            e.target.parentElement.remove();
            updateProjectOutput(); // Update output after deleting a project item
        }

        if (e.target.classList.contains("deleteEduc")) {
            e.target.parentElement.remove();
            updateEducationOutput(); // Update output after deleting an education item
        }
    });
});
