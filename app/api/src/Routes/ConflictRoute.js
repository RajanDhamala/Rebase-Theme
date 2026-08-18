import {Router} from "express"
import { TestConflict} from "../Controllers/ConflictController.js"

const ConflictRouter=Router()

ConflictRouter.get("/",(req,res)=>{
  return res.send("conflict router is up and running")
})

ConflictRouter.get("/test",TestConflict)

export default ConflictRouter
