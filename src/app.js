const express = require('express');
const app = express();
const path = require('path');

const bodyparser = require ("body-parser")

app.use(express.json());
require("./db/conn.js");


const admin = require("./models/admin");
const customer = require("./models/customer");
const auth = require('./middleware/auth');


const port = process.env.port || 3000;




app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/admin", (req, res, next) => {
    res.render("adminregister");
  });

  app.get("/login", (req, res, next) => {
    res.render("login");
  });



  app.post("/adminreg",  async (req, res) => {
    try {
    
      const password = req.body.password;
      const cpassword = req.body.confirmpassword;

      if (password === cpassword) {
        const registerdata = new Register({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.cpassword,
        
   
      });
      const registered = await  registerdata.save()
      // console.log("the page part : " + registered);
      console.log("the success part" + registerdata);

      res.status(201).send("index");     
    }
    else {
      res.send("passwords are not matching");
    }
    }
    catch(error) {
       res.status(400).send(error);
       console.log("the error part page");
   }
  })

  app.get("/customer", (req, res, next) => {
    res.render("customerregister");
  });

  
  app.post("/customerreg",  async (req, res) => {
    try {
    
      const password = req.body.password;
      const cpassword = req.body.confirmpassword;

      if (password === cpassword) {
        const registerdata = new Register({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.cpassword,

   
      });
      const registered = await  registerdata.save()
     
      console.log("the success part" + registerdata);

      res.status(201).send("index");     
    }
    else {
      res.send("passwords are not matching");
    }
    }
    catch(error) {
       res.status(400).send(error);
       console.log("the error part page");
   }
  })

  app.post("/login", async(req, res) =>{
    try{
        const email = req.body.email;
        const password = req.body.password; 
  
        const useremail = await Register.findOne({email:email});
    
  
        if(useremail.password === password){
            res.status(201).render("panel");
            console.log("login successful");
        }else{
            res.send("invalid login details");
        }
    }catch(e){
        res.status(400).send("invalid login details");
    }
  })

  app.get('/logout', (req, res) => {
    console.log("logout successful");
    res.clearCookie('token');
    return res.redirect('/');
   
  });



  
  



app.listen (port, () =>{
    console.log(`server is running at ${port}`);
  }) 