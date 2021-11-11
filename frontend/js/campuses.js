//import { campusesJson} from "./campusesJson.js";
import { displayCampusView } from "./campus.js";
import {clearChildren} from "./app.js"
function displayCampusesView(containerEl,campusesJson) {
    const headerEl = document.createElement("header");
    headerEl.classList.add("main-header");

    const h1El = document.createElement("h1");
    h1El.classList.add("main-header");
    h1El.innerText = "We Can Code IT Campus Libraries";

    const mainEl = document.createElement("main");
    mainEl.classList.add("main-content");

    const sectionEl = document.createElement("section");
    sectionEl.classList.add("campus-list");


    headerEl.appendChild(h1El);
    mainEl.appendChild(sectionEl);

    containerEl.appendChild(headerEl);
    containerEl.appendChild(mainEl);

    campusesJson.forEach(campus => {
        const divEl = document.createElement("div");
        divEl.classList.add("campus");
        const campusLocationEl = document.createElement("h2");
        const campusTechStackEl = document.createElement("h3");
        campusLocationEl.innerText = campus.location;
        campusTechStackEl.innerText = campus.techStack;

        divEl.appendChild(campusLocationEl);
        divEl.appendChild(campusTechStackEl);

        sectionEl.appendChild(divEl);

        campusLocationEl.addEventListener("click", () => {
            clearChildren(mainEl);
            displayCampusView(mainEl,campus);
        });
    });
}
export {displayCampusesView};