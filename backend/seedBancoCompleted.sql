-- Insert values into tables

-- Inserir registros de exemplo
INSERT INTO CONSULTORIO.PACIENTE (NOME, DATA_NASCIMENTO, SEXO, EMAIL, PLANO_SAUDE, OBSERVACAO)
VALUES
  ('Carlos Oliveira', '1985-06-15', 'M', 'carlos.oliveira@email.com', 'S', 'Paciente com histórico de hipertensão'),
  ('Maria Souza', '1990-11-02', 'F', 'maria.souza@email.com', 'S', 'Paciente com histórico de diabetes');

-- Inserir registros de especialidades
INSERT INTO CONSULTORIO.ESPECIALIDADE (ID, NOME_ESPECIALIDADE, OBSERVACAO)
VALUES
  (1, 'Clínico Geral', 'Tratamento para pacientes com doenças gerais'),
  (2, 'Odontologia', 'Cuidados com a saúde bucal');

-- Inserir registros de doutores
INSERT INTO CONSULTORIO.DOUTOR (NOME, CRO, HORA_ENTRADA, HORA_SAIDA, OBSERVACAO)
VALUES
  ('Dr. João Silva', 12345, '08:00:00', '17:00:00', 'Especialista em clínica geral'),
  ('Dr. Paula Lima', 67890, '09:00:00', '18:00:00', 'Dentista especialista em odontologia');

-- Inserir especialidades dos doutores
INSERT INTO CONSULTORIO.ESPECIALIDADE_DOUTOR (doutor_CODIGO, especialidade_ID, OBSERVACAO)
VALUES
  (1, 1, 'Tratamento de doenças gerais'),
  (2, 2, 'Cuidados odontológicos');

-- Inserir registros de conta a receber
INSERT INTO CONSULTORIO.CONTA_RECEBER (VALOR)
VALUES
  (100.50),
  (200.75);

-- Inserir cargos
INSERT INTO CONSULTORIO.CARGO (DESCRICAO)
VALUES
  ('Médico'),
  ('Secretário');

-- Inserir registros de funcionários
INSERT INTO CONSULTORIO.FUNCIONARIO (NOME, cargo_ID, EMAIL, GERENTE, conta_receber_COD)
VALUES
  ('Ana Costa', 1, 'ana.costa@email.com', 'Carlos', 1),
  ('Roberto Silva', 2, 'roberto.silva@email.com', 'Carlos', 2);

-- Inserir agendamento de consulta
INSERT INTO CONSULTORIO.AGENDAMENTO_CONSULTA (CODIGO, DATA_CONSULTA, OBSERVACAO, Paciente_CODIGO, doutor_CODIGO)
VALUES
  (1, '2024-11-15 09:00:00', 'Consulta de rotina', 1, 1),
  (2, '2024-11-16 14:00:00', 'Consulta de emergência', 2, 2);

-- Inserir consulta
INSERT INTO CONSULTORIO.CONSULTA (DATA_CONSULTA, STATUS, OBSERVACAO_MEDICA, Paciente_CODIGO, agendamento_consulta_CODIGO, agendamento_consulta_Paciente_CODIGO, doutor_CODIGO, conta_receber_COD)
VALUES
  ('2024-11-15 09:00:00', 'AB', 'Paciente com pressão alta', 1, 1, 1, 1, 1),
  ('2024-11-16 14:00:00', 'AB', 'Paciente com dor de dente', 2, 2, 2, 2, 2);

-- Inserir histórico odontológico
INSERT INTO CONSULTORIO.HISTORICO_ODONTOLOGICO (consulta_COD, consulta_Paciente_CODIGO, PRONTUARIO)
VALUES
  (1, 1, 'Paciente com gengivite'),
  (2, 2, 'Paciente com cáries dentárias');
  
-- Inserir estoque
INSERT INTO CONSULTORIO.ESTOQUE (NOME, QTD, VALOR)
VALUES
  ('Escova de dentes', 100, 10.00),
  ('Coroa dental', 50, 150.00);

-- Inserir paciente estoque
INSERT INTO CONSULTORIO.PACIENTE_ESTOQUE (paciente_codigo, material_codigo, QTD)
VALUES
  (1, 1, 2),
  (2, 2, 1);
  

-- Inserir mais 30 registros de PACIENTE
INSERT INTO CONSULTORIO.PACIENTE (NOME, DATA_NASCIMENTO, SEXO, EMAIL, PLANO_SAUDE, OBSERVACAO)
VALUES
  ('Lucas Pereira', '1988-07-14', 'M', 'lucas.pereira@email.com', 'S', 'Paciente com histórico de asma'),
  ('Fernanda Santos', '1992-03-21', 'F', 'fernanda.santos@email.com', 'S', 'Paciente com histórico de alergias'),
  ('João Martins', '1985-05-30', 'M', 'joao.martins@email.com', 'N', 'Paciente sem histórico relevante'),
  ('Patrícia Silva', '1989-11-10', 'F', 'patricia.silva@email.com', 'S', 'Paciente com histórico de hipertensão'),
  ('Ricardo Alves', '1993-09-02', 'M', 'ricardo.alves@email.com', 'S', 'Paciente com diabetes tipo 2'),
  ('Juliana Costa', '1991-02-18', 'F', 'juliana.costa@email.com', 'N', 'Paciente com problemas de colesterol'),
  ('Eduardo Lima', '1987-08-05', 'M', 'eduardo.lima@email.com', 'S', 'Paciente com dores nas articulações'),
  ('Vanessa Rocha', '1990-12-25', 'F', 'vanessa.rocha@email.com', 'N', 'Paciente com histórico de doenças respiratórias'),
  ('Ricardo Oliveira', '1984-06-22', 'M', 'ricardo.oliveira@email.com', 'S', 'Paciente com histórico de AVC'),
  ('Carlos Silva', '1986-07-19', 'M', 'carlos.silva@email.com', 'N', 'Paciente saudável, sem histórico de doenças'),
  ('Beatriz Sousa', '1994-01-15', 'F', 'beatriz.sousa@email.com', 'S', 'Paciente com histórico de hipoglicemia'),
  ('Lucas Fernandes', '1992-08-04', 'M', 'lucas.fernandes@email.com', 'N', 'Paciente com problemas de visão'),
  ('Roberta Santos', '1990-09-30', 'F', 'roberta.santos@email.com', 'S', 'Paciente com histórico de doenças autoimunes'),
  ('Felipe Costa', '1993-11-12', 'M', 'felipe.costa@email.com', 'S', 'Paciente com histórico de problemas cardíacos'),
  ('Mariana Lima', '1988-10-10', 'F', 'mariana.lima@email.com', 'N', 'Paciente com transtornos alimentares'),
  ('Gabriel Almeida', '1987-03-25', 'M', 'gabriel.almeida@email.com', 'S', 'Paciente com histórico de gastrite'),
  ('Aline Pereira', '1991-07-08', 'F', 'aline.pereira@email.com', 'S', 'Paciente com histórico de sinusite'),
  ('Samuel Souza', '1985-04-16', 'M', 'samuel.souza@email.com', 'S', 'Paciente com histórico de enxaqueca'),
  ('Carla Martins', '1990-05-27', 'F', 'carla.martins@email.com', 'N', 'Paciente com transtorno de ansiedade'),
  ('Eduarda Oliveira', '1994-11-13', 'F', 'eduarda.oliveira@email.com', 'S', 'Paciente saudável'),
  ('Ricardo Pereira', '1992-01-22', 'M', 'ricardo.pereira@email.com', 'S', 'Paciente com doenças respiratórias'),
  ('Robson Costa', '1989-07-15', 'M', 'robson.costa@email.com', 'S', 'Paciente com histórico de alcoolismo'),
  ('Carolina Lima', '1993-03-18', 'F', 'carolina.lima@email.com', 'N', 'Paciente com histórico de obesidade'),
  ('Luiz Fernando', '1988-09-02', 'M', 'luiz.fernando@email.com', 'S', 'Paciente com problemas ortopédicos'),
  ('Camila Rocha', '1991-06-25', 'F', 'camila.rocha@email.com', 'S', 'Paciente com histórico de câncer'),
  ('Ana Beatriz', '1992-02-05', 'F', 'ana.beatriz@email.com', 'N', 'Paciente com problemas de digestão'),
  ('Bruno Souza', '1986-12-10', 'M', 'bruno.souza@email.com', 'S', 'Paciente com histórico de doenças cardíacas'),
  ('Tatiane Lima', '1990-03-29', 'F', 'tatiane.lima@email.com', 'S', 'Paciente com depressão'),
  ('Ricardo Silva', '1987-05-19', 'M', 'ricardo.silva@email.com', 'N', 'Paciente com hipertensão arterial'),
  ('Paula Almeida', '1994-04-21', 'F', 'paula.almeida@email.com', 'S', 'Paciente com histórico de doenças renais');

-- Inserir mais 30 registros de ESPECIALIDADE {{{ TEM ERRO DE CHAVE DUPLICADO POR ISSO ESTA COMENTADO }}}
-- INSERT INTO CONSULTORIO.ESPECIALIDADE (NOME_ESPECIALIDADE, OBSERVACAO)
-- VALUES
--   ('Cardiologia', 'Especialidade relacionada ao coração e sistema circulatório'),
--   ('Ortopedia', 'Tratamento de problemas ósseos e articulares'),
--   ('Neurologia', 'Cuidados com o sistema nervoso'),
--   ('Pediatria', 'Atendimento médico para crianças'),
--   ('Ginecologia', 'Especialista em saúde feminina'),
--   ('Oftalmologia', 'Tratamento de problemas nos olhos'),
--   ('Dermatologia', 'Cuidados com a pele'),
--   ( 'Otorrinolaringologia', 'Tratamento de doenças do ouvido, nariz e garganta'),
--   ( 'Psiquiatria', 'Tratamento de doenças mentais'),
--   ( 'Oncologia', 'Tratamento de câncer'),
--   ( 'Endocrinologia', 'Especialidade relacionada a hormônios'),
--   ( 'Reumatologia', 'Tratamento de doenças autoimunes e reumáticas'),
--   ( 'Hematologia', 'Tratamento de doenças do sangue'),
--   ( 'Geriatria', 'Cuidados médicos para idosos'),
--   ( 'Urologia', 'Tratamento de doenças do trato urinário e órgãos reprodutores masculinos'),
--   ( 'Fisioterapia', 'Reabilitação física'),
--   ( 'Infectologia', 'Tratamento de doenças infecciosas'),
--   ( 'Cirurgia Geral', 'Especialidade em procedimentos cirúrgicos gerais'),
--   ( 'Cirurgia Plástica', 'Procedimentos cirúrgicos estéticos'),
--   ( 'Anestesiologia', 'Especialista em anestesia e analgesia'),
--   ( 'Nefrologia', 'Tratamento de doenças renais'),
--   ( 'Gastroenterologia', 'Tratamento de doenças do sistema digestivo'),
--   ( 'Proctologia', 'Especialidade em doenças do reto e ânus'),
--   ( 'Fonoaudiologia', 'Tratamento de problemas de comunicação'),
--   ( 'Acupuntura', 'Tratamento com técnicas tradicionais chinesas'),
--   ( 'Medicina do Trabalho', 'Cuidados médicos relacionados ao ambiente de trabalho'),
--   ( 'Medicina de Família', 'Atendimento integral à saúde da família'),
--   ( 'Medicina Esportiva', 'Tratamento de lesões esportivas'),
--   ( 'Alergologia', 'Tratamento de alergias e intolerâncias alimentares'),
--   ( 'Nutrologia', 'Especialista em nutrição e dietas específicas');
