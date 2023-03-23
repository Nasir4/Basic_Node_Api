import express from 'express';


const router = express.Router()
import {getAllUsers,registerUsers} from '../controllers/userController.js';




router.get('/',(req,res)=>{
    res.send('Nice Working...!')
 })
 
 router.get('/all',getAllUsers)
 
 router.post('/new',registerUsers)

 export default router;