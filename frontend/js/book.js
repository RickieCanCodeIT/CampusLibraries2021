
function displayBookView(containerEl,book)
{
    const bookEl = document.createElement("section");
    bookEl.classList.add("book");

    
    const bookHeaderEl =document.createElement("header");
    bookHeaderEl.classList.add("book-header");
    
    

    const bookHeaderTitleEl = document.createElement("h2");
    bookHeaderTitleEl.classList.add("book-header_title");
    bookHeaderTitleEl.innerHTML = book.title;

    const bookDetailsEl = document.createElement("section")
    bookDetailsEl.classList.add("book-details");
    const bookSummaryEl = document.createElement("p");
    bookSummaryEl.classList.add("book-summary")
    bookSummaryEl.innerText = book.description;
    const bookAvailabilityEl = document.createElement("p");
    bookAvailabilityEl.classList.add("book-availability")
    bookAvailabilityEl.innerText = "Available: " + book.available;
    const bookAuthorsEl = document.createElement("div");
    bookAuthorsEl.classList.add("book-header__authors");

    book.authors.forEach(author => {
        const authorEl= document.createElement("h3");
        authorEl.classList.add("author-name");
        authorEl.innerText= author.name;
        bookAuthorsEl.appendChild(authorEl);
    });
    
    bookHeaderEl.appendChild(bookHeaderTitleEl);
    bookHeaderEl.appendChild(bookAuthorsEl);
    bookDetailsEl.appendChild(bookSummaryEl);
    bookDetailsEl.appendChild(bookAvailabilityEl);
    bookEl.appendChild(bookHeaderEl);
    bookEl.appendChild(bookDetailsEl);
    containerEl.appendChild(bookEl);

}
export {displayBookView};



{/* <main class="main-content">
            <section class="book">
                    <header class="book-header">
                        <h2 class="book-header__title">Head First Java</h2>
                        <div class="book-header__authors">
                            <h3 class="author-name">Kathy Sierra</h3>
                            <h3 class="author-name">Bert Bates</h3>
                        </div>
                    </header>
                    <section class="book-details">
                        <p class="book-summary">Great book for learning Java!</p>
                        <p class="book-availability">Availability: <span class="book-availability-status">Available</span></p>
                    </section>
                    <a class="back-navigation">back to <span class="campus-location">Columbus</span></a>
                </section>
            </main> */}