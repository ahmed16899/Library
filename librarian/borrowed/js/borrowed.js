let requests = []
if (localStorage.getItem('borrowed')) {
  borrowed = JSON.parse(localStorage.getItem('borrowed'))
}
console.log(borrowed)





for (let i = 0; i < borrowed.length; i++) {
  let tmp = `<div class="col-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-text">${borrowed[i].bookName}</h5>
        <p class="card-text"> borrowed to</p>
        <p class="card-title">${borrowed[i].username}</p>
      </div>
    </div>
  </div>`;
  $("#allDataBooks").append(tmp);
}

