<?php
require '../vendor/autoload.php';
use Mailgun\Mailgun;

# First, instantiate the SDK with your API credentials
$mg = Mailgun::create('key-4eacdef0e417d4df705345ff3f0e0f99');

# Now, compose and send your message.
# $mg->messages()->send($domain, $params);
$mg->messages()->send('mg.baylorvrclub.com', [
  'from'    => 'baylorvrclub@gmail.com',
  'to'      => 'chasemanseth@gmail.com',
  'subject' => 'The PHP SDK is awesome!',
  'text'    => 'It is so simple to send a message.'
]);

?>
