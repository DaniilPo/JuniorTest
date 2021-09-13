<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<dialog id="AddTree" class="blockD">
    <form method="dialog">
        <section>
            <p class="text">Name</p>
            <input type="text" id="name">
            <p class="text">Info</p>
            <textarea rows="7" name="message" id="info"></textarea>
        </section>
        <menu>
            <button onclick="close()" id="cancel" type="reset">Cancel</button>
            <button onclick="AddData_Updata()">Confirm</button>
        </menu>
    </form>
</dialog>
<h1>Tree</h1>
<main>
    <div class="goods-out-top"></div>
</main>
<p class="text">
    <button onclick="OpenDialog()">ADD</button>
    <button onclick="Updata()">Editing</button>
    <button onclick="DelitData()">Delete</button>
</p>
<div class="treeblock">
<?php
include( "core_php/function.php" );
function show_tree($ParentID)

{
    $conn = connect();
    $sql="SELECT ID, Name, parent FROM partitiontree WHERE parent= $ParentID;";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {

        echo '<ul>';

        while ($row = mysqli_fetch_array($result)) {

            echo '<li><button class="tree" onclick="init(id)" id = "'.$row['ID'].'">'.$row['Name'].'</button></li>';

            show_tree ($row['ID']);

        }

        echo '</ul>';

    }
    mysqli_close($conn);
}
show_tree(0);



?>
</div>
<main>
    <div class="goods-out"></div>
</main>
<script src="js/jquery-3.6.0.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>
