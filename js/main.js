function init(id) { //database login
    console.log(id);
    $.post(
        "core_php/core.php",
        {
            "action" : "init",
            "id" : id
        },
        initprod

    );
}
let GlobIDPer = 0;
let GlobID = 0;
function initprod(data) {     //displaying data
    data = JSON.parse(data);
    console.log(data);
    GlobIDPer = data.ID;
    if (checkupdate === 1){
        document.getElementById('name').value=data.Name;
        document.getElementById('info').value=data.Info;
        GlobID = data.ID;
        return
    }
    let out =''
    out = '<div>';
    out += `<p>${data.Info}</p>`;
    out += '</div>';

    $('.goods-out').html(out);
}



function OpenDialog(){
    let cancelButton = document.getElementById('cancel');
    let AddDialog = document.getElementById('AddTree');

    AddDialog.showModal();

    cancelButton.addEventListener('click', function() {
        AddDialog.close();
    });
}
function DelitData(){
    $.post(
        "core_php/core.php",
        {
            "action" : "delit",
            "id" : GlobIDPer
        },

    );
    location.reload()
}
function AddData_Updata(){
    let Name = document.getElementById("name").value;
    let Info = document.getElementById("info").value;
    let myData = localStorage['objectToPass'];
    console.log(myData);
    if (Name == ""){
        alert("Password mismatch!");
        return;
    }
    if (checkupdate === 1){
        $.post(
            "core_php/core.php",
            {
                "action" : "udatadata",
                "name" : Name,
                "info" : Info,
                "id" : GlobID


            },

        );
        checkupdate = 0;
        location.reload();
        return
    }
    $.post(
        "core_php/core.php",
        {
            "action" : "insertdata",
            "name" : Name,
            "info" : Info,
            "iduser" : myData,
            "parent" : GlobIDPer
        },

    );
    location.reload()

}
let checkupdate = 0;

function Updata() {

    let Dialog = document.getElementById('AddTree');
    Dialog.showModal();
    checkupdate = 1;

    init(GlobIDPer);

}

function close(){
    let cancelButton = document.getElementById('cancel');
    cancelButton.addEventListener('click', function() {
        AddDialog.close();
    });
}


























