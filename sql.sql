CREATE DATABASE WorkPlus
    DEFAULT CHARACTER SET = "utf8mb4";

DROP DATABASE if EXISTS WorkPlus;

CREATE USER "WorkPlus"@"localhost" IDENTIFIED BY "WorkPlus";

GRANT ALL PRIVILEGES ON WorkPlus.* TO "WorkPlus"@"localhost";
