BEGIN TRANSACTION;

DECLARE @ClientNIF INT;
DECLARE @RoomID INT;
DECLARE @RoomCost INT;
DECLARE @ClientBudget INT;

SET @ClientNIF = [CLIENT_NIF_VALUE]; -- Replace [CLIENT_NIF_VALUE] with the actual client's NIF
SET @RoomID = [ROOM_ID_VALUE]; -- Replace [ROOM_ID_VALUE] with the actual room ID

-- Retrieve the cost of the room
SELECT SUM(Price) AS RoomCost
FROM Design_Has H
JOIN Design_Products P ON H.Product_Code = P.CodeProduct
WHERE H.Room_id = @RoomID
GROUP BY H.Room_id
INTO @RoomCost;

SELECT Budget
INTO @ClientBudget
FROM Design_Client
WHERE Person_NIF = @ClientNIF;

IF @RoomCost IS NULL OR @RoomCost > @ClientBudget
BEGIN
    ROLLBACK;
    PRINT 'Room cost exceeds the client''s budget.';
END
ELSE
BEGIN
    COMMIT;
    PRINT 'Room cost is within the client''s budget.';
END
