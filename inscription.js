function comfirmation(){
    var x = document.getElementById("pass1");
    var y = document.getElementById("pass2");
    var z = document.getElementById("confirm")
    if( x != y ) {
        z.innerHTML = "Invalid password ! Please confirm password";
    }
    else{
        z.innerHTML = "valid";
    }
}

function email_valide(){
    let x = document.getElementById("email").value;
    var n = x.indexOf('@') ;
            if (n >= 0) {
                document.getElementById("confirm").innerHTML = "valide"
            }
            else{
                document.getElementById("confirm").innerHTML = "invalide"
            }


}