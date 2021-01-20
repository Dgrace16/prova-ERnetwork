CREATE DATABASE PROVA_DOUGLAS;

USE PROVA_DOUGLAS;

CREATE TABLE cidade(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    codigo_cid varchar(250),
    nome_cid varchar(300) NOT NULL,
    uf char(2) NOT NULL
);


CREATE TABLE cliente(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    codigo_cli varchar(250),
    nome_cli varchar(500) NOT NULL,
    sexo varchar(9) NOT NULL,
    rg varchar(12) NOT NULL,
    cpf char(14) UNIQUE NOT NULL,
    dt_nascimento char(10) NOT NULL, 
    salario float,
    fk_cid int, 
    FOREIGN KEY (fk_cid) REFERENCES cidade(id)
);

insert into cidade (codigo_cid,nome_cid,uf)
values ("CIDSP002","Barretos","SP"),
	("CIDSP015","Franca","SP"),
	("CIDSP070","Rifaina","SP"),
	("CIDMG351","Itau","MG");
    
insert into cliente (codigo_cli,nome_cli,sexo,rg,cpf,dt_nascimento,salario,fk_cid)
Values("CL01","Luiz Henrique Neto","Masculino","50.851.552-X","444.555.666-18","21/12/1992",3000.00,1),
("CL02","Brenda Neri Sousa","Feminino","44.589.147-9","465.145.365-14","29/03/2001",1500.00,3),
("CL03","Luiza Ferreira da Silva","Feminino","36.741.658-8","462.424.258-13","31/08/1997",6000.00,2),
("CL04","Aparecida Oliveira","Feminino","69.147.589-4","445.154.154-18","29/06/2000",500.00,4),
("CL05","Maria Almeida","Feminino","41.985.258-9","452.965.984-21","15/11/1998",4000.00,1),
("CL06","Marco Toledo ","Masculino","25.665.145-3","640.654.785-17","19/12/1982",3600.00,4),
("CL07","Geane Nascimento","Feminino","36.654.657-3","502.785.465-12","24/08/1993",4900.00,2),
("CL08","Antonio Caetano","Masculino","65.364.147-5","603.357.154-31","14/03/1985",3650.00,4),
("CL09","Alessandro Nogueira","Masculino","85.785.478-4","301.148.357-54","04/08/1968",1480.00,1),
("CL10","Paola Oliveira Martins","Feminino","47.548.321-5","306.365.147-31","02/05/1992",3690.00,3),
("CL11","Giovanni Liboni","Masculino","42.654.214-X","600.985.586-53","09/01/1995",1580.00,3),
("CL12","Ana Carolina Silvestre ","Feminino","78.321.152-4","599.286.145-73","10/07/1994",3150.00,2),
("CL13","Elisa Santos","Feminino","55.486.478-5","544.197.147-78","30/09/1985",10000.00,2),
("CL14","Camila de Souza","Feminino","45.965.854-6","356.371.369-17","08/10/2002",9000.00,1),
("CL15","Roberto Rocha","Masculino","46.546.465-8","456.793.456-25","21/04/2000",4520.00,4),
("CL16","Fabio Assunção","Masculino","36.258.155-2","365.831.357-12","06/02/1993",5120.00,1),
("CL17","Daniele Cardoso","Feminino","78.852.632-7","445.279.159-31","17/04/1994",5000.00,3),
("CL18","Alberto Menezes","Masculino","75.369.458-6","586.671.147-24","12/03/1997",3840.00,2),
("CL19","Marcelo Madureira","Masculino","24.357.652-5","441.482.787-57","24/12/1995",7560.00,4),
("CL20","Joana Gabriela Freitas","Feminino","67.468.145-1","336.147.369-87","16/11/2000",2100.00,1);

-- 1. Trazer todos os registros de CIDADE e CLIENTE (2 QUERY)
-- 2. Trazer apenas o primeiro registro de CIDADE e CLIENTE
-- 3. Todos os CLIENTES que comecem com a letra A
-- 4. Todos os CLIENTES que terminem com SILVA
-- 5. Qual o maior salário do CLIENTE
-- 6. A média de salário agrupado por SEXO
-- 7. O maior salário agrupado pela CIDADE
-- 8. Trazer todos os CLIENTES exibindo seus dados e de sua CIDADE

-- 1 --

SELECT * FROM cidade;
SELECT * FROM cliente;

-- 2 --

SELECT * FROM cidade limit 1;
SELECT * FROM cliente limit 1;

-- 3 --

SELECT * FROM Cliente WHERE nome_cli LIKE 'A%';

-- 4 --

SELECT * FROM cliente WHERE nome_cli LIKE '%Silva';

-- 5 --

SELECT * FROM cliente WHERE salario = (SELECT MAX(salario) FROM cliente);
-- 6 --

SELECT sexo,AVG(salario) FROM cliente group by sexo;

-- 7 --

SELECT fk_cid,AVG(salario) FROM cliente group by fk_cid;

-- 8 --
