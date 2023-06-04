ALTER PROCEDURE InsertClient
    @firstName VARCHAR(256),
    @password VARCHAR(128),
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
    
    UPDATE Design_Designer SET NumberOfClients = NumberOfClients + 1 WHERE EmployeeCode = @code;
    
    INSERT INTO Design_Person (CellPhone, IName, NIF, IPassword)
    VALUES (@cellphone, @firstName, @NIF, @password);

    INSERT INTO Design_Client (Person_NIF, Budget, Designer_Code)
    VALUES (@NIF, @budget, @code);

    
END;
