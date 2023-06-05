CREATE VIEW Firms AS 
    SELECT IName, NIF FROM Design_DesignersFirm INNER JOIN Design_Company ON CompanyNIF = NIF;