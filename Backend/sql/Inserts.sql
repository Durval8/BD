INSERT INTO Design_Company (NIF, IAddress, Phone, IName)
VALUES (123456, '123 Main St', 913456789, 'Interiors Incorporated');

INSERT INTO Design_Company (NIF, IAddress, Phone, IName)
VALUES (234567, '456 Elm St', 919876543, 'WorldWide Designs');

INSERT INTO Design_Company (NIF, IAddress, Phone, IName)
VALUES (345678, '789 Oak St', 927654321, 'Balmain Woods and Metals');

INSERT INTO Design_Company (NIF, IAddress, Phone, IName)
VALUES (456789, '321 Maple St', 919876543, 'Ikea');

INSERT INTO Design_Company (NIF, IAddress, Phone, IName)
VALUES (567890, '654 Pine St', 935432109, 'Home and yards pieces');

INSERT INTO Design_Company (NIF, IAddress, Phone, IName)
VALUES (678901, '987 Cedar St', 934321098, 'Fancy mobilia');

-- ------------------------- 
-- select * from Design_Company;
-- -------------------------

INSERT INTO Design_Manufacturer (CompanyNIF, Quality)
SELECT NIF, 'Good' FROM Design_Company WHERE NIF = 345678;

INSERT INTO Design_Manufacturer (CompanyNIF, Quality)
SELECT NIF, 'Excellent' FROM Design_Company WHERE NIF = 456789;

INSERT INTO Design_Manufacturer (CompanyNIF, Quality)
SELECT NIF, 'Average' FROM Design_Company WHERE NIF = 567890;

INSERT INTO Design_Manufacturer (CompanyNIF, Quality)
SELECT NIF, 'Poor' FROM Design_Company WHERE NIF = 678901;

-- select * from Design_Manufacturer;
-- -------------------

INSERT INTO Design_TypeOfProducts (CodeType, TypeName)
VALUES (1, 'Furniture');

INSERT INTO Design_TypeOfProducts (CodeType, TypeName)
VALUES (2, 'Lighting');

INSERT INTO Design_TypeOfProducts (CodeType, TypeName)
VALUES (3, 'Textiles');

INSERT INTO Design_TypeOfProducts (CodeType, TypeName)
VALUES (4, 'Kitchenware');

INSERT INTO Design_TypeOfProducts (CodeType, TypeName)
VALUES (5, 'Home Decor');

INSERT INTO Design_TypeOfProducts (CodeType, TypeName)
VALUES (6, 'Appliances');

INSERT INTO Design_TypeOfProducts (CodeType, TypeName)
VALUES (7, 'Flooring');

INSERT INTO Design_TypeOfProducts (CodeType, TypeName)
VALUES (8, 'Bathroom Fixtures');

INSERT INTO Design_TypeOfProducts (CodeType, TypeName)
VALUES (9, 'Wall Art');

INSERT INTO Design_TypeOfProducts (CodeType, TypeName)
VALUES (10, 'Outdoor Furniture');

-- select * from Design_TypeOfProducts ;

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (1, 345678, 10, 'Product 1', 100, 1);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (2, 456789, 5, 'Product 2', 200, 2);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (3, 567890, 8, 'Product 3', 150, 3);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (4, 678901, 12, 'Product 4', 120, 4);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (5, 345678, 6, 'Product 5', 180, 5);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (6, 456789, 9, 'Product 6', 250, 6);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (7, 567890, 3, 'Product 7', 90, 7);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (8, 678901, 7, 'Product 8', 130, 8);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (9, 345678, 11, 'Product 9', 160, 9);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (10, 456789, 4, 'Product 10', 220, 10);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (11, 567890, 2, 'Product 11', 80, 1);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (12, 678901, 14, 'Product 12', 170, 2);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (13, 345678, 8, 'Product 13', 190, 3);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (14, 456789, 6, 'Product 14', 230, 4);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (15, 567890, 10, 'Product 15', 140, 5);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (16, 678901, 5, 'Product 16', 110, 6);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (17, 345678, 12, 'Product 17', 200, 7);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (18, 456789, 7, 'Product 18', 170, 8);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (19, 567890, 9, 'Product 19', 210, 9);

INSERT INTO Design_Products (CodeProduct, Manufacturer_NIF, Quantity, IName, Price, Type_Code)
VALUES (20, 678901, 3, 'Product 20', 120, 10);

INSERT INTO Design_DesignersFirm (CompanyNIF, Reviews)
VALUES (123456, 'Excellent design work, highly recommended');

INSERT INTO Design_DesignersFirm (CompanyNIF, Reviews)
VALUES (234567, 'Great attention to detail, professional service');

INSERT INTO Design_Person (CellPhone, IName, NIF, IPassword)
VALUES (912345670, 'John Doe', 132512, 'djsdoa');

INSERT INTO Design_Person (CellPhone, IName, NIF, IPassword)
VALUES (919876544, 'Jane Smith', 227823, 'fm32op');

INSERT INTO Design_Person (CellPhone, IName, NIF, IPassword)
VALUES (915432188, 'Michael Johnson', 563334, 'qwpoemn');

INSERT INTO Design_Person (CellPhone, IName, NIF, IPassword)
VALUES (938765433, 'Emily Davis', 456945, 'womqp');

INSERT INTO Design_Person (CellPhone, IName, NIF, IPassword)
VALUES (917654322, 'Andrew Wilson', 557256,'qpkdmewm');

INSERT INTO Design_Person (CellPhone, IName, NIF, IPassword)
VALUES (916543220, 'Olivia Taylor', 626467, 'mcaskl');

INSERT INTO Design_Person (CellPhone, IName, NIF, IPassword)
VALUES (934321988, 'William Brown', 748978, 'ewpodm');

INSERT INTO Design_Person (CellPhone, IName, NIF, IPassword)
VALUES (913210988, 'Sophia Thomas', 834889,'mpoew');

INSERT INTO Design_Person (CellPhone, IName, NIF, IPassword)
VALUES (912109877, 'James Anderson', 989490, 'hfre');

INSERT INTO Design_Person (CellPhone, IName, NIF, IPassword)
VALUES (931098766, 'Emma Miller', 184711, 'dewfds');

INSERT INTO Design_Style (Code, Firm_NIF)
VALUES (103, 123456);

INSERT INTO Design_Style (Code, Firm_NIF)
VALUES (110, 123456);

INSERT INTO Design_Style (Code, Firm_NIF)
VALUES (183, 123456);

INSERT INTO Design_Style (Code, Firm_NIF)
VALUES (399, 234567);

INSERT INTO Design_Style (Code, Firm_NIF)
VALUES (233, 234567);

INSERT INTO Design_Style (Code, Firm_NIF)
VALUES (273, 234567);

-- select * from Design_Style;

INSERT INTO Design_TypeStyle (Code, Style_Code, IDescription, IName)
VALUES (1899, 103, '60s inspired and universal staple for the early minimalist design', 'Bauhaus');

INSERT INTO Design_TypeStyle (Code, Style_Code, IDescription, IName)
VALUES (1763, 110, 'Keep it simple and pleasureful', 'Minimalist');

INSERT INTO Design_TypeStyle (Code, Style_Code, IDescription, IName)
VALUES (1823, 183, 'Iconic artwork can be translated in your living room', 'Keith Haring');

INSERT INTO Design_TypeStyle (Code, Style_Code, IDescription, IName)
VALUES (644, 399, '60s inspired and universal staple for the early minimalist design', 'Bauhaus');

INSERT INTO Design_TypeStyle (Code, Style_Code, IDescription, IName)
VALUES (1002, 233, 'Cold like the weather from the concrete factory', 'Brutalist');

INSERT INTO Design_TypeStyle (Code, Style_Code, IDescription, IName)
VALUES (981, 273, 'Decrease your carbon footprint', 'Naturalist');

-- select * from Design_TypeStyle;

-- select * from Design_Client;

INSERT INTO Design_Designer (EmployeeCode, Person_NIF, Firm_NIF, NumberOfClients, Salary)
VALUES (5, 132512, 123456, 12, 333);

INSERT INTO Design_Designer (EmployeeCode, Person_NIF, Firm_NIF, NumberOfClients, Salary)
VALUES (6, 227823, 234567, 9, 213);

INSERT INTO Design_Designer (EmployeeCode, Person_NIF, Firm_NIF, NumberOfClients, Salary)
VALUES (7, 563334, 123456, 7, 313);

INSERT INTO Design_Designer (EmployeeCode, Person_NIF, Firm_NIF, NumberOfClients, Salary)
VALUES (8, 456945, 234567, 12, 430);

-- select * from Design_Designer


INSERT INTO Design_Client (Person_NIF, Budget, Designer_Code)
VALUES (557256, 10000, 5);							
														
INSERT INTO Design_Client (Person_NIF, Budget, Designer_Code)
VALUES (626467, 20000, 6);						
														
INSERT INTO Design_Client (Person_NIF, Budget, Designer_Code)
VALUES (748978, 15000, 7);							

INSERT INTO Design_Client (Person_NIF, Budget, Designer_Code)
VALUES (834889, 25000, 8);
