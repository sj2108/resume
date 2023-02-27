import * as index from "./index.js";

export let contactList = [];
let linkedinLink = document.getElementById("linkedin");
let mailLink = document.getElementById("mail");
let phoneLink = document.getElementById("phone");
let placeLink = document.getElementById("place");
let twitterLink = document.getElementById("twitter");
export let buttonLink = document.getElementById("submit-contact-info");


// Reset Contact Information form
function reinitializeContactInfo() {
    linkedinLink.value = "";
    mailLink.value = "";
    phoneLink.value = "";
    placeLink.value = "";
    twitterLink.value = "";
}

// Addding Linkedin link
function addLinkedin(parentDiv, user_linkedin) {
    if (user_linkedin != "") {
        parentDiv[0].innerHTML =
            "<div class='align-icon'><i class='fa-brands fa-linkedin icons'></i></div><div class='icon-text'><a href=" +
            user_linkedin +
            " target='_blank' class='iconic'>" +
            user_linkedin +
            "</a></div>";
    }
}
// Adding Email ID
function addEmail(parentDiv, user_email) {
    if (user_email != "") {
        parentDiv[1].innerHTML =
            "<div class='align-icon'><i class='fa-solid fa-envelope icons'></i></div><div class='icon-text'><a href='mailto: " +
            user_email +
            " target='_blank' class='iconic'>" +
            user_email +
            "</a></div>";
    }
}
// Adding Phone Number
function addPhone(parentDiv, user_phone) {
    if (user_phone != "") {
        parentDiv[2].innerHTML =
            "<div class='align-icon'><i class='fa-solid fa-mobile icons'></i></div><div class='icon-text'><a href='tel:+" +
            user_phone +
            " target='_blank' class='iconic'>" +
            user_phone +
            "</a></div>";
    }
}

// Adding Location
function addPlace(parentDiv, user_place) {
    if (user_place != "") {
        parentDiv[3].innerHTML =
            "<div class='align-icon'><i class='fa-solid fa-location-dot icons'></i></div><div class='icon-text'><a href='' target='_blank' class='iconic'>" +
            user_place +
            "</a></div>";
    }
}

// Adding Twitter link
function addTwitter(parentDiv, user_twitter) {
    if (user_twitter != "") {
        let userName_twitter = user_twitter.split("/")[3];
        parentDiv[4].innerHTML =
            "<div class='align-icon'><i class='fa-brands fa-square-twitter icons'></i></div><div class='icon-text'><a href=" +
            user_twitter +
            " target='_blank' class='iconic'>" +
            userName_twitter +
            "</a></div>";
    }
}

export let submitContactInfo = () => {
    let userLinkedin = linkedinLink.value;
    let userEmail = mailLink.value;
    let userPhone = phoneLink.value;
    let userPlace = placeLink.value;
    let userTwitter = twitterLink.value;
    let contactElement = {
        linkedin: userLinkedin,
        email: userEmail,
        phone: userPhone,
        place: userPlace,
        twitter: userTwitter,
    };
    contactList.push(contactElement);
    console.log(contactList);
    let parentDiv = document.getElementsByClassName("link-icon");
    addLinkedin(parentDiv, userLinkedin);
    addEmail(parentDiv, userEmail);
    addPhone(parentDiv, userPhone);
    addPlace(parentDiv, userPlace);
    addTwitter(parentDiv, userTwitter);
    reinitializeContactInfo();
};