<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <title>Lab 10_Problema 12a</title>
</head>
<body>

<h2>Lab 10_Problema 12a</h2>

<?php
$vector = [3, 8, 12, 5, 20, 7];
$maxPar = null;

foreach ($vector as $v) {
    if ($v % 2 == 0) {
        if ($maxPar === null || $v > $maxPar) {
            $maxPar = $v;
        }
    }
}

echo "Vectorul: ";
print_r($vector);
echo "<br>";

if ($maxPar !== null) {
    echo "Maximul elementelor pare: $maxPar";
} else {
    echo "Nu există elemente pare.";
}
?>

<p><a href="index.php">Înapoi</a></p>

</body>
</html>
