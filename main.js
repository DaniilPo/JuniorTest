function init() { //database login
    $.post(
        "php/core.php",
        {
            "action" : "init"
        },
        initprod

    );
}
let arrayChecked = [];
function initprod(data) {     //displaying data
    data = JSON.parse(data);
    console.log(data);
    var out='';
    arrayChecked = [];
    for (var ID in data) {
        arrayChecked[ID] = data[ID].id;
        out +='<div class="cart">';
        out +=`<input type="checkbox" id="${data[ID].id}" value=${data[ID].id} class="cbox">`;
        out +=`<p class="name">${data[ID].SKU}</p>`;
        out +=`<p class="name">${data[ID].name}</p>`;
        out +=`<p class="cost">${data[ID].price} $</p>`;
        out +=`<p class="name">${data[ID].type}</p>`;
        out +='</div>';
    }
    $('.goods-out').html(out);
}
$(document).ready(function () {
    init();

});

function delit() { //delit data
    for(var id in arrayChecked){
        var chbox;
        chbox=document.getElementById(arrayChecked[id]);
        if (chbox.checked) {
            console.log('hi');
            $.post(
                "php/core.php",
                {
                    "action" : "delit",
                    "idproduct" : arrayChecked[id]

                },
                init

            );
        }
        else {
            console.log('not hi');
        }
    }


}


