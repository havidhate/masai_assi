const firebaseUrl = "https://your-database.firebaseio.com/"; // Replace with your Firebase URL

// Fetch and Display Books
async function fetchBooks() {
    const response = await fetch(`${firebaseUrl}/books.json`);
    const data = await response.json();

    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear previous data

    for (const id in data) {
        const book = data[id];
        bookList.innerHTML += `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.genre}</td>
                <td>${book.publishedYear}</td>
                <td>${book.available ? "Yes" : "No"}</td>
                <td>
                    <button onclick="deleteBook('${id}')">Delete</button>
                </td>
            </tr>`;
    }
}

// Add a Book
document.getElementById("bookForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const year = document.getElementById("year").value;

    const newBook = { title, author, genre, publishedYear: parseInt(year), available: true };

    await fetch(`${firebaseUrl}/books.json`, {
        method: "POST",
        body: JSON.stringify(newBook),
    });

    fetchBooks(); // Refresh list
});

// Delete a Book
async function deleteBook(bookId) {
    await fetch(`${firebaseUrl}/books/${bookId}.json`, { method: "DELETE" });
    fetchBooks(); // Refresh list
}

// Search Books
document.getElementById("search").addEventListener("input", async (e) => {
    const searchText = e.target.value.toLowerCase();
    const response = await fetch(`${firebaseUrl}/books.json`);
    const data = await response.json();

    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear previous data

    for (const id in data) {
        const book = data[id];
        if (book.title.toLowerCase().includes(searchText)) {
            bookList.innerHTML += `
                <tr>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.genre}</td>
                    <td>${book.publishedYear}</td>
                    <td>${book.available ? "Yes" : "No"}</td>
                    <td>
                        <button onclick="deleteBook('${id}')">Delete</button>
                    </td>
                </tr>`;
        }
    }
});

// Load books when page loads
window.onload = fetchBooks;
