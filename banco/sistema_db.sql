
CREATE DATABASE IF NOT EXISTS sistema_db;
USE sistema_db;

SELECT * FROM users;


CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

INSERT INTO usuarios (nome, email) VALUES
('Ana Silva', 'ana@example.com'),
('Carlos Souza', 'carlos@example.com'),
('Beatriz Lima', 'beatriz@example.com');
