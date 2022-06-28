<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php 
        
        // Creiamo le variabili PHP raccogliendo i dati dal form HTML tramite l'attributo "name"
        $userName = $_POST['name'];  // proprietà name del campo del form nel file HTML
        $userEmail = $_POST['email']; // mail del visitatore del sito
        $messageSubject = $_POST['subject'];
        $message = nl2br ($_POST['message']);
        $button = $_POST['submit_button'];
        
        // Se la variabile legata al bottone di invio del form è presente, alias quando viene premuto il bottone
        // + se sono presenti i campi Name + Email + Subject + Messaggio
        if   ( isset($userName) && isset($userEmail) && isset($messageSubject) && isset($message) && isset($button) ) {
            
            // Aggiungiamo l'indirizzo mail del web master ricevente andrea.lombardi@hotmail.com
            $to = "romina.trazzi@posta.it"; 

            // Creiamo altre variabili php per impostare la funzione mail
            $from = $userEmail;
           
            // Impostiamo l'headers della mail in arrivo
            $headers = "From: $from";
            $headers .= "MIME-Version: 1.0";
            $headers .= "Content-type: text/html; charset=iso-8859-1";
            
            // Impostiamo il corpo della mail in arrivo
            $body = "";
            $body .= '<b>Messaggio da:</b>' . $userName;
            $body .= '<br><b>Email:</b>' . $userEmail;
            $body .= '<br><b>Oggetto:</b>' . $messageSubject;
            $body .= '<p><b>Testo:</b>' . $message . '</p>';

            // Spedisci il form
            if (mail ($to, $messageSubject, nl2br($body), nl2br($headers))) {
                // echo nl2br("Mail inviata. \n Grazie $userName per averci contattato.");
                
                // Ritorna a index.html
                header("Location: index.html");

            } else {
                echo("Il server non è riuscito ad inviare la mail. Per favore $userName riprova.");

            }

        };
    ?> 

</body>
</html>





