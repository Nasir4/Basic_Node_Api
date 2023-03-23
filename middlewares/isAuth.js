import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const isAuth = async (req,res,next) => {
     
    const {token} = req.cookies

    if(!token) {
        return res.status(404).json({
            message:"please Login Firts",
            success:false
        })
    }

    const decoded = await jwt.verify(token, process.env.JWT_TOKEN)

    req.user = await User.findById(decoded._id)

     next()
    
}