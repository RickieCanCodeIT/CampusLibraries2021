import { displayBookView } from "./book.js";
import { clearChildren } from "./app.js";
import { BookComponent} from "./BookComponent.js";
function displayCampusView(containerEl, campus) {
    const campusLibraryEl = document.createElement("section");
    campusLibraryEl.classList.add("campus-library");

    const campusBooksEl = document.createElement("section");
    campusBooksEl.classList.add("book-title");




    const campusBookHeaderEl = document.createElement("header");
    campusBookHeaderEl.classList.add("campus-library-header");
    const h2El = document.createElement("h2");
    h2El.classList.add("campus-library-header__location");
    h2El.innerText=campus.location;
    const h3El= document.createElement("h3");
    h3El.classList.add("campus-library-header__tech-stack");
    h3El.innerText=campus.techStack;

    campusBookHeaderEl.appendChild(h2El);
    campusBookHeaderEl.appendChild(h3El);
    campusLibraryEl.appendChild(campusBookHeaderEl);
    containerEl.appendChild(campusLibraryEl);


    campus.books.forEach(book => {
        const bookTitleEl= document.createElement("h3");
        bookTitleEl.classList.add("book-title");
        bookTitleEl.innerText=book.title;
        campusBooksEl.appendChild(bookTitleEl);

        bookTitleEl.addEventListener("click", ()=> {
            clearChildren(containerEl);
            //displayBookView(containerEl, book);
            const bookComponent = BookComponent(book, campus);
            containerEl.innerHTML += bookComponent;
            const aEl = document.querySelector(".back-navigation");
            aEl.addEventListener("click", () => {
                clearChildren(containerEl);
                displayCampusView(containerEl, campus);
            })

        })
    });

    containerEl.appendChild(campusBooksEl);

}
export {
    displayCampusView
};



// <main class="main-content">
//     <section class="campus-library">
//         <header class="campus-library-header">
//             <h2 class="campus-library-header__location">Columbus</h2>
//          <h3 class="campus-library-header__tech-stack">Java</h3>
//         </header>
//             <section class="campus-books">
//                         <h3 class="book-title">Head First Java</h3>
//                         <h3 class="book-title">Head First Design Patterns</h3>
//                         <h3 class="book-title">Test Driven Development by Example</h3>
//                     </section>
//                     <a class="back-navigation">back to campus listings</a>
//                 </section>
//             </main> 