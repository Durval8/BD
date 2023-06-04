CREATE TRIGGER maxClients
ON Design_Client
AFTER INSERT
AS
BEGIN
    -- Trigger logic goes here
    DECLARE @num AS INT
    SELECT @num = NumberOfClients FROM Design_Designer INNER JOIN inserted ON EmployeeCode = Designer_Code;
      IF @num > 12
        BEGIN
            RAISERROR('The maximum number of clients for a designer is 12.', 16, 1);
            ROLLBACK TRAN;
        END
END;