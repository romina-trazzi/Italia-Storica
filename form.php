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
        
        // Aggiungiamo l'indirizzo mail del web master ricevente 
        $to = "italiastorica@hotmail.com"; 
       
        
        // Creiamo altre variabili php per impostare la funzione mail
        $from = $userEmail;
        
        // Questo headers ci permette di inviare mail in formato HTML
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=UTF-8\r\n";
        
        // Impostiamo l'headers dell'autore della mail in arrivo
        $headers .= "From: $from";
        
        // Impostiamo il corpo della mail in arrivo formattandola con i caratteri di escape
        $body = "";
        $body .= "<b>Messaggio da:</b> $userName <br><br>";
        $body .= "<b>Email:</b> $userEmail <br><br>";
        $body .= "<b>Oggetto:</b> $messageSubject <br>";
        $body .= "<p><b>Testo:</b> $message </p>";
        
    }
    
    // Quando viene premuto il pulsante invio spedisci la mail
    if (isset($button)) {
        
        if (mail ($to, $messageSubject, $body, $headers)) {
            
            // Redirect
            $referer = $_SERVER ['HTTP_REFERER'];
            
            function redirect($url) {
                header('Location:'.$url, true, 200);
                exit();
            }

            redirect($referer); 
    
        } else {
            
            echo ("Il server non è riuscito ad inviare la mail. Per favore $userName riprova.");  
        } 
        
    }     
        
?>
    
