$("#signin").click(function () {
    const newUser = new Customer($("#username").val(), $("#password").val())
    newUser.signIn();
})