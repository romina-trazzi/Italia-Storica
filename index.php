<?php 
    // Impostiamo le variabili PHP raccogliendo i dati dal form HTML tramite l'attributo "name"
    $userName = $_POST['name'];  // proprietà name del campo del form nel file HTML
    $userEmail = $_POST['email']; // mail del visitatore del sito
    $messageSubject = $_POST['subject'];
    $message = $_POST['message'];
    $button = $_POST['submit_button'];

    // Aggiungiamo l'indirizzo mail del web master ricevente andrea.lombardi@hotmail.com
    $to = "romina.trazzi@posta.it"; 
    
    // Impostiamo il corpo della mail in arrivo
    $body = "";

    $body .= "Messaggio da " . $userName . "\r\n" ;
    $body .= "Email " . $userEmail . "\r\n";
    $body .= "Oggetto " . $messageSubject . "\r\n";
    $body .= "Testo " .$message . "\r\n";

    // se la variabile legata al bottone di invio del form è presente alias quando viene premuto il bottone
    if (isset ($button)) {

        // controlla se la variabile mail del destinatario è presente ed è diversa da campo vuoto
        if (isset ($userEmail) && !empty($userEmail)) {
            
            // spedisci il form
            mail($to, $messageSubject, $body); 
            
        }
        



    }
?> 

<hr>

<a href="index.html"> Torna alla home </a>
