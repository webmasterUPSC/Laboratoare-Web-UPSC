<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <title>Lab 11_Problema 9</title>
</head>
<body>

<h2>Lab 11_Problema 9</h2>

<?php
$matrice = [
    [1, -2, 3],
    [4, 5, -6]
];

$suma = 0;

foreach ($matrice as $linie) {
    foreach ($linie as $elem) {
        if ($elem > 0) {
            $suma += $elem;
        }
    }
}

echo "Suma elementelor pozitive: $suma <br>";

if ($suma % 2 == 1) {
    echo "Suma este număr IMPAR.";
} else {
    echo "Suma este număr PAR.";
}
?>

<p><a href="index.php">Înapoi</a></p>

</body>
</html>
