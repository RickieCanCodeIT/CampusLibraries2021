import {AuthorComponent} from "./AuthorComponent.js";
function BookComponent(book, campus) {
    return `
    <main class="main-content">
        <section class="book">
            <header class="book-header">
                <h2 class="book-header__title">${book.title}</h2>
                <div class="book-header__authors">
                    ${book.authors.map(AuthorComponent).join("")}
                </div>
            </header>
            <section class="book-details">
                <p class="book-summary">${book.description}</p>
                <p class="book-availability">Availability: <span class="book-availability-status">${book.available}</span></p>
            </section>
            <a class="back-navigation">back to <span class="campus-location">${campus.location}</span></a>
        </section>
    </main>     
    `;
}

export {BookComponent};