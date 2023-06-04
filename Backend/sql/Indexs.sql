CREATE INDEX INDEX_Design_Manufacturer_Company_NIF ON Design_Manufacturer(CompanyNIF);

--select * from Design_DesignersFirm where CompanyNIF=123456
CREATE INDEX INDEX_Design_DesginersFirm_Company_NIF ON Design_DesignersFirm(CompanyNIF);