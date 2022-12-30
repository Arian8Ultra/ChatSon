BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "users" (
	"id"	INTEGER NOT NULL,
	"token"	VARCHAR(255) NOT NULL,
	"username"	VARCHAR(255) NOT NULL,
	"lastLogin"	VARCHAR(255) NOT NULL,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "anonymoseUser" (
	"id"	INTEGER NOT NULL,
	FOREIGN KEY("id") REFERENCES "users"("id"),
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "normalUser" (
	"id"	INTEGER NOT NULL,
	"name"	VARCHAR(255) NOT NULL,
	"surname"	VARCHAR(255) NOT NULL,
	"email"	VARCHAR(255) NOT NULL,
	"password"	VARCHAR(255) NOT NULL,
	"phone"	VARCHAR(255),
	"address"	VARCHAR(255),
	"accessLevel"	INTEGER NOT NULL,
	"created_at"	TIMESTAMP,
	"updated_at"	TIMESTAMP,
	FOREIGN KEY("id") REFERENCES "users"("id"),
	PRIMARY KEY("id")
);
INSERT INTO "users" ("id","token","username","lastLogin") VALUES (1,'token','username','2022-12-30'),
 (2,'token','token','2022-12-30'),
 (3,'token','username','2022-12-30'),
 (4,'token','token','2022-12-30');
INSERT INTO "normalUser" ("id","name","surname","email","password","phone","address","accessLevel","created_at","updated_at") VALUES (2,'name','surname','mr50@gmail.com','$2b$12$eLoP3b4Ive8HXC4AlyR/y.R7pd7Rk7zdNGoORT6Zf5WVlo9/cU1BC','phone','address',0,'2022-12-30 02:34:15.919324',NULL),
 (4,'name','surname','mr50@gmail.com','$2b$12$RAWwzAvdFuSEyItbBc9Q8esXqmSFkFeM.PBTtL5rudnMSxpoxTA9m','phone','address',0,'2022-12-30 02:37:24.852035',NULL);
COMMIT;
