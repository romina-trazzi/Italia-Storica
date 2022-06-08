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
            $email = $_POST['email']; // mail del visitatore del sito
            $body = $_POST['body'];
            $to = "romina.trazzi@posta.it"; // mail del webmaster ricevente

            $message = "Messaggio da $from (email: $email).";
            
            echo $from . " " . $subject . " " . $email . " " . $body;

            mail($to, $subject, $message); //andrea.lombardi@hotmail.com

            
        ?> 

        <hr>

        <a href="index.html"> Torna alla home </a>
       
    </body>
</html>


