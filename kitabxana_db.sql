CREATE DATABASE IF NOT EXISTS kitabxana_db;
USE kitabxana_db;

CREATE TABLE IF NOT EXISTS kitablar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    author VARCHAR(255)
);

INSERT INTO kitablar (name, author) VALUES 
('Sefiller', 'Viktor Huqo'),
('1984', 'George Orwell'),
('Anne Karenina', 'Lev Tolstoy'),
('Martin Iden', 'Cek London'),
('İnsan nədir', 'Mark Tven'),
('Drakula', 'Brem Stoker'),
('Cinayet ve Ceza', 'Fyodor Dostoyevski');
