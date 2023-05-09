class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  signUp() { }
  signIn() { }
  search() { }
}
//import "../classes/user.js"
class Customer extends User {
  constructor(username, password) {
    super(username, password);
  }

  signUp() {
    let users = []
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'))
    }
    if (users.length == 0) {

      users.push(this);
      localStorage.setItem('users', JSON.stringify(users))
      window.location = '/user/signin/signin.html'
    }
    else {
      let checkDuplicated = false;
      for (let i = 0; i < users.length; i++) {
        if (users[i].username == this.username) {
          checkDuplicated = true;
          console.log('eeeee')

        }
        else {
          checkDuplicated = false;
          console.log('eeeee')

        }
      }
      if (!checkDuplicated) {
        //const newUser = new User($("#username").val(), $("#password").val())
        users.push(this);
        console.log('eeeee')
        localStorage.setItem('users', JSON.stringify(users))
        window.location = '/user/signin/signin.html'
      }
      else {
        console.log('duplicated')
        $("#allError").removeClass('d-none')
      }
    }
  }


  signIn() {
    let users = []
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'))
    }

    for (let i = 0; i < users.length; i++) {
      if (users[i].username == this.username) {
        if (users[i].password == this.password) {
          console.log('done')
          $("#allError").addClass('d-none')
          localStorage.setItem('username', this.username)
          localStorage.setItem('password', this.password)
          window.location = '/user/home/home.html'
        }
        else {
          $("#allError").removeClass('d-none')
        }
      }
      else {
        $("#allError").removeClass('d-none')
      }
    }
  }


  search(txt) {
    let books = []
    if (localStorage.getItem('books')) {
      books = JSON.parse(localStorage.getItem('books'))
    }
    const newBooks = [];
    for (let i = 0; i < books.length; i++) {
      if (books[i].name.includes(txt)) {
        newBooks.push(books[i])
      }
    }
    console.log(txt)

    console.log(newBooks)
    //return newBooks
    for (let i = 0; i < newBooks.length; i++) {
      let tmp = `<div class="col-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-text">${newBooks[i].name}</h5>
        <p class="card-title">${newBooks[i].author}</p>
        <p class="card-title">${newBooks[i].category}</p>
        <div class="text-center">
        <button  class="btn btn-primary request" >Request</button>
        </div>
      </div>
    </div>
  </div>`;
      $("#allDataBooks").append(tmp);
    }
  }


  request(username, bookName) {
    let requests = []
    let check = false;
    if (localStorage.getItem('requests')) {
      requests = JSON.parse(localStorage.getItem('requests'))
    }
    let borrowed = []
    if (localStorage.getItem('borrowed')) {
      borrowed = JSON.parse(localStorage.getItem('borrowed'))
    }
    const requestq = {
      username: username,
      bookName: bookName
    }
    if (requests.length == 0) {
      requests.push(requestq)
      check = true
      console.log('empty')
    }
    else {
      for (let i = 0; i < requests.length; i++) {
        if (requests[i].username == requestq.username && requests[i].bookName == requestq.bookName) {
          check = true
        }
      }
    }
    if (!check) {
      requests.push(requestq)
      console.log('not empty')
    }
    localStorage.setItem('requests', JSON.stringify(requests))
  }


  return(username, bookName) {
    let waitingBooks = []
    let borrowed = []
    let check = false;
    if (localStorage.getItem('waitingBooks')) {
      waitingBooks = JSON.parse(localStorage.getItem('waitingBooks'))
    }
    if (localStorage.getItem('borrowed')) {
      borrowed = JSON.parse(localStorage.getItem('borrowed'))
    }
    console.log(waitingBooks)
    console.log(borrowed)


    const waitingBook = {
      username: username,
      bookName: bookName
    }


    for (let i = 0; i < waitingBooks.length; i++) {
      if (waitingBooks[i].bookName == waitingBook.bookName) {
        check = true
      }
    }

    if (!check) {
      waitingBooks.push(waitingBook)
      /*for(let i = 0 ; i<borrowed.length ; i++)
      {
          if( borrowed[i].bookName!=waitingBook.bookName)
          {
            console.log(i)

            borrowed.splice(i,1)
          }
      }*/
    }
    localStorage.setItem('waitingBooks', JSON.stringify(waitingBooks))
    localStorage.setItem('borrowed', JSON.stringify(borrowed))

  }
}