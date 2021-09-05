let type = "";
$( "select" )                //push trigger
    .change(function() {
        $( "select option:selected" ).each(function() {
            type += $( this ).text();
        });
        productType();
    })
    .trigger( "change" );

function productType() {               //type selection
    var out='';
    switch (type) {
        case "DVD":
            out +='<div>';
            out +=`<p>Size(MB)<input type="number" id="size"></p>`;
            out +='</div>';
            break;
        case "Furniture":
            out +='<div>';
            out +=`<p>Height(CM)<input type="number" id="height"></p>`;
            out +=`<p>Width(CM)<input type="number" id="width"></p>`;
            out +=`<p>Length(CM)<input type="number" id="length"></p>`;
            out +='</div>';
            break;
        case "Book":
            out +='<div>';
            out +=`<p>Weight(KG)<input type="number" id="weight"></p>`;
            out +='</div>';
            break;
        default:
            console.log("Bad News");
            break;
    }
    $('.out-new-product').html(out);
}

function Addprod() {               //adding a new product
    let typest = ''
    let NSKU = document.getElementById("sku").value;
    let NName = document.getElementById("name").value;
    let NPrice = document.getElementById("price").value;
    if (isNaN(NPrice)){
        alert("Please, provide the data of indicated type");
        return;
    }
    if (NSKU == '' || NName == '' || NPrice == ''){
        alert("Please, submit required data");
        return;
    }
    switch (type) {
        case "DVD":
            typest = document.getElementById("size").value ;
            if (typest == ''){
                alert("Please, submit required data");
                return;
            }else{
                typest += "mb";
            }
            break;
        case "Furniture":
            let height = document.getElementById("height").value;
            let width = document.getElementById("width").value;
            let length = document.getElementById("length").value;
            if (height == '' || width == '' || length == ''){
                alert("Please, submit required data");
                return;
            }
            typest += height + "x" + width + "x" + length;
            break;
        case "Book":
            typest = document.getElementById("weight").value;
            if (typest == ''){
                alert("Please, submit required data");
                return;
            }else{
                typest += "KG";
            }
            break;
        default:
            alert("Please, provide the data of indicated type");
            return;
    }

    $.post(
        "php/core.php",
        {
            "action" : "insert",
            "ProdSKU" : NSKU,
            "ProdName" : NName,
            "ProdPrice" : NPrice,
            "Prodtype" : typest
        },

    );
    window.location.href='index.html';
}
