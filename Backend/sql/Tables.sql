create table Design_Company(
	NIF int not null primary key,
	IAddress varchar(128) not null,
	Phone int not null,
	IName varchar(128) not null
);


SELECT * FROM Design_Company;

create table Design_DesignersFirm(
	CompanyNIF int not null primary key references Design_Company (NIF),
	Reviews varchar(128) not null
);


create table Design_Manufacturer(
	CompanyNIF int not null primary key references Design_Company (NIF),
	Quality varchar(64) not null
);


create table Design_Person(
	NIF int not null primary key,
	CellPhone int not null,
	IName varchar(256) not null,
	IPassword VARCHAR(128) not null
);


create table Design_Designer(
	EmployeeCode int not null primary key,
	Person_NIF int references Design_Person (NIF),
	Firm_NIF int not null references Design_DesignersFirm (CompanyNIF),
	NumberOfClients int not null,
	Salary int not NULL
);


create table Design_Client(
	Person_NIF int primary key references Design_Person (NIF),
	Budget int not null,
	Designer_Code int not null references Design_Designer (EmployeeCode)
);


create table Design_TypeOfProducts(
	CodeType int not null primary key,
	TypeName varchar(64) not null
);


create table Design_Products(
	CodeProduct int not null primary key,
	Manufacturer_NIF int not null references Design_Manufacturer (CompanyNIF),
	Quantity int not null,
	IName varchar(128) not null,
	Price int not null,
	Type_Code int not null references Design_TypeOfProducts (CodeType)
);


create table Design_Style(
	Code int not null primary key,
	Firm_NIF int not null references Design_DesignersFirm (CompanyNIF)
);


 create table Design_TypeStyle(
	Code int not null primary key,
	Style_Code int not null references Design_Style (Code),
	IDescription varchar(256) not null,
	IName varchar(64) not null
 );
 

 create table Design_Pieces(
	Code int not null primary key,
	IDescription varchar(256) not null,
	TypeProduct_Code int not null references Design_TypeOfProducts (CodeType)
 );
 

create table Design_MadeOf(
	Pieces_Code int not null references Design_Pieces (Code),
	Products_Code	int not null references Design_Products (CodeProduct),
	primary key (Pieces_Code,Products_Code)
);
 

create table Design_Rooms(
	id int not NULL PRIMARY KEY,
	ILocation int not null,
	Area int not null,
	Height int not null,
	Style_code int not null references Design_Style (Code),
	Client_NIF int not null references Design_Client (Person_NIF),
	Designer_Code int not null references Design_Designer (EmployeeCode)
);


create table Design_Has(
	Room_id int not null references Design_Rooms (id),
	Product_Code int not null references Design_Products (CodeProduct),
	primary key (Room_id,Product_Code)
);


create table Design_Sales(
	Product_code int not null references Design_Products (CodeProduct),
	Designer_code int not null references Design_Designer (EmployeeCode),
	Amount int not null,
	IDate Date not null,
	Discount int not null,
	primary key (Product_code, Designer_code)
)
