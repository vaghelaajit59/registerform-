function signin(){
    let username = document.getElementById('text').value;
    let password = document.getElementById('number').value; 
    //let ajit =[username ,password] 
    //console.log(ajit)
let username1 = sessionStorage.getItem('name');
let password1 = sessionStorage.getItem('password');
console.log(username1);
console.log(password1);


if (username1 == username)
{
    console.log("true");
}
else{
    console.log("invliad");
}
}









