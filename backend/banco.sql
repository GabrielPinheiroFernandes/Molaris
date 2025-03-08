-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.32-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para consultorio
DROP DATABASE IF EXISTS `consultorio`;
CREATE DATABASE IF NOT EXISTS `consultorio` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */;
USE `consultorio`;

-- Copiando estrutura para tabela consultorio.consulta
DROP TABLE IF EXISTS `consulta`;
CREATE TABLE IF NOT EXISTS `consulta` (
  `COD` int(11) NOT NULL AUTO_INCREMENT,
  `DATA_CONSULTA` date NOT NULL,
  `HORA_CONULTA` time NOT NULL,
  `STATUS` char(2) NOT NULL DEFAULT 'PD' COMMENT 'AT = atendido | PD = pendente',
  `OBSERVACAO_MEDICA` varchar(500) DEFAULT NULL,
  `Paciente_CODIGO` int(11) NOT NULL,
  `doutor_CODIGO` int(11) NOT NULL,
  PRIMARY KEY (`COD`,`Paciente_CODIGO`,`doutor_CODIGO`) USING BTREE,
  KEY `fk_consulta_doutor1_idx` (`doutor_CODIGO`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela consultorio.doutor
DROP TABLE IF EXISTS `doutor`;
CREATE TABLE IF NOT EXISTS `doutor` (
  `CODIGO` int(11) NOT NULL AUTO_INCREMENT,
  `ID_USER` int(11) DEFAULT NULL,
  `NOME` varchar(45) DEFAULT NULL,
  `CRM` varchar(50) DEFAULT NULL,
  `HORA_ENTRADA` time DEFAULT NULL,
  `HORA_SAIDA` time DEFAULT NULL,
  `OBSERVACAO` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`CODIGO`) USING BTREE,
  UNIQUE KEY `ID_USER` (`ID_USER`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela consultorio.paciente
DROP TABLE IF EXISTS `paciente`;
CREATE TABLE IF NOT EXISTS `paciente` (
  `CODIGO` int(11) NOT NULL AUTO_INCREMENT,
  `ID_USER` int(11) DEFAULT NULL,
  `NOME` varchar(45) NOT NULL,
  `DATA_NASCIMENTO` date NOT NULL,
  `SEXO` char(1) NOT NULL,
  `PLANO_SAUDE` char(1) NOT NULL,
  `OBSERVACAO` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`CODIGO`),
  UNIQUE KEY `ID_USER` (`ID_USER`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela consultorio.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `EMAIL` varchar(50) NOT NULL,
  `PASSWORD` varchar(50) NOT NULL,
  `TOKEN` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE,
  UNIQUE KEY `EMAIL` (`EMAIL`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Exportação de dados foi desmarcado.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
