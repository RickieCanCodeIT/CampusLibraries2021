
import {displayCampusesView} from "./campuses.js";

const containerEl = document.querySelector(".container");


fetch("http://localhost:8080/campuses/")
.then(res => res.json())
.then(campuses => displayCampusesView(containerEl, campuses))






function clearChildren(element){
    while(element.firstChild){
        element.removeChild(element.lastChild);
    }
};


export{clearChildren};

/* <header class="main-header">
THis is the header text
<h1 class="main-header__title">We Can Code IT Campus Libraries</h1>
</header>
<main class="main-content">
<section class="campus-list">
    <div class="campus">
        <h2 class="campus-location">Columbus</h2>
        <h3 class="campus-tech-stack">Java</h3>
    </div>
    <div class="campus">
        <h2 class="campus-location">Cleveland</h2>
        <h3 class="campus-tech-stack">C#</h3>
    </div>
    <div class="campus">
        <h2 class="campus-location">The MOON</h2>
        <h3 class="campus-tech-stack">JavaScript</h3>
    </div>
</section>
</main> */