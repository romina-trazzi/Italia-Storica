<?php 
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    
    /* Se sono presenti i campi Name + Email + Subject + Messaggio
    Creiamo le variabili PHP raccogliendo i dati dal form HTML tramite l'attributo "name" */
    if ( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message']) ) {
        
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
    
        // Impostiamo il corpo della mail in arrivo formattandola con i caratteri di escape
        $body = "";
        $body .= "Messaggio da: $userName\r\n\nEmail: $userEmail\r\n\nOggetto: $messageSubject\r\n\n";
        $body .= "Testo: $message";
    
    }
        
    // Quando viene premuto il pulsante invio spedisci la mail
    if (isset($button)) {
        
        if (mail ($to, $messageSubject, $body, $headers)) {
            
            // Redirect
            $referer = $_SERVER ['HTTP_REFERER'];
            
            function redirect($url) {
                header('Location:'.$url);
                exit();
            }

            redirect($referer); 
    
        } else {
            
            echo ("Il server non è riuscito ad inviare la mail. Per favore $userName riprova.");  
        } 
        
    }     
        
?>
    
