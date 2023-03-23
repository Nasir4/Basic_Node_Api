export const errorMiddlewear = (err,req,res,next)=>{


    err.message = err.message || 'Internal Error';
    err.statusCode = err.statusCode || 500

    res.status(err.statusCode).json({
        success:false,
        err:err.message
    })
}