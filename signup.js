let info = [];
let b = 'Username do not exist'
let username2
function signin() {
    let username2 = document.getElementById('username2').value;
    let password2 = document.getElementById('password2').value;
    let city = document.getElementById('city').value;
    let surname = document.getElementById('surname').value;
    let birth = document.getElementById('birth').value;


    info.push(
        {
            name: username2,
            surname: surname,
            password: password2,
            city: city,
            birthdate: birth

        }
    );

    console.log(info);

}
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let  username1 = sessionStorage.getItem('Name');
  let password1 = sessionStorage.getItem('Password');

  
    sessionStorage.setItem('Name',username);
    sessionStorage.setItem('Password',password);
    console.log(username1);
    console.log(password1);

}




/*let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];
let bigCities = cities.filter(function (r,t) {
    //return r.population > 3000000;
    return r.name  = 'Houston';
    
});
----*/
function validateform() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == null || username == "") {
        alert("Name can't be blank");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
}

