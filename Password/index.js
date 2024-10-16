function showPassword(){
    var passwordref=document.getElementById("password")
    var btn=document.getElementById('btn')
    if(passwordref.type=="password"){
        passwordref.type="text"
        btn.innerHTML="Hide Password"
    }
    else{
        passwordref.type="password"
        btn.innerHTML="Show Password"
    }
}