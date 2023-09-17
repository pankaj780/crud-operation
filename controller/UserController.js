const User=require('../model/user.js');

const getUser = ((req, res) => {
    const email=req.query.email;
    var db;
    db.test.find({})
    .then((item) => {
        res.status(200);
        res.json({
            message: 'User data get successfully.',
            code: 1,
            data: item
        })
    }).catch((error) => {
        res.status(400).json({error:error})
    })
});

const addUser = ((req, res) => {
    const user = new User(req.body);
    user.save().then((item) => {
        res.status(201);
        res.json({
            message: 'User Added successfully.',
            code: 1,
            data: item
        })
    }).catch((error) => {
        res.status(400).json({error:error})
    })
});

const deleteUser=((req, res)=>{
    const user=new User();
    user.deleteOne({ "email": req.query.email })
    .then((item)=>{
        res.status(203);
        res.json({
            message: 'User deleted successfully.',
            code: 1,
            data: item
        })
    }).catch((error)=>{
        res.status(400).json({error:error})
    })
})


const updateUser=((req, res)=>{
    const {name,email}=req.body;
    const user=User.updateOne({email:email},{name:name})
    .then((item)=>{
        res.status(203);
        res.json({
            message: 'User updated successfully.',
            code: 1,
            data: item
        })
    }).catch(error=>{
        res.status(400).json({error:error})
    })

})
module.exports={getUser,addUser,deleteUser,updateUser};