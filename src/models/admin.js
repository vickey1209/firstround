const mongoose = require("mongoose");




const adminSchema = new mongoose.Schema({
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




    adminSchema.methods.generateAuthToken = async function(){
        try{
            console.log(this._id);
            const token = jwt.sign({_id:this._id.toString()},"vickey");
            console.log("token is " + token);
            this.tokens = this.tokens.concat({token:token})
            await this.save();
            return token;
        }catch(e){
            res.send("error" +e);
            console.log("error" +e);
        }
    }

const admin = new mongoose.model("admin", adminSchema);

module.exports = admin;