# SQL Injection Vulnerability Lab: Kitab Dünyası Portalı

## 📌 Layihə Haqqında
Bu layihə, veb tətbiqlərdə ən çox rast gəlinən təhlükəsizlik boşluqlarından biri olan **SQL Injection** zəifliyini praktiki olaraq nümayiş etdirmək üçün hazırlanmışdır. Layihə çərçivəsində sadə bir PDF kitab axtarış portalı yaradılmış və bu portal üzərində verilənlər bazasına icazəsiz giriş manipulyasiyası simulyasiya edilmişdir.

## 🛠 Texnologiya Steki
* **Front-end:** HTML5, CSS3 (Glassmorphism design), JavaScript (Vanilla)
* **Back-end:** PHP
* **Verilənlər Bazası:** MySQL (MariaDB)
* **Server mühiti:** XAMPP / Apache

## 🛡 Laboratoriya Mühitinin Qurulması
1. XAMPP panelində **Apache** və **MySQL** servislərini başladın.
2. Layihə fayllarını `C:/xampp/htdocs/kitab_portali` qovluğuna yerləşdirin.
3. `phpMyAdmin` panelinə daxil olaraq `database.sql` faylındakı sorğuları icra edin.
4. Brauzerdə `localhost/kitab_portali/task2.html` ünvanına keçid edin.

## ⚠️ Zəifliyin İzahı (SQL Injection)
Tətbiqdəki əsas problem `search.php` faylında istifadəçi tərəfindən daxil edilən məlumatların birbaşa SQL sorğusuna ötürülməsidir. 

**Zəif kod parçası:**
```php
$sql = "SELECT * FROM kitablar WHERE name LIKE '%$name%' AND lang = '$lang'";
