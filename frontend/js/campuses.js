//import { campusesJson} from "./campusesJson.js";
import {
    displayCampusView
} from "./campus.js";
import {
    clearChildren
} from "./app.js"

function displayCampusesView(mainEl, campusesJson) {






    const sectionEl = document.createElement("section");
    sectionEl.classList.add("campus-list");
    mainEl.appendChild(sectionEl);




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
            displayCampusView(mainEl, campus, campusesJson);
        });
    });
    // const hrEL = document.createElement("hr");
    // mainEl.appendChild(hrEL);

    const newCampusDiv = document.createElement("div");
    const newCampusLocation = document.createElement("input");
    newCampusLocation.type = "text";
    newCampusLocation.placeholder = "Enter Campus Location"

    const newTechStack = document.createElement("input");
    newTechStack.type = "text";
    newTechStack.placeholder = "Enter Tech Stack";

    const submitNewCampus = document.createElement("button");
    submitNewCampus.innerText = "Submit New Campus";

    newCampusDiv.appendChild(newCampusLocation);
    newCampusDiv.appendChild(newTechStack);
    newCampusDiv.appendChild(submitNewCampus);

    mainEl.appendChild(newCampusDiv);

    submitNewCampus.addEventListener("click", () => {

        const newCampusJson = {
            "location": newCampusLocation.value,
            "techStack": newTechStack.value,
            "books": []
        }
        fetch("http://localhost:8080/campuses/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCampusJson)

            })
            .then(res => res.json())
            .then(campuses => {
                clearChildren(mainEl);
                displayCampusesView(mainEl, campuses)
            })
            .catch(error => console.error(error));
    });



}
export {
    displayCampusesView
};