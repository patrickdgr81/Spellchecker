<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
	$word = $_GET['word'];
	$wordArray = array('tuna','bacon','mcdonalds','beef','ham','meat');
	if (in_array($word, $wordArray))
		echo $word.' is a word!';
	elseif($word=='')
		echo 'Enter a word';
	else
		echo $word.' is not a word';
echo '</response>';
?>