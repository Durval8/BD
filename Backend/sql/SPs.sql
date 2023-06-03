CREATE PROCEDURE InsertClient
    @firstName VARCHAR(256),
    @CCNumber INT,
    @cellphone INT,
    @NIF INT,
    @budget INT,
    @code INT
AS
BEGIN
    DECLARE @designer AS INT;
    SELECT @designer = COUNT(*) FROM Design_Designer WHERE EmployeeCode = @code;

    IF @designer = 0
        BEGIN   
            RAISERROR('Designer does not exist', 16, 1);
            RETURN;
        END;
    
    INSERT INTO Design_Person (CellPhone, IName, NIF)
    VALUES (@cellphone, @firstName, @NIF);

    INSERT INTO Design_Client (Person_NIF, Budget, Designer_Code)
    VALUES (@NIF, @budget, @code);

    UPDATE Design_Designer SET NumberOfClients = NumberOfClients + 1 WHERE EmployeeCode = @code;
END;
