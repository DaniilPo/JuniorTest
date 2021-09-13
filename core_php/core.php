<?php
$action = $_POST['action'];
$IDuser = 0;
require_once 'function.php';

switch ($action) {
    case 'init':        //database login
        init();
        break;
    case 'delit':         //deleting data from the database
        delit();
        break;
    case 'CheckUser':
        CheckUser();
        break;
    case 'insertuser':         //adding data to the database
        insertuser();
        break;
    case 'insertdata':         //adding data to the database
        insertdata();
        break;
    case "udatadata":
        udatadata();
        break;
    case "cooke":
        cooke();
        break;
    default:
}
