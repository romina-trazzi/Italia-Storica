<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
    </head>


    <body>
        
        <?php> 

            $from = $_POST['from'];  // proprietà name del campo del form nel file HTML
            $subject = $_POST['subject'];
            $email = $_POST['email'];
            $body = $_POST['body'];
            
            echo $from . " " . $subject . " " . $email . " " . $body;
            
        ?>

        <hr>

        <a href="index.html"> Torna alla home </a>
       
    </body>
</html>


