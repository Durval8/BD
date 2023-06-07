CREATE FUNCTION CalculateTotalPriceByManufacturer
(
    @ManufacturerNIF INT
)
RETURNS INT
AS
BEGIN
    DECLARE @TotalPrice INT;

    SELECT @TotalPrice = SUM(P.Quantity * P.Price)
    FROM Design_Products AS P
    WHERE P.Manufacturer_NIF = @ManufacturerNIF;

    RETURN @TotalPrice;
END

CREATE FUNCTION CalculateTotalNumberOfClientsByFirm
(
    @DesignerFirmNIF INT
)
RETURNS INT
AS
BEGIN
    DECLARE @TotalNumberOfClients INT;

    SELECT @TotalNumberOfClients = SUM(D.NumberOfClients)
    FROM Design_Designer AS D
    WHERE D.Firm_NIF = @DesignerFirmNIF;

    RETURN @TotalNumberOfClients;
END

CREATE FUNCTION LoginUser(
    @username VARCHAR(256),
    @password VARCHAR(128)
)
RETURNS INT
AS
BEGIN 
    DECLARE @users INT

    SELECT @users = COUNT(*) FROM Design_Person WHERE IName = @username AND IPassword = @password;

    RETURN @users;
END;
