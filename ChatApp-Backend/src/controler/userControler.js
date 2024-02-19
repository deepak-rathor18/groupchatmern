const UserModel = require("../models/userModel")
const bcrypt = require("bcrypt")

var jwt = require("jsonwebtoken")

var secretKey="hash12345"

//   addUser

const addUser = async(req,res)=>{
    try{
        bcrypt.hash(req.body.password,10,async(err, hashPassword)=>{
            let user = new UserModel({...req.body,password:hashPassword})
            let isSave = await user.save()
  
            if(isSave)
            {
             return res.status(200).json({
                  mssg:"user add successfully",
                  status:200,
                  isSave
              })
            }
          })
         
    }
    catch(err)
    {
        console.log(err)
        return res.status(500).json({
            mssg:"server error",
            status:500,
            err:JSON.stringify(err)

        })
    }

}

        //   getUser

const getUser = async(req,res)=>{
    try{
         let users = await UserModel.find({})

         if(users.length != 0)
         {
            return res.status(200).json({
                mssg:"user get Success",
                status:200,
                users
    
            })
         }

        
    }
    catch(err)
    {
        console.log(err)
        return res.status(500).json({
            mssg:"server error",
            status:500,
            err:JSON.stringify(err)

        })
    }

}

//   deleteUser

const deleteUser = async(req,res)=>{
    try{
        let {id} = req.params
        let deleteUser = await UserModel.findByIdAndDelete(id)
        if(deleteUser)
        {
         res.status(200).json({
           status:200,
           mssg:"user delete successfully",
           deleteUser
  
         })
        }
    }
    catch(err)
    {
     console.log(err)
     res.status(500).json({
       status:500,
       mssg:"server error",
       err
  
     })
    }
  }

  //updateProduct

  
  
  const updateUser = async(req,res)=>{
    
    try{
        let {id} = req.params
        let updateUser = await UserModel.findByIdAndUpdate(id,req.body)
        if(updateUser)
        {
         res.status(200).json({
           status:200,
           mssg:"user update successfully",
           updateUser
  
         })
        }
    }
    catch(err)
    {
     console.log(err)
     res.status(500).json({
       status:500,
       mssg:"something is wrong in current function",
       err
  
     })
    }
  }
  

                              // user login

const login = async(req,res)=>{
    try
    {
        let {email,password} = req.body
        let users = await UserModel.find({email:email})
        console.log(users)
        if(users.length == 0)
        {
            return res.status(400).json({
                status:400,
                mssg:"user not found"
            })
        }
        else{
             bcrypt.compare(req.body.password,users[0].password,(err,result)=>{

                if(result == true)
                {
                    var token=jwt.sign({data:users[0]},secretKey)
                    console.log(token);
                    return res.status(200).json({
                        status:200,
                        mssg:"user login success",
                        token:token,
                        user:users[0]
                       
                    }) 
                }
                else
                {
                    return res.status(400).json({
                        status:400,
                        mssg:"incorrect email and password",
                     
                    }) 
                }
             })
        }

    }
    catch(err){
        console.log(err)
        res.status(500).json({
            status:500,
            message:"server error",
            err:JSON.stringify(err)
        })
    }
}


module.exports = {addUser,getUser,deleteUser,updateUser,login}