use apiform;

create table ciudades (
    id_ciudad int auto_increment primary key,
    nombre_ciudad varchar(100) not null
);
insert into ciudades(nombre_ciudad) values ('Bucaramanga'),('Floridablanca'), ('Giron');
insert into genero(nombre_genero) values ('Masculino'),('Femenino');
select * from ciudades;
DELETE FROM ciudades;
insert into usuarios(nombre, apellido, telefono, documento, id_ciudad, id_genero) values 
        ('Julian','Araque','3138891751','1038868208','5','1');
        
SELECT * FROM ciudades WHERE id_ciudad = 2;
        

create table genero (
    id_genero int auto_increment primary key,
    nombre_genero varchar(50) not null
);

create table lenguaje (
    id_lenguaje int auto_increment primary key,
    nombre_lenguaje varchar(100) not null
);

SELECT 'ciudad' AS criterio, COUNT(*) AS total FROM usuarios WHERE id_ciudad = 5
UNION ALL
SELECT 'genero' AS criterio, COUNT(*) AS total FROM usuarios WHERE id_genero = 1;

create table usuarios (
    id int auto_increment primary key,
    nombre varchar(100) not null,
    apellido varchar(100) not null,
    telefono varchar(20),
    documento varchar(50),
    nombre_usuario varchar(100),
    id_ciudad int,
    id_genero int,
    foreign key (id_ciudad) references ciudades(id_ciudad),
    foreign key (id_genero) references genero(id_genero)
);

create table lenguaje_usuario (
    id_usuario int,
    id_lenguaje int,
    primary key (id_usuario, id_lenguaje),
    foreign key (id_usuario) references usuarios(id),
    foreign key (id_lenguaje) references lenguaje(id_lenguaje)
);

