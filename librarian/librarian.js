class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  signUp() { }
  signIn() { }
  search() { }
}
class Librarian extends User {
  constructor(username, password) {
    super(username, password);
  }
  signIn() {
    const librarian = JSON.parse(localStorage.getItem('librarian'))
    if (librarian.username == this.username) {
      if (librarian.password == this.password) {
        console.log('done')
        $("#allError").addClass('d-none')
        window.location = '/librarian/home/home.html'
      }
      else {
        $("#allError").removeClass('d-none')
      }
    }
    else {
      $("#allError").removeClass('d-none')
    }
  }

  addBook(book) {
    let books = []
    if (localStorage.getItem('books')) {
      books = JSON.parse(localStorage.getItem('books'))
    }
    books.push(book);
    $("#added").removeClass('d-none')
    localStorage.setItem('books', JSON.stringify(books))
    console.log(book)
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
                <button  class="btn btn-primary getInfo" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                <button  class="btn btn-danger my-2 delete">Delete</button>
              </div>
            </div>
          </div>
        </div>`;
      $("#allDataBooks").append(tmp);
    }
  }

  deleteBook(bookName) {
    console.log('in delete')
    let books = []
    if (localStorage.getItem('books')) {
      books = JSON.parse(localStorage.getItem('books'))
    }
    console.log(books)
    console.log(bookName)

    for (let i = 0; i < books.length; i++) {
      if (books[i].name.includes(bookName)) {
        books.splice(i, 1)
        console.log('asdasddsasdadas')
      }

    }
    /*for (let i = 0; i < books.length; i++) {
        let tmp = `<div class="col-3">
          <div class="card">
            <div class="card-body">
            <h5 class="card-text">${books[i].name}</h5>
            <p class="card-title">${books[i].author}</p>
              <div class="text-center">
                <button  class="btn btn-primary getInfo"  data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                <button  class="btn btn-danger my-2 delete">Delete</button>
              </div>
            </div>
          </div>
        </div>`;
        $("#allDataBooks").append(tmp);
      }*/
    console.log(JSON.stringify(books))
    localStorage.setItem('books', JSON.stringify(books))
  }


  updateBook(book, oldBook) {
    let books = []
    if (localStorage.getItem('books')) {
      books = JSON.parse(localStorage.getItem('books'))
    }
    console.log(books)
    console.log(oldBook)

    for (let i = 0; i < books.length; i++) {
      if (books[i].name == oldBook) {
        books.splice(i, 1, book)
        console.log('asdasddsasdadas')
      }

    }
    /*for (let i = 0; i < books.length; i++) {
        let tmp = `<div class="col-3">
          <div class="card">
            <div class="card-body">
            <h5 class="card-text">${books[i].name}</h5>
            <p class="card-title">${books[i].author}</p>
              <div class="text-center">
                <button  class="btn btn-primary getInfo"  data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                <button  class="btn btn-danger my-2 delete">Delete</button>
              </div>
            </div>
          </div>
        </div>`;
        $("#allDataBooks").append(tmp);
      }*/
    localStorage.setItem('books', JSON.stringify(books))
  }
  declineRequest(username, bookName) {
    let requests = []
    if (localStorage.getItem('requests')) {
      requests = JSON.parse(localStorage.getItem('requests'))
    }
    for (let i = 0; i < requests.length; i++) {
      if (requests[i].username == username && requests[i].bookName == bookName) {
        requests.splice(i, 1);
        //alert('decline successfully')
      }
    }
    localStorage.setItem('requests', JSON.stringify(requests))
  }
  acceptRequest(username, bookName) {
    let requests = []
    let borrowed = []
    let allTransactions = []
    let books = []
    if (localStorage.getItem('allTransactions')) {
      allTransactions = JSON.parse(localStorage.getItem('allTransactions'))
    }
    if (localStorage.getItem('books')) {
      books = JSON.parse(localStorage.getItem('books'))
    }
    if (localStorage.getItem('requests')) {
      requests = JSON.parse(localStorage.getItem('requests'))
      if (localStorage.getItem('borrowed')) {
        borrowed = JSON.parse(localStorage.getItem('borrowed'))
      }
      for (let i = 0; i < requests.length; i++) {
        if (requests[i].username == username && requests[i].bookName == bookName) {
          const requestq = {
            username: username,
            bookName: bookName
          }
          borrowed.push(requestq);
          allTransactions.push(requestq);
          requests.splice(i, 1);

        }
      }

      for (let i = 0; i < books.length; i++) {
        if (books[i].name == bookName) {
          console.log(books[i])
          books[i].borrow = true;
        }
      }
    }
    localStorage.setItem("requests", JSON.stringify(requests))
    localStorage.setItem("borrowed", JSON.stringify(borrowed))
    localStorage.setItem("books", JSON.stringify(books))
    localStorage.setItem("allTransactions", JSON.stringify(allTransactions))




  }

  acceptReturnBook(username, bookName) {
    let waitingBooks = []
    let borrowed = []
    let books = []

    if (localStorage.getItem('waitingBooks')) {
      waitingBooks = JSON.parse(localStorage.getItem('waitingBooks'))
    }
    if (localStorage.getItem('borrowed')) {
      borrowed = JSON.parse(localStorage.getItem('borrowed'))
    }
    if (localStorage.getItem('books')) {
      books = JSON.parse(localStorage.getItem('books'))
    }
    console.log(waitingBooks)
    console.log(borrowed)
    console.log(bookName)


    for (let i = 0; i < borrowed.length; i++) {
      if (borrowed[i].bookName == bookName) {
        console.log(bookName)

        borrowed.splice(i, 1)
      }
    }
    for (let i = 0; i < waitingBooks.length; i++) {
      if (waitingBooks[i].bookName == bookName) {
        console.log(bookName)

        waitingBooks.splice(i, 1)
      }
    }
    for (let i = 0; i < books.length; i++) {
      if (books[i].name == bookName) {
        console.log(books[i])
        books[i].borrow = false;
      }
    }
    localStorage.setItem("waitingBooks", JSON.stringify(waitingBooks))
    localStorage.setItem("borrowed", JSON.stringify(borrowed))
    localStorage.setItem("books", JSON.stringify(books))
  }

  declineReturnBook(username, bookName) {
    let waitingBooks = []
    let borrowed = []
    if (localStorage.getItem('waitingBooks')) {
      waitingBooks = JSON.parse(localStorage.getItem('waitingBooks'))
    }

    console.log(waitingBooks)
    console.log(bookName)

    for (let i = 0; i < waitingBooks.length; i++) {
      if (waitingBooks[i].bookName == bookName) {
        console.log(bookName)

        waitingBooks.splice(i, 1)
      }
    }
    localStorage.setItem("waitingBooks", JSON.stringify(waitingBooks))
  }
  getAllBorrowdBooks() {
    let borrowed = []
    if (localStorage.getItem('borrowed')) {
      borrowed = JSON.parse(localStorage.getItem('borrowed'))
    }
    return borrowed
  }
  getAllBooks() {
    let books = []
    if (localStorage.getItem('books')) {
      books = JSON.parse(localStorage.getItem('books'))
    }
    return books
  }
  getAllUsers() {
    let users = []
    if (localStorage.getItem('users')) {
      users = JSON.parse(localStorage.getItem('users'))
    }
    return users
  }

  getAuthorBooks() {
    let author = []
    if (localStorage.getItem('Authers')) {
      author = JSON.parse(localStorage.getItem('Authers'))
    }
    let books = []
    if (localStorage.getItem('books')) {
      books = JSON.parse(localStorage.getItem('books'))
    }
    const allAB = []
    for (let i = 0; i < author.length; i++) {
      const bookss = [];
      const objAB = {
        author: author[i].name,
        books: bookss
      }
      for (let j = 0; j < books.length; j++) {
        if (books[j].author == author[i].name) {
          bookss.push(books[j].name);
        }
      }
      allAB.push(objAB);
    }
    console.log(allAB)
    return allAB;
  }


  getCategoryBooks() {
    let books = []
    const allCat = []

    if (localStorage.getItem('books')) {
      books = JSON.parse(localStorage.getItem('books'))
    }
    let allCB = []
    for (let i = 0; i < books.length; i++) {
      const bookss = [];
       allCat.push(books[i].category)

      const objAB = {
        category: books[i].category,
        books: bookss
      }
      for (let j = 0; j < books.length; j++) {
        if (books[j].category == books[i].category) {
          if(allCat.includes(books[i].category))
          {
            bookss.push(books[j].name);
          }
        }
      }
      allCB.push(objAB);
    }
    allCB = allCB.filter((value, index, self) =>
  index === self.findIndex((t) => (
    t.category === value.category 
  ))
)
    return allCB
  }



}
