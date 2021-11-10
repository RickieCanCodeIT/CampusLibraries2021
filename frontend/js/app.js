const containerEl = document.querySelector(".container");



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