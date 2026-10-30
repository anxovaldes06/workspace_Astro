
CREATE TABLE productos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    precio DECIMAL (10,2) NOT NULL,
    categoria VARCHAR(50) NOT NULL
    );

    INSERT INTO productos(nombre,precio,categoria) values
            ('teclado',20,'electronica'),
            ('raton',15,'electronica'),
            ('monitor',120,'electronica');
    
