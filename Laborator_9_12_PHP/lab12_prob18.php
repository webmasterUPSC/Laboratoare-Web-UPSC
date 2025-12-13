<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <title>Lab 12_Problema 18</title>
</head>
<body>

<h2>Lab 12_Problema 18</h2>

<?php
$text = "programare";
$litera = "a";

$poz = strpos($text, $litera);

echo "Text: $text <br>";
echo "Literă: $litera <br>";

if ($poz !== false) {
    echo "Prima poziție a literei este: " . ($poz + 1);
} else {
    echo "Litera nu se găsește în text.";
}
?>

<p><a href="index.php">Înapoi</a></p>

</body>
</html>
