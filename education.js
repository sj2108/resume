import {createNewElementRight,setDate,TOPIC,createID} from "./index.js";

export let educationList=[];
let degreeName = document.getElementById("degree-name");
let specializationEdu = document.getElementById("specialization");
let collegeName = document.getElementById("college-name");
let dateFromEdu = document.getElementById("date-from-edu");
let dateToEdu = document.getElementById("date-to-edu");
let courseCgpa = document.getElementById("cgpa");
export let educationButton = document.getElementById("submit-education");
export let cancelEducationButton = document.getElementById("cancel-education");
export let confirmEducationButton = document.getElementById("confirm-education");
export let editEducationButton = document.getElementById(
    "edit-education-button"
);
export let addEducationButton = document.getElementById("add-education-button");
export let editInsideEducationButton = document.getElementById(
    "education-information"
);


export function assignEducationValue(completeEducationData){
    if(completeEducationData){
        educationList = completeEducationData;
        for (const element in completeEducationData) {
            console.log(completeEducationData.dateFrom);
            let dates = setDate(
                completeEducationData[element].dateFrom,
                completeEducationData[element].dateTo
            );
            let insideHTML = getEducationData(
                completeEducationData[element],
                dates
            );
            let rightID = "right-" + completeEducationData[element].id;
            createNewElementRight(
                TOPIC.EDUCATION,
                rightID,
                insideHTML,
                completeEducationData[element]
            );
        }
    }
}

export function confirmEducation(parent_Div, eduIndex)
{
    educationList.splice(eduIndex, 1);
    localStorage.setItem("educationList", JSON.stringify(educationList));
    parent_Div.remove();
    submitEducation();
    document
        .getElementsByClassName(TOPIC.EDUCATION + "-form")[0]
        .classList.add("sub-form");
    let insideButton = document.getElementsByClassName(
        "inside-education-class"
    );
    for (let i = 0; i < insideButton.length; i++)
        insideButton[i].style.display = "none";
    let makeHeadingButtonInvisible =
        document.getElementsByClassName("topic-button");
    for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
        makeHeadingButtonInvisible[i].style.display = "block";
}
export function cancelEducation()
{
    
    reinitializeEducation();
    let insideButton = document.getElementsByClassName(
        "inside-education-class"
    );
    for (let i = 0; i < insideButton.length; i++)
        insideButton[i].style.display = "none";
    let makeHeadingButtonInvisible =
        document.getElementsByClassName("topic-button");
    for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
        makeHeadingButtonInvisible[i].style.display = "block";
    // index.changeButtons(true, index.TOPIC.EDUCATION);
    document
        .getElementsByClassName(TOPIC.EDUCATION + "-form")[0]
        .classList.add("sub-form");
   
}
export function deleteEducation(elementArrayId){
// educationList=index.completeEducationData;
educationList = educationList.filter((l) => l.id != elementArrayId);
localStorage.setItem("educationList", JSON.stringify(educationList));
let insideButton = document.getElementsByClassName("inside-education-class");
for (let i = 0; i < insideButton.length; i++)
    insideButton[i].style.display = "none";
let makeHeadingButtonInvisible =
    document.getElementsByClassName("topic-button");
for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
    makeHeadingButtonInvisible[i].style.display = "block";

console.log(educationList);
}

export let reassignEducationForEdit = (educationArray) => {
    degreeName.value = educationArray.degree;
    specializationEdu.value = educationArray.specialization;
    collegeName.value = educationArray.college;
    dateFromEdu.value = educationArray.dateFrom;
    dateToEdu.value = educationArray.dateTo;
    courseCgpa.value = educationArray.cgpa;
};
// Reset Education form
export function reinitializeEducation() {
    degreeName.value = "";
    specializationEdu.value = "";
    collegeName.value = "";
    dateFromEdu.value = "";
    dateToEdu.value = "";
    courseCgpa.value = "";
}

export function getEducationData(education_element, dates) {
    return `
                <div class="change-inside-education">
                <h4 class="degree">${education_element.degree} in ${education_element.specialization} </h4>
                <div class="edit-icons">
                <div class="inside-education-class" id="edit-inside-education-button"><i class="fa-solid fa-pen-to-square edit-image"></i></div>
                <div class="inside-education-class" id="remove-inside-education-button"><i class="fa-solid fa-trash edit-image"></i></div>
                </div>
                </div>
                <h4>${education_element.college} </h4>
                <div class="date-place">
                    <div class="date">${dates[0]}-${dates[1]} - ${dates[2]}-${dates[3]}</div>
                    <div class="place">CGPA- ${education_element.cgpa}</div>
                </div>
                <br>
                `;
}


export let submitEducation = () => {
    const topic = TOPIC.EDUCATION;
    let ID = createID(topic);
    let leftID = "left-" + ID;
    let rightID = "right-" + ID;
    let educationElement = {
        degree: degreeName.value,
        specialization: specializationEdu.value,
        college: collegeName.value,
        dateFrom: dateFromEdu.value,
        dateTo: dateToEdu.value,
        cgpa: courseCgpa.value,
        id: ID,
    };

    let dates = setDate(dateFromEdu.value, dateToEdu.value);
    let insideHTML = getEducationData(educationElement, dates);
    createNewElementRight(topic, rightID, insideHTML, educationElement);
    educationList.push(educationElement);
    localStorage.setItem("educationList", JSON.stringify(educationList));
    console.log(educationList);
    reinitializeEducation();
    document
        .getElementsByClassName(TOPIC.EDUCATION + "-form")[0]
        .classList.add("sub-form");
    let insideButton = document.getElementsByClassName(
        "inside-education-class"
    );
    for (let i = 0; i < insideButton.length; i++)
        insideButton[i].style.display = "none";
    let makeHeadingButtonInvisible =
        document.getElementsByClassName("topic-button");
    for (let i = 0; i < makeHeadingButtonInvisible.length; i++)
        makeHeadingButtonInvisible[i].style.display = "block";
};