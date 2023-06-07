import express from 'express';
import sql from 'mssql';
import cors from 'cors';
import hat from 'hat';

const config = {
    server: 'mednat.ieeta.pt',
    port: 8101,
    user: 'p1g5',
    password: 'Lol.001#',
    database: 'p1g5',
    options: {
        trustServerCertificate: true, // Change to 'false' if not using a trusted certificate
    },
};

// Create an instance of Express
const app = express();
app.use(express.json());
app.use(cors());

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// app.get('/get_dbs', async (req, res) => {
//     res.send(await app.locals.db.query('select name from sys.databases;'));
// });

/* USER AUTHENTICATION */
app.post('/post_login', async (req,res)=>{
    const {username, password} = req.body
    console.log(req.body)

});

app.post('/deleteClient', async (req,res)=>{
    const {client} = req.body
    const resp = await app.locals.db.query('exec deleteClient @nif = ' + client);

});

app.post('/post_room', async (req,res) => {
    console.log(req.body)
    const randomInt = Math.floor(Math.random() * 100) + 1;
    const {name, area, height, style, client, designer, type} = req.body
    const resp = await app.locals.db.
    query('insert into Design_Rooms (id, IName, Area, Height, Style_Code, Client_NIF, Designer_Code, TypeProduct) Values (' + randomInt + ', ' + name + ', ' + area + ', ' + height + ', ' + style + ', ' + client + ', ' + designer + ', ' + type + ');')
})

app.get('/firms', async (req,res)=>{
    const resp = await app.locals.db.query('SELECT * FROM Firms')
    res.json(resp.recordset);
});

app.get('/typeProduct', async (req,res)=>{
    const resp = await app.locals.db.query('SELECT * FROM Design_TypeOfProducts')
    res.json(resp.recordset);
});

app.post('/products', async (req,res)=>{
    const {room} = req.body;
    const resp = await app.locals.db.query('select IName, CodeProduct from Design_Products where Type_Code = (select TypeProduct from Design_Rooms where id = ' + room + ')')
    console.log(resp)
    res.json(resp.recordset);
});

app.post('/has', async (req,res)=>{
    console.log(req.body)
    console.log("EUW")
    const {productCode, roomCode} = req.body;
    const resp = await app.locals.db.query('insert into Design_Has (Room_id, Product_Code) values (' + roomCode + ', ' + productCode + ');')
    console.log(resp)
    res.json(resp.recordset);
});

app.post('/employees', async (req,res)=>{
    const {firm} = req.body;
    const resp = await app.locals.db.query('select IName, EmployeeCode from Design_Person join (select * from Design_Designer where Firm_NIF = ' + firm + ') as F on NIF = F.Person_NIF')
    console.log(resp)
    res.json(resp.recordset);
});

app.post('/clients', async (req,res)=>{
    const {employee} = req.body;
    const resp = await app.locals.db.query('select IName, Person_NIF from Design_Person join (select * from Design_Client where Designer_Code = ' + employee + ') as f on NIF = f.Person_NIF ')
    console.log(resp)
    res.json(resp.recordset);
});

app.get('/getclients', async (req,res)=>{
    // const {employee} = req.body;
    const resp = await app.locals.db.query('select IName, Person_NIF from Design_Person join Design_Client on NIF = Person_NIF ')
    console.log(resp)
    res.json(resp.recordset);
});

app.post('/styles', async (req,res)=>{
    const {employee} = req.body;
    const resp = await app.locals.db.query('select IName, Style_Code from Design_TypeStyle join (select * from Design_Style where Firm_NIF =  (Select Firm_NIF from Design_Designer Where EmployeeCode = ' + employee + ')) as F on Style_Code = F.Code')
    console.log(resp)
    res.json(resp.recordset);
});

app.post('/rooms', async (req,res)=>{
    const {employee} = req.body;
    const resp = await app.locals.db.query('select IName, id from Design_Rooms where Designer_Code = ' + employee)
    console.log(resp)
    res.json(resp.recordset);
});

app.post('/post_register_client', async (req,res)=>{
    const {username, password, phone, nif, budget, firm, employee} = req.body
    console.log(req.body)
    console.log("HERE")
    const resp = await app.locals.db.query('exec InsertClient @firstName = ' + username + ', @password = ' + password + ', @cellphone = ' + phone + ', @NIF = ' + nif + ', @budget = ' + budget + ', @code = '+ employee);
    console.log(resp)
});

app.post('/post_register_designer', async (req,res)=>{
    const {username, password, phone, nif, salary, firm, employee} = req.body
    console.log(req.body)
    const resp = await app.locals.db.query('insert into Design_Person (Cellphone, IName, NIF, IPassword)\n values (3, e, 5, p);')
    const r = await app.locals.db.query('insert into Design_Designer (EmployeeCode, Person_NIF, Firm_NIF, NumberOfClients, Salary) values ('+ employee + ', ' + nif + ', ' + firm + ', ' + 0 + ', ' + salary + ');')
    console.log(req.body)
});

app.get('/search', (req, res) => {
    const {table, input, id} = req.body
  
    // Execute the SQL query
    const query = `SELECT * FROM '%${table}%' WHERE IName LIKE '%${input}%' and Designer_Code = '%${id}`;
    connection.query(query, (error, results) => {
      if (error) {
        res.status(500).send('Error executing the query');
      } else {
        res.send(results);
      }
    });
  });

app.post('/post_delete_client', async (req,res)=>{
    const {name} = req.body
    console.log(req.body)
    console.log("HERE")
    const resp = await app.locals.db.query('DELETE FROM Design_Client WHERE Person_NIF IN (SELECT NIF FROM Design_Person WHERE IName = ' + name + ');');
    console.log(resp)
});


// Start Express and then Start SQL
const port = 5004;
app.listen(port, async () => {
    app.locals.db = await sql.connect(config);
    (await import('./tableControl.js')).default(app.locals.db);
    console.log(`Server is running on port ${port}`);
});