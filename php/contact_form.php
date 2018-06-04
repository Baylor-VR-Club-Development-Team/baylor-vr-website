<?php
require '../vendor/autoload.php';
use Mailgun\Mailgun;

$email = $_POST['email']; 
$name = $_POST['name']; 
$message = $_POST['message']; 
# First, instantiate the SDK with your API credentials 
$mg = Mailgun::create('key-4eacdef0e417d4df705345ff3f0e0f99'); 
# Now, compose and send your message. # $mg->messages()->send($domain, $params); 
$mg->messages()->send('mg.baylorvrclub.com', 
                      [ 'from' => $email, 
                       'to' => 'chasemanseth@gmail.com', 
                       'subject' => 'New Email from' . $name, 
                       'text' => $message ]);
header("Location: http://bvr.manseth.com/?sent=true"); /* Redirect browser */ 
exit();

?>
