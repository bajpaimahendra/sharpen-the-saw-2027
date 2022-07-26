#### Q1- What is difference between dattime and timestamp datatype in mysql ?
	https://blog.sqlauthority.com/2014/02/14/mysql-when-to-use-timestamp-or-datetime-difference-between-timestamp-or-datetime/
	http://www.tech-recipes.com/rx/22599/mysql-datetime-vs-timestamp-data-type/
	
	1- TIMESTAMP data type values are converted from current time zone to UTC for storage, 
		and from UTC to the current time zone for retrieval.
		( means always stores in UTC )
	2- The datetime values are unchanged in relation to time zone.
		because it's stores according to timezone of DB settings

	Note : if your application is timezone independent, you should use TIMESTAMP. (e.g forum)

#### Q - What is the difference between Primary key and Unique key ?
	
	Both are used to uniquly identify a row.
	but primary key must not NULL.
	and unique key may be NULL.
	A table can have multiple UNIQUE key but  can only one PRIMARY key.
	Primary Key creates a clustered index of column where as an Unique creates unclustered index of column

#### Q - What is the difference between primary key and candidate key ?
	Primary Key is also a candidate key.
	By common convention, candidate key can be designated as primary and which can be used for any foreign key references.


#### Q - What are indexes in a Database. What are the types of indexes ?
	Indexes are the quick references of data for fast data retrieval  from a database.
	There are two different kinds of indexes.
	
	Clustered Index
	1- Only one per table.
	2- Faster to read than non clustered as data is physically stored in index order.
	
	Non­clustered Index
	1- Can be used many times per table.
	2- Quicker for insert and update operations than a clustered index.
	
#### Q - How many TRIGGERS are possible in MySql ?
	There are only six triggers are allowed to use in MySQL database and they are.
	1- Before Insert
	2- After Insert
	3- Before Update
	4- After Update
	5- Before Delete
	6- After Delete

#### Q - What is Heap table ?
	1- Tables that are present in the memory are called as HEAP tables.
	2- These tables are commonly known as memory tables.
	3- These memory tables never have values with data type like “BLOB” or “TEXT”.
	4- They use indexes which make them faster.
	5- They are used for high speed storage on temporary basis
	6- used for high speed storage on temporary basis.
	7- AUTO_INCREMENT is not supported by HEAP tables

#### Q - How to store picture file in the database. What Object type is used?
	To store picture in a database, Type ‘Blob’ is recommended.

#### Q - What is meant by transaction and ACID properties ?
	//ToDo



#### Q - How will you get the Field Name and Type of a MySql table ?
	mysql> describe users; 

	+----------+--------------+------+-----+---------+-------+ 
	| Field    | Type         | Null | Key | Default | Extra | 
	+----------+--------------+------+-----+---------+-------+ 
	| uid      | varchar(64)  | NO   | PRI |         |       | 
	| password | varchar(255) | NO   |     |         |       | 
	+----------+--------------+------+-----+---------+-------+ 
	2 rows in set (0.00 sec)

#### Q - Total number of row entry in a table ?
	
	mysql> select count(*) from Users; 

	+----------+ 
	| count(*) | 
	+----------+ 
	|      282 | 
	+----------+ 
	1 row in set (0.01 sec)
===============================================================================
#### https://phpgurukul.com/mysql-interview-questions-and-answers/

### Q - What is join in SQL ?
	Join  are used to fetch data from one or more tables

### Q - How many type of sql joins ?

	MySQL supports the following types of joins:

	1- Cross join
	2- Inner join
	3- Left join
	4- Right join

### Q - What is difference between ORDER BY and GROUP ?
	ORDER BY  used to sort the result, By default records are sort in ascending.
	
	SELECT column1, column2, …FROM tablename ORDER BY column1… ASC|DESC;

	GROUP BY used with aggregate the result

### Q - What is difference between FLOAT and DOUBLE ?
	A Float is for single-precision value wheres DOUBLE is for double precision values.

### Q - How to concatenate two fields in MySql ?
	SELECT CONCAT(column1,column2)  FROM tblname.

### Q - What is difference between CHAR and VARCHAR data types in sql ?
	CHAR  used to store  fixed length memory. whereas VARCHAR  used variable length memory storage.
	CHAR stores only character values  whereas VARCHAR stores alphanumeric values

### Q - What type of storage engine mysql support ?
	Below are some storage engines names that a mysql support.
	1 : MyISAM.
	2 :InnoDB
	3 :Memory
	4 :CSV
	5 :Merge etc.

### Q - What is difference between MyISAM and InnoDB storage engines ?
	1- InnoDB provides us row level locking while MyISAM provides us table level locking. 
	2- InnoDB offers foreign key constraints wheres in MyISAM does not have foreign key constraints.
	3- InnoDB does not have full text search wheres MyISAM provides us full text search.

### Q - What is the different between NOW() and CURRENT_DATE() ?
	NOW () is used to show current date time.
	CURRENT_DATE() shows date only.

### Q - Write an SQL query to find names of employee start with ‘A’
	SELECT * FROM Employees WHERE EmpName like 'A%' ;

### Q - How to find unique records in MYSQL ? 
	SELECT DISTINCT columnname FROM tablename;

### Q - What is the usage of ENUMs in MySQL ?
	ENUM is a string object used to specify predefined values and that can be used during table creation.

### Q - What is UNIX_TIMESTAMP();
	//ToDo

### Q - Is Mysql query is case sensitive ?
	
==========================================================================

### Q - How will you login to MySQL from Linux Shell ?
	root@localhost:/home/avi# mysql -u root -p 

	Enter password: 
	Welcome to the MySQL monitor.  Commands end with ; or \g. 
	Your MySQL connection id is 207 
	Server version: 5.1.72-2 (Debian) 
	Copyright (c) 2000, 2013, Oracle and/or its affiliates. All rights reserved. 
	Oracle is a registered trademark of Oracle Corporation and/or its 
	affiliates. Other names may be trademarks of their respective 
	owners. 
	Type 'help;' or '\h' for help. Type '\c' to clear the current input statement. 
	mysql>
### Q  - Check version of mysql ?
	mysql> SELECT VERSION();

### Q - List of all the databases?
	mysql> show databases; 

### Q - How select/switch database ?
	 mysql> use DbName;

### Q - List of all the tables, in a database ?
	mysql> show tables;

### Q - How will you get current date in MySQL ?
	mysql> SELECT CURRENT_DATE();

### Q - How will you export tables as an XML file in MySQL ?
	We use '-e' (export) option to export MySQL table or the whole database into an XML file.
	
	mysql -u USER_NAME –xml -e 'SELECT * FROM table_name' > table_name.xml

### Q - show all the indexes defined in a table ?
	show index from user;

### Q - How would you check if MySql service is running or not ?
	/home $ service mysql status  ( in 'Debian' )
	/home $ service mysqld status ( in 'RedHat' )

### Q - how would you stop/start the service ?

	$ service mysql stop
	$ service mysql start

==============  Backup/Restore ==========================

### Q - How to Backup MySQL Database ?
	https://www.tecmint.com/mysql-backup-and-restore-commands-for-database-administration/	

	mysqldump -u [username] –p[password] [database_name] > [dump_file.sql]
	

### Q - How to Backup Multiple MySQL Databases ?
	mysqldump -u root -p tecmint --databases db1 db1 > db1_db1.sql

### Q - Backup All MySQL Databases ?
	mysqldump -u root -ptecmint --all-databases > all_databases.sql

### Q - Backup Structure Only ?
	mysqldump -u root -ptecmint -–no-data rsyslog > rsyslog_structure.sql

### Q - Backup Data Only ?
	mysqldump -u root -p tecmint --no-create-db --no-create-info rsyslog > rsyslog_data.sql

### Q - Backup Single Table of Database ?
	mysqldump -u root -ptecmint dbName tabelName > tabelName_dbName.sql

### Q - Backup Multiple Tables of Database ?
	mysqldump -u root -ptecmint dbName table1 table12 > wordpress_table1_table12.sql

### Q - Backup Remote MySQL Database ?
	mysqldump -h 172.16.25.126 -u root -p tecmint dbName > dbName.sql

### Q - Restore MySQL Database ?

	mysql -u [username] –p[password] [database_name] < [dump_file.sql]
	
	OR
	
	mysqlimport -u root -p tecmint dbName < dbName.sql

==================================================================================================
	(1) Show the total amount of storage being used by each database under MySQL… organized by owner.

	(2) List the indexes for all tables in database “Sales”… and show me any tables which do not have indexes.

	(3) If MySQL database service is Not running, where do you look for problems/errors to correct.

	(4) If MySQL is not running, how do you find disk storage used by MySQL …storage FREE/avail for MySQL ?

	(5) List all active connections to running MySQL DB… and what can you know about activity…

	(6) Discuss steps to move/copy a MySQL database from ServerA to ServerB ?

	(7) Comment on setup of ServerJ and ServerK for load balancing & fail-over operation, so BOTH stay updated ?

	(8) Describe steps to backup or restore data/tables/index for database “blue” with other databases still running ?

###################################################################################################
### Q - Define SQL ?
	SQL stands for Structured Query Language
	for managing data in Relational Database Management System (RDBMS).

### Q - What is RDBMS? Explain its features ?
	1- Stores data in tables.
	2- Tables have rows and column.
	3- Creation and Retrieval of Table is allowed through SQL.

### Q - What is an ER Diagram ?	
	Entity Relationship Diagram is the graphical representation of tables, with the relationship between them.






		


	
