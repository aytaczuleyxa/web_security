<?php
include 'db.php';

$name = $_GET['bookName']; 
$lang = $_GET['bookLang']; // Saytdan gələn dil seçimi

// Həm adı, həm də dili yoxlayan ZƏİF sorğu
$sql = "SELECT * FROM kitablar WHERE name LIKE '%$name%' AND lang = '$lang'";

$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<div class='book-card'>
                <h3>" . $row["name"] . "</h3>
                <p>Dil: " . $row["lang"] . "</p>
              </div>";
    }
} else {
    echo "Uyğun kitab tapılmadı.";
}
?>
