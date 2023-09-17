const Mongoose=require('mongoose');

const UserSchema=new Mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        unique : true,
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const user=Mongoose.model('user',UserSchema);

module.exports=user;