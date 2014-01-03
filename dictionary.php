<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
	$food = $_GET['food'];
	$foodArray = array('tuna','bacon','mcdonalds','beef','ham','meat');
	if (in_array($food, $foodArray))
		echo 'We do have '.$food.'!';
	elseif($food=='')
		echo 'Enter a food you idiot';
	else
		echo 'We dont have '.$food.'...';
echo '</response>';
?>