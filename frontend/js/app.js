import {
    displayCampusesView
} from "./campuses.js";

const containerEl = document.querySelector(".container");

buildHeader();
buildMainElement();
buildFooter();






function clearChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
};

function buildHeader() {
    const headerEl = document.createElement("header");
    headerEl.classList.add("main-header");
    const h1El = document.createElement("h1");
    h1El.classList.add("main-header");
    h1El.innerText = "We Can Code IT Campus Libraries";
    headerEl.appendChild(h1El);
    containerEl.appendChild(headerEl);
}

function buildMainElement() {
    const mainEl = document.createElement("main");
    mainEl.classList.add("main-content");
    containerEl.appendChild(mainEl);

    fetch("http://localhost:8080/campuses/")
        .then(res => res.json())
        .then(campuses => {
            displayCampusesView(mainEl, campuses)
            
        })
       
}

function buildFooter(){
    const footerEl = document.createElement("footer");
    footerEl.classList.add("main-footer");
    const smallEl = document.createElement("small");
    smallEl.classList.add("main-footer__copyright");
    smallEl.innerHTML = "We Can Code IT &copy;2020"
    footerEl.appendChild(smallEl);
    containerEl.appendChild(footerEl);
}

export {
    clearChildren
};

