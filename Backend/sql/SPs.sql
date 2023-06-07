-- ALTER PROCEDURE InsertClient
--     @firstName VARCHAR(256),
--     @password VARCHAR(128),
--     @cellphone INT,
--     @NIF INT,
--     @budget INT,
--     @code INT
-- AS  
-- BEGIN
--     DECLARE @designer AS INT;
--     SELECT @designer = COUNT(*) FROM D esign_Designer WHERE EmployeeCode = @code;

--     IF @designer = 0
--         BEGIN   
--             RAISERROR('Designer does not exist', 16, 1);
--             RETURN;
--         END;
    
--     UPDATE Design_Designer SET NumberOfClients = NumberOfClients + 1 WHERE EmployeeCode = @code;
    
--     INSERT INTO Design_Person (CellPhone, IName, NIF, IPassword)
--     VALUES (@cellphone, @firstName, @NIF, @password);

--     INSERT INTO Design_Client (Person_NIF, Budget, Designer_Code)
--     VALUES (@NIF, @budget, @code);
-- END
-- CREATE PROCEDURE GetManufactureProducts
--     @ManufacturerNIF INT
-- AS 
-- BEGIN
--     SELECT P.CodeProduct, P.IName
--     FROM Design_Products AS P
--     WHERE P.Manufacturer_NIF = @ManufacturerNIF
-- END;

-- CREATE PROCEDURE GetDesignersAndClientCount
--     @FirmNIF INT
-- AS
-- BEGIN
--     SELECT
-- 	P.IName AS DesignerName, D.NumberOfClients
--     FROM Design_Designer AS D
--     INNER JOIN Design_Person AS P ON D.Person_NIF = P.NIF
--     WHERE D.Firm_NIF = @FirmNIF;
-- END;




