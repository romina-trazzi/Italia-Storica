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

    // Se la variabile legata al bottone di invio del form è presente alias quando viene premuto il bottone
    
    // if (isset ($button)) {

        // // Spedisci il form
        // mail($to, $messageSubject, $body); 

        // // Ritorna a index.html
        // header("Location: index.html");

   // } 

 
?> 

