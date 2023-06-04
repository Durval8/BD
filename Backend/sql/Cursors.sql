DECLARE @ProductCode int, @DesignerCode int, @Amount int, @ProductName varchar(128), @DesignerName varchar(128), @TotalAmount int;

DECLARE salesCursor CURSOR FOR

	SELECT DS.Product_code, DS.Designer_code, DS.Amount
    FROM Design_Sales AS DS

    OPEN salesCursor

    FETCH NEXT FROM salesCursor INTO @ProductCode, @DesignerCode, @Amount

    WHILE @@FETCH_STATUS = 0
    BEGIN
        SET @ProductName = (
            SELECT IName
            FROM Design_Products
            WHERE CodeProduct = @ProductCode
        )

        SET @DesignerName = (
            SELECT P.IName
            FROM Design_Designer AS D
            INNER JOIN Design_Person AS P ON D.Person_NIF = P.NIF
            WHERE D.EmployeeCode = @DesignerCode
        )

        SET @TotalAmount = @Amount * (
            SELECT Price
            FROM Design_Products
            WHERE CodeProduct = @ProductCode
        )

        PRINT 'Product Name: ' + @ProductName
        PRINT 'Designer Name: ' + @DesignerName
        PRINT 'Total Amount: ' + CAST(@TotalAmount AS varchar(10))
        PRINT '--------------------------------------'

        FETCH NEXT FROM salesCursor INTO @ProductCode, @DesignerCode, @Amount
    END

    CLOSE salesCursor
    DEALLOCATE salesCursor
