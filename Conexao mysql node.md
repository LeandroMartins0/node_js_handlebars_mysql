Acessar o banco de dados:
mysql -h 'servidor' -u 'usuario' -p
Exemplo: mysql -h localhost -u root -p
Em seguida digitar a senha do usuário root no banco de dados.

Listar as base de dados:
SHOW DATABASES;

Criar base de dados:
CREATED DATABASE 'nome_da_base_dados';
Exemplo: CREATED DATABASE celke;

Acessar a base de dados:
USE 'nome_da_base_dados';
Exemplo: USE celke;

Criar nova tabela:
CREATED TABLE 'nome_tabela' (coluna1, coluna2,...);
Exemplo: CREATED TABLE users (nome VARCHAR(220), email VARCHAR(220);

Listar as tabelas da base de dados:
SHOW TABLES;

Cadastrar registro no banco de dados:
INSERT INTO 'nome_tabela' (coluna1, coluna2) VALUES ('valor1_coluna1', 'valor_coluna2');
Exemplo: INSERT INTO users (nome, email) VALUES ('Cesar', 'cesar@celke.com.br');

Listar registros da tabela:
SELECT * FROM 'nome_tabela';
Exemplo: SELECT * FROM users;

Criar usuário: 
CREATE USER 'novousuario'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
CREATE USER 'foo'@'localhost' IDENTIFIED WITH mysql_native_password BY 'bar';

Liberar permissão para acessar a base de dados:
GRANT ALL PRIVILEGES ON * . * TO 'foo'@'localhost';

Uma vez finalizadas as permissões que você quer definir para os seus novos usuários, certifique-se sempre de recarregar todos os privilégios.
FLUSH PRIVILEGES;