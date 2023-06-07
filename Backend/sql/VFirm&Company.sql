CREATE VIEW Firms AS 
    SELECT IName, NIF FROM Design_DesignersFirm INNER JOIN Design_Company ON CompanyNIF = NIF;

CREATE VIEW Designers AS
    SELECT IName, Person_NIF FROM Design_Person JOIN Design_Designer ON NIF = Person_NIF;

alter VIEW dbo.Clients AS
    SELECT IName, Person_NIF FROM Design_Person JOIN Design_Client ON NIF = Person_NIF;