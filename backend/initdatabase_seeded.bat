@echo off
:: Armazenar o diretório atual (onde o script .bat está sendo executado)
set original_dir=%cd%

:: Exibir o diretório armazenado (opcional, apenas para verificação) echo Diretório original: %original_dir%

:: Mudar para o diretório do MySQL
cd C:\xampp\mysql\bin

:: Rodar o MySQL e importar o banco.sql (considerando que banco.sql está no mesmo diretório que o package.json)
mysql -u root -p < "%original_dir%\seedBanco.sql"

:: Voltar para o diretório original
cd /d %original_dir%

:: Exibir uma mensagem de sucesso echo Retornado ao diretório original: %original_dir%
echo Dados inseridos com sucesso
