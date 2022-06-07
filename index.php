<<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title> </title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>
        
        <?php 

            $from = $_POST['from'];  // proprietà name del campo del form nel file HTML
            $subject = $_POST['subject'];
            $email = $_POST['email'];
            $object = $_POST['object'];
            $body = $_POST['body'];
            
            echo $from . " " . $subject;
            
        ?>
        
        <a href="index.html"> Torna alla home </a>
       
    </body>
</html>


