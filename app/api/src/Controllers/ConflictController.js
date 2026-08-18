import asyncHandler from "../Utils/AsyncHandler.js"
import ApiError from "../Utils/ApiError.js"
import ApiResponse from "../Utils/ApiResponse.js"


const TestConflict=async(asyncHandler(req,res)=>{
  console.log("how are u do i know u?");
  return res.json(
    {
      "message":"server is up and running btw"
    }
  )
  
})


 export  { TestConflict}
