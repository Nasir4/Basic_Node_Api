import Task from "../models/tasksModel.js";
import ErrorHandler from "../utils/customeError.js";


export const AddTask = async (req,res,next)=>{

    try{

    const {title,description} = req.body;

    let task = await Task.create({title,description,user:req.user})

    res.status(201).json({
        success:true,
        message:"Task Added successfully"
    })

    }catch(error){
       next(error)
    }
    
}

export const getAllTasks = async (req, res,next)=>{

    try{

        const taskId = req.user._id  
    
    let Tasks = await Task.find({user:taskId})

    res.status(200).json({
        success:true,
        Tasks
    })

    }catch(error){
      next(error)
    }
    

}

export const updateTask = async (req, res,next)=>{

     try{
        const {id} = req.params;
        const task = await Task.findById(id)

        if(!task) return next(new ErrorHandler("Task Id Not Found",404))

      task.isCompleted = !task.isCompleted


        await task.save()


       res.status(200).json({success:'true',message:"Task Updated"})

     }catch(error){
        next(error)
     }

       
}

export const deleteTask = async (req,res,next)=>{
    
    try{
        const {id} = req.params;
    const task = await Task.findById(id)

    if(!task) return next(new ErrorHandler('Task Id Not Found',404))

    await task.deleteOne()

    res.status(200).json({
        success:true,
        messsage:"Task Deleted Successfully"
    })

    }catch(error){
       next(error)
    }
    
}