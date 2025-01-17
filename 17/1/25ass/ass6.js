let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

function AddBook(title, author, libraryID) {
    library.push({ title, author, libraryID });
}
function RemoveBook(title){
    library = library.filter((book)=>book.title!=title);
}
function SortBooks(){
    return library.sort((a,b)=>a.libraryID-b.libraryID);
}
function SeaarchBooks(title){
    return library.filter((book)=>book.title==title);
}
function FirstandLastOccurance(title){
    let index = library.findIndex((book)=>book.title==title);
    return [index,library.lastIndexOf(title)];
}
function ReplaceBook(title,author,libraryID){
    let index = library.findIndex((book)=>book.title==title);
    library[index] = {title,author,libraryID};
}
function JoinBookTitles(){
    return library.map((book)=>book.title).join(", ");
}