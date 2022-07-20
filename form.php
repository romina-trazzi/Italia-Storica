<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Php form contact</title>
    </head>
    <body>

        <?php 
        
            // Creiamo le variabili PHP raccogliendo i dati dal form HTML tramite l'attributo "name"
            // Se la variabile legata al bottone di invio del form è presente, alias quando viene premuto il bottone
            // + se sono presenti i campi Name + Email + Subject + Messaggio
            if ( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message']) && isset($_POST['submit_button']) ) {
                
                $userName = $_POST['name'];  // proprietà name del campo del form nel file HTML
                $userEmail = $_POST['email']; // mail del visitatore del sito
                $messageSubject = $_POST['subject'];
                $message = $_POST['message'];
                $button = $_POST['submit_button'];
                
                // Aggiungiamo l'indirizzo mail del web master ricevente andrea.lombardi@hotmail.com
                $to = "romina.trazzi@posta.it"; 

                // Creiamo altre variabili php per impostare la funzione mail
                $from = $userEmail;

                // Impostiamo l'headers della mail in arrivo
                $headers = "From: $from";
                
                // Impostiamo il corpo della mail in arrivo
                $body = "";
                $body .= "<b>" . "Messaggio da: " . "</b>" . "$userName ". "<br>";
                $body .= "<b>" . "Email: " . "</b>" . "$userEmail" . "<br>";
                $body .= "<b>" . "Oggetto: " . "</b>" . "$messageSubject" . "<br>";
                $body .= "<p> <b>" ."Testo: " . "</b>" . "$message" . "</p>";
                
                // Spedisci la mail
                if (mail ($to, $messageSubject, $body, $headers)) {
                    
                    echo "<br> success";                  
                    // header('Location: https://piattaformaviola.com/piattaformaviola.com/italiastorica/index.html');
                    // exit
                } else {

                    echo("Il server non è riuscito ad inviare la mail. Per favore $userName riprova.");
                }

            };
            
           
            
        ?> 

    </body>
</html>


