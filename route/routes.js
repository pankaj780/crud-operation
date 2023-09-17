const express=require('express');
const UserController=require('../controller/UserController.js');
const router = express.Router()

router.get('/',UserController.getUser);

router.post('/add-users',UserController.addUser);

router.delete('/delete-users',UserController.deleteUser);

router.put('/update-users',UserController.updateUser);

module.exports = router