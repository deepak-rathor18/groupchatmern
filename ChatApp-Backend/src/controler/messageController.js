const MessageModel = require("../models/messagesModel")


// addMessage
 
const addMessage = async(req,res)=>{
    try{
        console.log(req.body)
       
          let message = new MessageModel(req.body)
          let isSave = await message.save()

          if(isSave)
          {
           return res.status(200).json({
                mssg:"message added successfully",
                status:200,
                isSave
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
// getMessage

const getMessage = async(req,res)=>{
    try{
        console.log(req.body)
       
          let message = await MessageModel.find({})

          if(message)
          {
           return res.status(200).json({
                mssg:"message get successfully",
                status:200,
                message
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

//   deleteMessage


const deleteMessage = async (req, res) => {
  try {
    let { id } = req.params;
    console.log(id);
    let deleteMessage = await MessageModel.findByIdAndDelete(id);

    if (deleteMessage) {
      res.status(200).json({
        status: 200,
        mssg: "Message deleted successfully",
        deleteMessage,
      });
    } else {
      res.status(404).json({ // Assuming a 404 status code for "Not Found"
        status: 404,
        mssg: "Message not found",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      mssg: "Server error",
      err: err.message, // Sending the error message to the client
    });
  }
};




  //updateMessage 

  
  const updateMessage= async(req,res)=>{
    try{
        let {id} = req.params
        let updateMessage = await MessageModel.findByIdAndUpdate(id,req.body)
        if(updateMessage)
        {
         res.status(200).json({
           status:200,
           mssg:"Message update successfully",
           updateMessage
  
         })
        }
    }
    catch(err)
    {
     console.log(err)
     res.status(500).json({
       status:500,
       mssg:"domething is wrong in current function",
       err
  
     })
    }
  }





module.exports = {addMessage,getMessage,deleteMessage,updateMessage}