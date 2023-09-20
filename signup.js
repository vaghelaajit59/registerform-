let userData = [];
//let b = 'Username do not exist'
//let username2
function register() {
    let name = document.getElementById('name').value;

    let mail = document.getElementById('mail').value;

    let gender = document.getElementById('gender').value;

    let number = document.getElementById('number').value;

    let username = document.getElementById('username').value;

    let password = document.getElementById('password').value;

    console.log("name = " + name + ",mail = " + mail + ",number = " + number + ",gender = " + gender + ",username = " + username + ",password =" + password);

    //array
    userData.push(
        {
            name: name,
            email: mail,
            number: number,
            gender: gender,
            username: username,
            password: password,
        });
    console.log(JSON.stringify(userData));

    //session storage
    sessionStorage.setItem("data", JSON.stringify(userData));
    let storedData = JSON.parse(sessionStorage.getItem("data"));
    console.log(storedData)


}
//function clearScreen(){

 //   document.getElementById(clearScreen).value;
   //console.log(clearScreen);

//}
/*  info.push(
    {
        name: username2,
        surname: surname,
        password: password2,
        city: city,
        birthdate: birth

    }
);

console.log(info);





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
*/
