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

-- Copiando dados para a tabela consultorio.consulta: ~5 rows (aproximadamente)
DELETE FROM `consulta`;
INSERT INTO `consulta` (`COD`, `DATA_CONSULTA`, `HORA_CONULTA`, `STATUS`, `OBSERVACAO_MEDICA`, `Paciente_CODIGO`, `doutor_CODIGO`) VALUES
	(78, '2025-03-07', '20:11:10', 'PD', NULL, 69, 76),
	(79, '2024-12-01', '00:00:00', 'PD', 'Consulta de rotina, sem alterações no quadro clínico.', 70, 76),
	(80, '2024-12-01', '00:00:00', 'PD', 'Consulta de rotina, sem alterações no quadro clínico.', 70, 76),
	(81, '2024-12-01', '00:00:00', 'PD', 'Consulta de rotina, sem alterações no quadro clínico.', 70, 76),
	(82, '2024-12-01', '00:00:00', 'PD', 'Consulta de rotina, sem alterações no quadro clínico.', 70, 76);

-- Copiando dados para a tabela consultorio.doutor: ~7 rows (aproximadamente)
DELETE FROM `doutor`;
INSERT INTO `doutor` (`CODIGO`, `ID_USER`, `NOME`, `CRM`, `HORA_ENTRADA`, `HORA_SAIDA`, `OBSERVACAO`) VALUES
	(76, 1, 'dr.Junior fernandes', '123456/SP', '08:00:00', '20:00:00', NULL),
	(77, NULL, 'dra roberta juinior', NULL, '18:00:00', '03:00:00', 'doutor especializado em odontologia.'),
	(78, NULL, 'dra roberta juinior', NULL, '18:00:00', '03:00:00', 'doutor especializado em odontologia.'),
	(79, NULL, 'dra roberta juinior', NULL, '18:00:00', '03:00:00', 'doutor especializado em odontologia.'),
	(80, NULL, 'dra roberta juinior', NULL, '18:00:00', '03:00:00', 'doutor especializado em odontologia.'),
	(81, NULL, 'dra roberta juinior', NULL, '18:00:00', '03:00:00', 'doutor especializado em odontologia.'),
	(82, NULL, 'dra roberta juinior', NULL, '18:00:00', '03:00:00', 'doutor especializado em odontologia.'),
	(83, 0, NULL, '18:00:00', '03:00:00', '00:00:00', NULL),
	(111, 5, 'dra roberta juinior', NULL, '18:00:00', '03:00:00', 'doutor especializado em odontologia.'),
	(113, 6, 'dra roberta juinior', NULL, '18:00:00', '03:00:00', 'doutor especializado em odontologia.');

-- Copiando dados para a tabela consultorio.paciente: ~3 rows (aproximadamente)
DELETE FROM `paciente`;
INSERT INTO `paciente` (`CODIGO`, `ID_USER`, `NOME`, `DATA_NASCIMENTO`, `SEXO`, `PLANO_SAUDE`, `OBSERVACAO`) VALUES
	(69, 2, 'benedito costa junior bnarros', '2005-03-07', 'M', 'S', NULL),
	(70, 3, 'Robert Romario', '1990-05-10', 'M', 'A', 'Cliente com histórico de hipertensão.'),
	(81, 4, 'João Silva', '1990-05-10', 'M', 'A', 'Cliente com histórico de hipertensão.');

-- Copiando dados para a tabela consultorio.user: ~3 rows (aproximadamente)
DELETE FROM `user`;
INSERT INTO `user` (`ID`, `EMAIL`, `PASSWORD`, `TOKEN`) VALUES
	(1, 'doctor@hotmail.com', '123', NULL),
	(2, 'paciente@hotmail.com', '123', NULL),
	(3, 'paciente2@hotmail.com', '123', NULL),
	(27, 'pateta4@hotmail.com', '123', NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
