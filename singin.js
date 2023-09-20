
function signin() {
    let username = document.getElementById('text').value;
    let password = document.getElementById('number').value;
    console.log("username = " + username + ",password = " + password);

    let storedData = JSON.parse(sessionStorage.getItem("data"));
    console.log(storedData);

    let checklogin = storedData.filter(function (e) {
        return e.username == username && e.password == password;
    });

    console.log(checklogin);

    if (checklogin.length >= 1) {
        alert("valid information");
    } else {
        alert("Please enter valid information");
    }
}









