$("#register").click(function () {
    let checkUser = false, checkPassword = false;
    if ($("#username").val().length < 4) {
        $("#unError").removeClass('d-none')
    }
    else {
        $("#unError").addClass('d-none')
        checkUser = true
    }
    if ($("#password").val().length < 4) {
        $("#pError").removeClass('d-none')
    }
    else {
        $("#pError").addClass('d-none')
        checkPassword = true
    }
    const newUser = new Customer($("#username").val(), $("#password").val())
    if (checkPassword && checkUser) {
        newUser.signUp()
    }})

