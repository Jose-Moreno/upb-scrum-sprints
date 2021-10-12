CREATE TABLE usuarios (
    id INTEGER NOT NULL,
    usuario VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    fecha_registro INTEGER DEFAULT 2021
);