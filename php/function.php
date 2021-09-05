<?php
function connect(){             //database connect
    $conn = mysqli_connect("localhost", "id17538262_daniil", "Retiop1234567890-", "id17538262_juniortest");
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    return $conn;
}

function init(){            // take data from the database

    $conn = connect();
    $sql = "SELECT * FROM product";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}
function delit(){//data deletion
    $conn = connect();
    $idprod = $_POST['idproduct'];
    $sql = "DELETE FROM product WHERE id = $idprod";
    mysqli_query($conn, $sql)
    or die('Error querying database.');


    mysqli_close($conn);
}

function insert(){//adding data
    $conn = connect();
    $SKU = $_POST['ProdSKU'];
    $Name = $_POST['ProdName'];
    $Price = $_POST['ProdPrice'];
    $Type = $_POST['Prodtype'];
    $sql = "INSERT INTO product (SKU, name, price, type)
VALUES ('$SKU', '$Name', '$Price', '$Type');";
    mysqli_query($conn, $sql)
    or die('Error querying database.');


    mysqli_close($conn);
}

