import mongoose from "mongoose"

export const dbConnection = async () =>{
    try{
       const {connection} = await mongoose.connect(process.env.MONGO_URI)
       console.log('db connected successfully...!')
    }catch(e){
     console.log('some thing went wrong',e.message)
    }
 }