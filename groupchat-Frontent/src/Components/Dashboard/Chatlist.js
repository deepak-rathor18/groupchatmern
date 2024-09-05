import axios from 'axios'
import React, { useEffect, useState } from 'react'
import moment from 'moment';


const Chatlist = (props) => {
    const { messageData, setMessageData } = props
    const [messages, setMessages] = useState([])
    
  
    const apiCall = () => {
        axios.get("https://groupchatmern1.vercel.app/message/getMessage").then((res) => {
            console.log(res);
            setMessages(res.data.message)
            apiCall()
            
           
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        apiCall()
     
    }, [])

    return (
        <div><div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden" style={{ height: "100vh", width: "700px" }}>
            <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
         

            {
                messages.map((mess)=>{
                    return(
                        <div>{mess.userId==messageData.userId ? 
                            <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end" >
                            <button style={{color:"red"}} onClick={() => {
                                console.log(messageData)
                                axios.delete("http://localhost:3000/message/deleteMessage/6546441afe50dd6b6fbe9eb6", messageData).then((res) => {
                                    console.log(res);
                                   
                                    
                                }).catch((err) => {
                                    console.log(err);
                                })
                            }}
                            >Delete</button>
                            <div>
                            <span style={{color:"green",}}>{mess.userName}</span>
                                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                    <p className="text-sm">{mess.message}</p>
                                </div>
                                <span className="text-xs text-gray-500 leading-none">{ moment().startOf('hour').fromNow()}</span>
                            </div>
                              

                            
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                        </div> :    <div className="flex w-full mt-2 space-x-3 max-w-xs">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                        <div>
                        <span style={{color:"dodgerblue",}}>{mess.userName}</span>
                            <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                <p className="text-sm">{mess.message}</p>
                              
                            </div>

                            <span className="text-xs text-gray-500 leading-none">{moment().endOf('day').fromNow()}</span>
                        </div>
                        <button style={{color:"red"}} onClick={() => {
                            console.log(messageData)
                            axios.delete("http://localhost:3000/message/deleteMessage/654647c0fe50dd6b6fbea80a", messageData).then((res) => {
                                console.log(res);
                               
                                
                            }).catch((err) => {
                                console.log(err);
                            })
                        }}
                        >Delete</button>
                    </div>
                    }</div>
                    
                    )
                })
            }
              

          

        </div>

            <div className="bg-gray-300 p-4">
                <input value={messageData.message} onChange={(e) => {
                    setMessageData({
                        ...messageData,
                        message: e.target.value
                    })
                    
                }} className="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…" />
            </div>
            <button style={{ backgroundColor: "green", height: "50px", width: "600px" }} onClick={() => {
                console.log(messageData)
                axios.post("http://localhost:3000/message/addMessage", messageData).then((res) => {
                    console.log(res);
                   
                }
                ).catch((err) => {
                    console.log(err);
                    alert(err)
                })
            }}>Send</button>
        </div></div>
    )
}

export default Chatlist
