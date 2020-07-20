<?php 
    $to = 'info@catistudio.gr'; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $contactName = $_POST['contactName'];
    $subject = 'Contact form request from ' . $contactName;
    $subject2 = "Catistudio received your message";
    $message = $contactName . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "We have received your message and we will contact you shortly";


  $headers = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\n";
  $headers .= "From: <".$from.">\n";
  $headers .= "X-Priority: 1\n";
//   $message='<div style=" width:700px; margin:0 auto; border:1px solid #e2e2e2; padding:20px;">
//     <h3>Contact mail:</h3>'. $message .'</div>';

  $headers2 = "MIME-Version: 1.0\n";
  $headers2 .= "Content-type: text/html; charset=iso-8859-1\n";
  $headers2 .= "From: <".$to.">\n";
  $headers2 .= "X-Priority: 1\n";

    if (mail($to,$subject,$message,$headers)) {
        echo "Mail Sent to our account";  
    }
    if (mail($from,$subject2,$message2,$headers2)) {
      echo "Mail Sent. Thank you " . $contactName . ", we will contact you shortly.";
    }
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    
?>
