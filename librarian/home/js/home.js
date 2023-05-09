let books = []
if (localStorage.getItem('books')) {
  books = JSON.parse(localStorage.getItem('books'))
}
console.log(books)
let authors = []
if (localStorage.getItem('Authers')) {
  authors = JSON.parse(localStorage.getItem('Authers'))
}
for (let i = 0; i < authors.length; i++) {
  let tmp = `
  <option value="${authors[i].name}">${authors[i].name}</option>`;
  $("#author").append(tmp);
}

/*if($("#search").val() == "")
{

}*/
for (let i = 0; i < books.length; i++) {
  let tmp = `<div class="col-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-text">${books[i].name}</h5>
        <p class="card-title">${books[i].author}</p>
        <p class="card-title">${books[i].category}</p>

        <div class="text-center">
          <button  class="btn btn-primary getInfo" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
          <button  class="btn btn-danger my-2 delete">Delete</button>
        </div>
      </div>
    </div>
  </div>`;
  $("#allDataBooks").append(tmp);
}
const lib = JSON.parse(localStorage.getItem('librarian'))
const libr = new Librarian(lib.username, lib.password)
$("#search").change(function () {

  $('#allDataBooks').empty();

  libr.search($("#search").val())
  //console.log(newBooks)
  /*for (let i = 0; i < newBooks.length; i++) {

          console.log($("h5").text());
          let tmp = `<div class="col-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-text">${books[i].name}</h5>
              <p class="card-title">${books[i].author}</p>
              <div class="text-center">
                <button  class="btn btn-primary getInfo" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                <button  class="btn btn-danger my-2 delete">Delete</button>
              </div>
            </div>
          </div>
        </div>`;
            $("#allDataBooks").append(tmp);
          }*/
})


$(document).on("click", ".delete", function () {
  console.log('in delete')
  let bookName = $(this).parent().prev().prev().prev().html()
  //$('#allDataBooks').empty();
  console.log(bookName)
  libr.deleteBook(bookName)
  location.reload();
});




$(document).on("click", ".getInfo", function () {
  let oldBookName = $(this).parent().prev().prev().prev().text()
  //let author = $(this).parent().prev().prev().text()
  console.log(oldBookName)
  $(document).on("click", "#saveUpdate", function () {
    const book = new Book($("#author").val(), $("#book").val() ,$("#category").val() )
    console.log(book)
    libr.updateBook(book, oldBookName)
    //location.reload();
  });
});




/*$(".getInfo").click(function () {
  //let bookName =  $(this).prev().text()
  let oldBookName = $(this).parent().prev().prev().text()
  let author = $(this).parent().prev().text()
  console.log(oldBookName)
  // console.log(author)
  $("#saveUpdate").click(function () {
    //$('#allDataBooks').empty();
    const book = new Book($("#author").val(), $("#book").val())
    console.log(book)
    libr.updateBook(book, oldBookName)
    location.reload();
  })

})*/


