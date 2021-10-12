user_phone = user_phone.length.value;
user_name = "";
function login(){
user_name = document.getElementById("name").value;
user_phone = document.getElementById("phone").value;
if(user_name === '' || user_name == null || user_phone === '' || user_phone == null || user_phone.length <= 9 || user_phone.length >= 11){
    console.log("Not");
    console.log("Not suceed");
}else{
    console.log("Succes");
    console.log("succed");
    window.location = "mainscreen.html";
}
}