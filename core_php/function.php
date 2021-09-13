<?php
function connect(){             //database connect
    $conn = mysqli_connect("localhost", "daniil", "root", "tehuzdevums");
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    return $conn;
}


function init(){            // take data from the database

    $conn = connect();
    $idt = $_POST['id'];
    $sql = "SELECT ID, Info, Name FROM `partitiontree` WHERE `ID` = $idt";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {

        $out = mysqli_fetch_assoc($result);
        echo json_encode($out);

    } else {
        echo "0";
    }
    mysqli_close($conn);
}
function delit(){//data deletion
    $conn = connect();
    $idtree = $_POST['id'];
    $sql = "DELETE FROM partitiontree WHERE ID = $idtree";
    mysqli_query($conn, $sql)
    or die('Error querying database.');


    mysqli_close($conn);
}

function insertuser(){//adding data
    $conn = connect();
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['pass'];
    $sql = "INSERT INTO users (`Name`, `E-mail`, `Password`) VALUES ('$name', '$email', '$password');";
    mysqli_query($conn, $sql)
    or die('Error querying database.');


    mysqli_close($conn);
}
function insertdata(){
    $conn = connect();
    $name = $_POST['name'];
    $info = $_POST['info'];
    $user = $_POST['iduser'];
    $par = $_POST['parent'];
    $sql = "INSERT INTO partitiontree(`Name`, `Info`,`IDUsers`,`parent`) VALUES ('$name', '$info', '$user','$par');";
    mysqli_query($conn, $sql)
    or die('Error querying database.');
    mysqli_close($conn);
}


function CheckUser(){
    $conn = connect();
    $email = $_POST['email'];
    $password = $_POST['pass'];
    $sql = "SELECT ID FROM users WHERE `E-mail` = '$email' and `Password` = '$password'";
    $result = $conn->query($sql);
    if (mysqli_num_rows($result) > 0) {

        $out = mysqli_fetch_assoc($result);
        echo json_encode($out);

    } else {
        echo "0";
    }
    mysqli_close($conn);
}

function udatadata(){
    $conn = connect();
    $name = $_POST['name'];
    $info = $_POST['info'];
    $user = $_POST['id'];

    $sql = "UPDATE partitiontree SET Name = '$name', Info = '$info' WHERE IDUser = '$user';";
    mysqli_query($conn, $sql)
    or die('Error querying database.');
    mysqli_close($conn);
}

































