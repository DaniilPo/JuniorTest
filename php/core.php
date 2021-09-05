<?php
$action = $_POST['action'];

require_once 'function.php';

switch ($action) {
    case 'init':        //database login
        init();
        break;
    case 'delit':         //deleting data from the database
        delit();
        break;
    case 'insert':         //adding data to the database
        insert();
        break;
    default:
}
