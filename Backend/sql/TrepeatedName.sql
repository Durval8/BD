CREATE TRIGGER repeatedName
ON Design_Person
AFTER INSERT
AS
BEGIN
    -- Trigger logic goes here
    DECLARE @num AS INT
    DECLARE @name AS VARCHAR(256)
    SELECT @name = IName FROM inserted;
    SELECT @num = COUNT(*) FROM Design_Person WHERE IName = @name;
      IF @num > 1
        BEGIN
            RAISERROR('The name is already in use', 16, 1);
            ROLLBACK TRAN;
        END
END;