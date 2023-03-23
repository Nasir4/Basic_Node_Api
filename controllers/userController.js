import User from  "../models/userModel.js"

export const getAllUsers = async(req,res)=>{
 
    const users = await User.find({})


    res.json({
        success: true,
        users:users
    })
}

export const registerUsers = async (req,res)=>{
    try{
        const {name,email,password} = req.body

        await User.create({name,email,password})
    
        return res.status(201).cookie('tempToken',"zzzxxccvbbx").json({success: true,message:'successfully created'})
    }catch(e){
      console.log(e)
    }
      
    
}