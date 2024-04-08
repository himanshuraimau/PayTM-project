
import { request } from "http"

const asyncHandler = (fn) =>async(req,res,next)=>{
    try{
        await fn(req,res,next)
    }
    catch(err){
        console.log(err)
               res.status(err.code || 600).json({
                  success:false,
                  message:err.message
               })
    }
}




export {asyncHandler}



/* const asyncHandler = ()=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>{next(err)} )
    }
}
*/