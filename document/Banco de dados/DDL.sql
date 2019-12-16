CREATE DATABASE XepaDigital;
USE XepaDigital;

CREATE TABLE Usuario
(
    IdUsuario int identity primary key,
    NomeUsuario varchar (255) not null,
    EmailUsuario varchar (255) unique not null,
    SenhaUsuario varchar (20) not null,
    ReceberNotif bit DEFAULT (0),
    Documento varchar (20),
    ImgPerfil varchar (255),
    Telefone1 varchar (15),
    Telefone2 varchar (15),
    TipoUsuario varchar (20),
    SobreColab Text,
    FazEntrega bit DEFAULT (0),
    RazaoSocial varchar (255)
);

CREATE TABLE Produto
(
    IdProduto int identity primary key,
    NomeProduto varchar (255) not null,
    ImgProduto varchar (255),
    DescricaoProduto varchar (255),
    Disponibilidade numeric(10,1),
    Organico bit DEFAULT (0),
    Preco numeric(10,2),
    Validade datetime,
);

CREATE TABLE Endereco
(
    IdEndereco int identity primary key,
    Endereco varchar (255),
    Numero varchar (10),
    CEP varchar (9),
    Cidade varchar (255),
    Bairro varchar (255),
    Estado char (2),
    IdUsuario int foreign key references Usuario(IdUsuario)
);

CREATE TABLE Receita
(
    IdReceita int identity primary key,
    NomeReceita varchar (255) not null,
    ImgReceita varchar (255),
    DescricaoIngrediente text,
    DescricaoPreparo text,
    IdUsuario int foreign key references Usuario(IdUsuario)
);

CREATE TABLE RegistroProduto
(
    IdRegistro int identity primary key,
    IdProduto int foreign key references Produto(IdProduto),
    IdUsuario int foreign key references Usuario(IdUsuario)
);

CREATE TABLE ReservaProduto
(
    IdReserva int identity primary key,
    QuantidadeReserva numeric(10,1) not null,
    Situacao varchar (50),
    IdRegistro int foreign key references RegistroProduto(IdRegistro),
    IdUsuario int foreign key references Usuario(IdUsuario)
);