function test(){
    let Password = document.getElementById("pass").value;
    let mail = document.getElementById("email").value;
    $.post(
        "core_php/core.php",
        {
            "action" : "CheckUser",
            "email" : mail,
            "pass" : Password
        },
        LogIn
    );
}
function LogIn(data){
    data = JSON.parse(data);
    console.log(data.ID);
    if (data.ID > 0){
        localStorage.setItem( 'objectToPass', data.ID );
        window.location.href='main.php?result=' + data.ID;

    }
}