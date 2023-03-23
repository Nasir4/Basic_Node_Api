import express from 'express';


const router = express.Router()
import {getAllUsers,registerUsers,loginUser,getMyDetails,logout} from '../controllers/userController.js';
import { isAuth } from '../middlewares/isAuth.js';




router.get('/',(req,res)=>{
    res.send('Nice Working...!')
 })
 
 router.get('/all',getAllUsers)
 
 router.post('/new',registerUsers)

 router.post('/login',loginUser)

 router.get('/me',isAuth,getMyDetails)

 router.get('/logout', logout)

 export default router;