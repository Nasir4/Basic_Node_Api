import jwt from 'jsonwebtoken';

export const setCookie = (user,res,msg,statusCode=200) =>{
    let token = jwt.sign({_id:user._id},process.env.JWT_TOKEN)
     
    res.status(statusCode).cookie("token",token,{httpOnly:true,maxAge:15*60*1000}).json({
       success:true,
       message:msg
    })
}