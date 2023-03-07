import * as index from "./index.js"
export let skillList = [];
let skillName = document.getElementById("skill-name");
let skillPercentage = document.getElementById("skill-percentage");
export let skillButton = document.getElementById("submit-skills");



export function assignSkillsValue(completeSkillsData) {
    if (completeSkillsData) {
        skillList = completeSkillsData;
        console.log(skillList);
        for (const element in completeSkillsData) {
            // console.log(completeSkillsData.dateFrom);
            
            
            let rightID = "right-" + completeSkillsData[element].id;
            let leftID = "left-" + completeSkillsData[element].id;
            let insideHTML = getSkillsData(rightID,completeSkillsData[element].skill);
            index.createNewElementRight(
                index.TOPIC.SKILL,
                rightID,
                insideHTML,
                completeSkillsData[element]
            );
            index.createNewElementLeft(
                index.TOPIC.SKILL,
                leftID,
                completeSkillsData[element].skill
            );
        }
    }
}

// Reset Skills form
function reinitializeSkills() {
    skillName.value = "";
    skillPercentage.value = "";
}
function getSkillsData(rightID, text) {
    return `<div class='border-element' id= 
            ${rightID} 
            ><div class='inside-skills-container'><h4>
            ${text} 
            </h4> </div></div>`;
}

export function deleteSkill(elementArrayId){
skillList=index.completeSkillsData;
skillList = skillList.filter((l) => l.id != elementArrayId);
localStorage.setItem("skillList", JSON.stringify(skillList));

console.log(skillList);
}

export const submitSkills = () => {
    const topic = "skills";
    let ID = index.createID(topic);
    let leftID = "left-" + ID;
    let rightID = "right-" + ID;
    let skill_element = {
        skill: skillName.value,
        percentage: skillPercentage.value,
        id: ID,
    };
    skillList.push(skill_element);
    localStorage.setItem("skillList", JSON.stringify(skillList));
    let insideHTML = getSkillsData(rightID, skill_element.skill);
    index.createNewElementRight(topic, rightID, insideHTML, skill_element);
    index.createNewElementLeft(topic, leftID, skill_element.skill);
    
    reinitializeSkills();
};
