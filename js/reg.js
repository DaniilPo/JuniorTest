function AddNewUsers(){
    let Name = document.getElementById("name").value;
    let Password = document.getElementById("pass").value;
    let ConPassword = document.getElementById("conpass").value;
    let mail = document.getElementById("email").value;
    if (Password !== ConPassword){
        alert("Password mismatch!");
        return;
    }

    $.post(
        "core_php/core.php",
        {
            "action" : "insertuser",
            "name" : Name,
            "pass" : Password,
            "email" : mail
        },

    );
    window.location.href='login.html';

}



