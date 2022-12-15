const mongoose = require("mongoose");




const customerSchema = new mongoose.Schema({
    firstname:
     {
   
    type:String
    },
    
    lastname:
    {
    type:String
    },
    email:
        {
         type:String
   
        },

    mobile :
    {
        type: Number
    },
    
   
    password:
    {
    type:String
    },

confirmpassword:
    {
    type:String
    },

Date:{
    type: Date, 
    default: new Date
     },

     tokens:[{
        token:{
                type:Array,
                required:true
              }
               }]

})



const customer = new mongoose.model("customer", customerSchema);

module.exports = customer; 