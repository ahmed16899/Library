let borrowed = []
if (localStorage.getItem('borrowed')) {
  borrowed = JSON.parse(localStorage.getItem('borrowed'))
}


for (let i = 0; i < borrowed.length; i++) {


  if (borrowed[i].username == localStorage.getItem('username')) {
    let tmp = `<div class="col-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-text">${borrowed[i].bookName}</h5>
        
        <div class="text-center">
            <button  class="btn btn-primary return" >Return</button>
          </div>
      </div>
    </div>
  </div>`;
    $("#allDataBooks").append(tmp);
  }
  else {
    let tmp = `<h5 class="text-center">No Data</h5>`;
    $("#allDataBooks").append(tmp);
  }
}
const user = new Customer(localStorage.getItem('username'), localStorage.getItem('password'))


$(document).on("click", ".return", function () {
  //console.log('in return')
  let bookName = $(this).parent().prev().html()
  //console.log(bookName)

  //$('#allDataBooks').empty();
  //console.log(bookName)
  user.return(user.username, bookName)
  // alert('added succes')
  //  libr.deleteBook(bookName)
  // location.reload();
});
