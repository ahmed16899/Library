if (localStorage.getItem('waitingBooks')) {
  waitingBooks = JSON.parse(localStorage.getItem('waitingBooks'))
}
console.log(waitingBooks)




for (let i = 0; i < waitingBooks.length; i++) {
  let tmp = `<div class="col-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-text">${waitingBooks[i].username}</h5>
        <p class="card-text">Want To Return</p>
        <p class="card-title">${waitingBooks[i].bookName}</p>
        <div class="text-center">
          <button  class="btn btn-primary accept">Accept</button>
          <button  class="btn btn-danger my-2 decline">Decline</button>
        </div>
      </div>
    </div>
  </div>`;
  $("#allDataBooks").append(tmp);
}
const lib = JSON.parse(localStorage.getItem('librarian'))
const libr = new Librarian(lib.username, lib.password)
/*$("#search").change(function () {

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
/*})*/


/*$(document).on("click", ".delete", function () {
  console.log('in delete')
  let bookName = $(this).parent().prev().prev().prev().html()
  //$('#allDataBooks').empty();
  console.log(bookName)
  libr.deleteBook(bookName)
  location.reload();
});*/




$(document).on("click", ".decline", function () {
  let username = $(this).parent().prev().prev().prev().text()
  let bookName = $(this).parent().prev().text()
  libr.declineReturnBook(username,bookName);
  location.reload();
});

$(document).on("click", ".accept", function () {
  let username = $(this).parent().prev().prev().prev().text()
  let bookName = $(this).parent().prev().text()
  //console.log(username , bookName);
  libr.acceptReturnBook(username,bookName);
  location.reload();
});




