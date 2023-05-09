

let authors = []
if (localStorage.getItem('Authers')) {
    authors = JSON.parse(localStorage.getItem('Authers'))
}

 const lib= JSON.parse(localStorage.getItem('librarian'))

for (let i = 0; i < authors.length; i++) {
    let tmp = `
    <option value="${authors[i].name}">${authors[i].name}</option>`;
    $("#author").append(tmp);
}
console.log(authors)
$("#add").click(function () {

    const book = new Book( $("#author").val() , $("#book").val() , $("#category").val())
    const libr = new Librarian(lib.username ,lib.password)
    libr.addBook(book);
    
})