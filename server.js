// Name, Location, Categories, Hashtags, GPT //
const express = require('express');
const session = require('express-session');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql  = require('mysql2');
const sequelizeStore = require('connect-session-sequelize')(session.Store)
const Sequelize = require('sequelize')


// app.options('*', cors({
//     origin:'http://172.30.16.1:5173',
//     credentials: true,
//     optionSuccessStatus:200,
// }));


app.use(bodyParser.json());
require('dotenv').config();


const db = mysql.createPool({
    host     : 'localhost',
    user     : 'root0',
    password : '$MarkRash47',
    database : 'business',
    port : '3306',
    connectionLimit : 15
    
  });
 
  const sequelize = new Sequelize({
    host: 'localhost',
    dialect:'mysql',
    username: 'root0',
    password:  '$MarkRash47',
    database: 'business',
    define: {
      timestamps: false
    }
  })

  const sessionStore = new sequelizeStore({
    db: sequelize
  });

  app.use(cors({
    origin:['http://10.40.210.149:3000','http://172.30.16.1:5173','http://10.40.210.149:3001'],
    credentials: true,
    optionSuccessStatus:200,
}));
  app.use(session({
    secret: 'secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 },
}));

sessionStore.sync();

  db.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database!');
    db.query("CREATE DATABASE IF NOT EXISTS business ", function (err, result) {
    if (err) throw err;
        console.log(`Database created`);
    });
  });


  const table = 
    `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL, 
    Location VARCHAR(255) NOT NULL,
    Category VARCHAR(255) NOT NULL, 
    Email VARCHAR(255) NOT NULL,
    Phone_Number VARCHAR(20) NOT NULL,
    UNIQUE (Name)
);`;


// const table = `CREATE TABLE IF NOT EXISTS hashtags (
    // id INT AUTO_INCREMENT PRIMARY KEY, 
    // Hashtag VARCHAR(255) NOT NULL,
    // business_id INT,
    // FOREIGN KEY (business_id) REFERENCES users(id),
    // UNIQUE (Hashtag)
//);`;`


db.query(table, (err, result) => {
    if (err) throw err;
    console.log('Table created');
});
app.get('/', (req, res) => {
    res.send('Hello World!');
})


global.users = {};
app.post('/', (req, res) => {
    const { Username, Password, Name, Location, Category, Email, Phone_Number } = req.body;
    if (!Username || !Password || !Name ||!Location ||!Category ||!Email ||!Phone_Number) {
        return res.status(400).send('Please fill in all fields');
    }

    
    const sql = `INSERT INTO users (Username, Password, Name, Location, Category, Email, Phone_Number) VALUES ('${Username}','${Password}','${Name}', '${Location}', '${Category}', '${Email}', '${Phone_Number}')`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        req.session.user = {
            id: result.insertId,
            username: Username,
            password: Password, 
            name: Name,
            loc: Location,
            cat: Category,
            email: Email,
            pNum: Phone_Number
        }
        // global.users = {
        //     id: result.insertId,
        //     username: Username,
        //     password: Password, 
        //     name: Name,
        //     loc: Location,
        //     cat: Category,
        //     email: Email,
        //     pNum: Phone_Number
        // }
        // res.cookie('user', Username, 
        //     { 
        //        httpOnly: true, 
        //        secure: true, 
        //        sameSite: 'Strict' ,
        //        maxAge: 1000 * 60 * 60 * 24  // 24 hours

        //     }
        // ); 
        global.users = req.session.user
        res.send({message: req.session.user});
        console.log(`User ${Name} added to the database`);
    });
})

app.post('/login', (req, res) => {
    const {Username, Password} = req.body;
    if (!Username || !Password) {
        return res.status(400).send('Please fill in all fields');
    }

    
    db.query(`SELECT * FROM users WHERE username = "${Username}"`, (err, result) => {
        if (err) throw err;
        if (!result.length) {
            return res.status(401).send('Invalid credentials');
        }
        if (result[0].password!== Password) {
            return res.status(401).send('Invalid credentials');
        }

       

        req.session.user = {
            id: result[0].id,
            username: result[0].username,
            password: result[0].password, 
            name: result[0].Name,
            loc: result[0].Location,
            cat: result[0].Category,
            email: result[0].Email,
            pNum: result[0].Phone_Number
        }
        global.users = req.session.user
        console.log(`User ${Username} added to the database`);
        console.log(req.session.user);
        res.send({message: req.session.user});
    });

})

app.get('/profile', (req, res)=> {
    
    res.send({message: global.users});
    
})
app.get('/users/food', (req, res)=> {
    db.query(`SELECT * FROM users where Category = "Food"`, (err, result)=>{
        if(err) throw err;
        
        const ids = result.map((user)=>user.id)
        res.send({message: ids});
    })
})
app.get('/users/hb', (req, res)=> {
    db.query(`SELECT * FROM users where Category = "Health&Beauty"`, (err, result)=>{
        if(err) throw err;
        
        const ids = result.map((user)=>user.id)
        res.send({message: ids});
    })
})
app.get('/users/ecom', (req, res)=> {
    db.query(`SELECT * FROM users where Category = "Ecommerce"`, (err, result)=>{
        if(err) throw err;
        
        const ids = result.map((user)=>user.id)
        res.send({message: ids});
    })
})
app.get('/users/retail', (req, res)=> {
    db.query(`SELECT * FROM users where Category = "Retail"`, (err, result)=>{
        if(err) throw err;
        
        const ids = result.map((user)=>user.id)
        res.send({message: ids});
    })
})
app.get('/users/tech', (req, res)=> {
    db.query(`SELECT * FROM users where Category = "Technology"`, (err, result)=>{
        if(err) throw err;
        
        const ids = result.map((user)=>user.id)
        res.send({message: ids});
    })
})

app.get('/users/:id', (req, res)=> {
    const id = req.params.id;
    db.query(`SELECT * FROM users WHERE id="${id}"`, (err, result)=>{
        if(err) throw err;
        if(!result.length) {
            return res.status(404).send('User not found');
        }
        res.send({message: result[0]});
    })
})


app.get('/logout', (req, res)=>{
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.clearCookie('connect.sid');  // clear cookie
        res.send({message: 'Logged out'});
    });
})

app.listen(5000,'0.0.0.0' ,() => {
    console.log(`Server is running on port 5000: http://172.30.16.1:5000`);
})