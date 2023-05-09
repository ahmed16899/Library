let books = []
if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'))
}

let borrowed = []
if (localStorage.getItem('borrowed')) {
  borrowed = JSON.parse(localStorage.getItem('borrowed'))
}

console.log(borrowed.length)
//for (let j = 0; j < borrowed.length; j++) {
  if(borrowed.length == 0)
  {
    for (let i = 0; i < books.length; i++) {
        let tmp = `<div class="col-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-text">${books[i].name}</h5>
            <p class="card-title">${books[i].author}</p>
            <p class="card-title">${books[i].category}</p>
            <div class="text-center">
              <button  class="btn btn-primary request" >Request</button>
            </div>
          </div>
        </div>
      </div>`;
      $("#allDataBooks").append(tmp);
      }
  }
  else
  {
   
    for (let i = 0; i < books.length; i++) {
          console.log(books[i])
          if(!books[i].borrow)
          {
            let tmp = `<div class="col-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-text">${books[i].name}</h5>
                <p class="card-title">${books[i].author}</p>
                <p class="card-title">${books[i].category}</p>
        
                <div class="text-center">
                  <button  class="btn btn-primary request" >Request</button>
                </div>
              </div>
            </div>
          </div>`;
          $("#allDataBooks").append(tmp);
          }
          
     //   }
    //  }
     // let borro = books.find(item => item.bookName == books[i].bookName);
      //console.log(borro)
     // if(borro)
    //  {
       
      }    
  }
 // }

//}
 
const user = new Customer(localStorage.getItem('username'), localStorage.getItem('password'))
$("#search").change(function () {
    $('#allDataBooks').empty();
    user.search($("#search").val())
    console.log($("#search").val())
})


$(document).on("click", ".request", function () {
    console.log('in request')
    let bookName = $(this).parent().prev().prev().prev().html()
    //$('#allDataBooks').empty();
    console.log(bookName)
    user.request(user.username, bookName)
    alert('added succes')
    //  libr.deleteBook(bookName)
    // location.reload();
});
