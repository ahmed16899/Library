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
// let tmp = `<div class="col-3">
//                  <button  class="btn btn-primary my-2 getBorrowed">getBorrowed</button>
//             </div>
//             <div class="col-3">
//                  <button  class="btn btn-primary my-2 getAllBooks">getAllBooks</button>
//             </div>
//             <div class="col-3">
//                  <button  class="btn btn-primary my-2 getAllUsers">getAllUsers</button>
//             </div>
//             <div class="col-3">
//                  <button  class="btn btn-primary my-2 getBorrowed">getBorrowed</button>
//             </div>
//             <div class="col-3">
//                  <button  class="btn btn-primary my-2 getBorrowed">getBorrowed</button>
//             </div>
            
            
            
//             `;
// $("#allDataBooks").append(tmp);

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


$(document).on("click", ".getBorrowed", function () {

  const borrowed = libr.getAllBorrowdBooks()
  console.log(borrowed)
  let tmp = `<h2 class="my-5">Borrowed books = ${borrowed.length}</h2>`
  for (let i = 0; i < borrowed.length; i++) {
    console.log($("h5").text());
     tmp+= `  
    <div class="col-3">
  <div class="card">
    <div class="card-body">
      <h5 class="card-text">${borrowed[i].bookName}</h5>
      <p class="card-title">${borrowed[i].username}</p>
      <div class="text-center">
      </div>
    </div>
  </div>
</div>`;
  }
  $("#allDataBooks").html(tmp);
});





$(document).on("click", ".getAllBooks", function () {

  const books = libr.getAllBooks()
  console.log(books)
  let tmp =`<h2 class="my-5">All books = ${books.length}</h2>`
  for (let i = 0; i < books.length; i++) {
    console.log($("h5").text());
   tmp+= `  
    <div class="col-3">
  <div class="card">
    <div class="card-body">
      <h5 class="card-text">${books[i].name}</h5>
      <p class="card-title">${books[i].author}</p>
    </div>
  </div>
</div>`;
  }
  $("#allDataBooks").html(tmp);
});


$(document).on("click", ".getAllUsers", function () {
  const users = libr.getAllUsers()
  console.log(books)
  let tmp =`<h2 class="my-5">All Users = ${users.length}</h2>`
  for (let i = 0; i < users.length; i++) {
    console.log($("h5").text());
   tmp+= `  
    <div class="col-3">
  <div class="card">
    <div class="card-body">
      <h5 class="card-text">${users[i].username}</h5>
      <p class="card-title">${users[i].author}</p>
    </div>
  </div>
</div>`;
  }
  $("#allDataBooks").html(tmp);
});

$(document).on("click", ".getAuthorBooks", function () {
  const aBooks = libr.getAuthorBooks()
  //console.log(aBooks)
  let tmp =`<h2 class="my-5">All Authors Books = ${aBooks.length}</h2>`
  for (let i = 0; i < aBooks.length; i++) {
    console.log($("h5").text());
   tmp+= `  
    <div class="col-3">
  <div class="card">
    <div class="card-body">
      <h5 class="card-text">${aBooks[i].author}</h5>
      <p class="card-title">${ aBooks[i].books}</p>
    </div>
  </div>
</div>`;
  }
  $("#allDataBooks").html(tmp);
});






$(document).on("click", ".getCategoryBooks", function () {
  const aBooks = libr.getCategoryBooks()
  console.log(aBooks)
  let tmp =`<h2 class="my-5">All Authors Books = ${aBooks.length}</h2>`
  for (let i = 0; i < aBooks.length; i++) {
    console.log($("h5").text());
   tmp+= `  
    <div class="col-3">
  <div class="card">
    <div class="card-body">
      <h5 class="card-text">${aBooks[i].category}</h5>
      <p class="card-title">${ aBooks[i].books}</p>
    </div>
  </div>
</div>`;
  }
  $("#allDataBooks").html(tmp);
});




