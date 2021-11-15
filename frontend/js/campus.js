import {
    displayBookView
} from "./book.js";
import {
    clearChildren
} from "./app.js";
import {
    BookComponent
} from "./BookComponent.js";
import {
    displayCampusesView
} from "./campuses.js";

function displayCampusView(containerEl, campus, campuses) {
    const campusLibraryEl = document.createElement("section");
    campusLibraryEl.classList.add("campus-library");

    const campusBooksEl = document.createElement("section");
    campusBooksEl.classList.add("book-title");




    const campusBookHeaderEl = document.createElement("header");
    campusBookHeaderEl.classList.add("campus-library-header");
    const h2El = document.createElement("h2");
    h2El.classList.add("campus-library-header__location");
    h2El.innerText = campus.location;
    const h3El = document.createElement("h3");
    h3El.classList.add("campus-library-header__tech-stack");
    h3El.innerText = campus.techStack;

    campusBookHeaderEl.appendChild(h2El);
    campusBookHeaderEl.appendChild(h3El);
    campusLibraryEl.appendChild(campusBookHeaderEl);



    campus.books.forEach(book => {
        const bookTitleEl = document.createElement("h3");
        bookTitleEl.classList.add("book-title");
        bookTitleEl.innerText = book.title;
        campusBooksEl.appendChild(bookTitleEl);

        bookTitleEl.addEventListener("click", () => {
            clearChildren(containerEl);
            //displayBookView(containerEl, book);
            const bookComponent = BookComponent(book, campus);
            containerEl.innerHTML += bookComponent;
            const aEl = document.querySelector(".back-navigation");
            aEl.addEventListener("click", () => {
                clearChildren(containerEl);
                displayCampusView(containerEl, campus, campuses);
            })

        })
    });

    const backEl = document.createElement("a");
    backEl.classList.add("back-navigation");
    backEl.innerText = "back to campus listings";

    backEl.addEventListener('click', () => {
        clearChildren(containerEl);
        displayCampusesView(containerEl, campuses);
    });


    campusLibraryEl.appendChild(campusBooksEl);

    campusLibraryEl.appendChild(backEl);
    containerEl.appendChild(campusLibraryEl);

    const newBookDiv = document.createElement("div");

    const newAuthor = document.createElement("input");
    newAuthor.type = "text";
    newAuthor.placeholder = "Enter New Author";

    const newDescription = document.createElement("input");
    newDescription.type = "text";
    newDescription.placeholder = "Enter Description";


    const authorBio = document.createElement("input");
    authorBio.type = "text";
    authorBio.placeholder = "Tell me about the author";

    const newBookTitle = document.createElement("input");
    newBookTitle.type = "text";
    newBookTitle.placeholder = "Enter Book Title";

    const submitNewBook = document.createElement("button");
    submitNewBook.innerText = "Submit new book";


    newBookDiv.appendChild(newBookTitle);
    newBookDiv.appendChild(newDescription);
    newBookDiv.appendChild(newAuthor);
    newBookDiv.appendChild(authorBio);
    newBookDiv.appendChild(submitNewBook);

    containerEl.appendChild(newBookDiv);

    submitNewBook.addEventListener("click", () => {
        const newBookJson = {
            "title": newBookTitle.value,
            "authors": [{
                "name": newAuthor.value,
                "bio": authorBio.value
            }],
            "description": newDescription.value,
            "available": true
        }
        fetch(`http://localhost:8080/campuses/${campus.id}/book`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBookJson)
            })
            .then(res => res.json())
            .then(campuses => {
                clearChildren(containerEl);
                displayCampusesView(containerEl, campuses);
            })
            .catch(err => console.error(err));


    })

    const editCampusDiv = document.createElement("div");

    const locationEl = document.createElement("input");
    locationEl.type = "text";
    locationEl.placeholder = "Enter Campus Location";

    const techStackEl = document.createElement("input");
    techStackEl.type = "text";
    techStackEl.placeholder = "Enter tech stack";

    const editButton = document.createElement("button");
    editButton.innerText = "Edit Campus";

    editCampusDiv.appendChild(locationEl);
    editCampusDiv.appendChild(techStackEl);
    editCampusDiv.appendChild(editButton);

    containerEl.appendChild(editCampusDiv);

    editButton.addEventListener("click", () => {
        campus.location = locationEl.value;
        campus.techStack = techStackEl.value;

        fetch(`http://localhost:8080/campuses/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(campus)
            })
            .then(res => res.json())
            .then(campuses => {
                clearChildren(containerEl);
                displayCampusesView(containerEl, campuses);
            })
            .catch(err => console.error(err));
    })

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
//             </section>
//         <a class="back-navigation">back to campus listings</a>
//     </section>
//             </main> 