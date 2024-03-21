import React, { useEffect, useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generateRandomName from "../utils/helper";

export const LiveChat = () => {
    const [liveMsg,setLiveMsg]=useState("");
  const dispatch = useDispatch();
  const chatMsgs = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "This is piyush dayal this side!!!",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  });
  return (
    <>
    <div className="ml-1 mr-2 flex flex-col-reverse overflow-y-scroll gap-1  border mt-8 h-[600px] bg-slate-100 rounded-lg  border-black  p-4 ">
      <div>
        {chatMsgs?.map((chat, index) => (
          <ChatMessage name={chat.name} message={chat.message} key={index} />
        ))}
      </div>
    </div> 
    <form className="p-2  border border-black ml-2 mr-2" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({name:"Piyush",message:liveMsg}));
        setLiveMsg("");
    }}>
        <input type="text"  className="border w-80 border-black px-2" value={liveMsg} onChange={(e)=>{setLiveMsg(e.target.value)}}/>
        <button className="px-2 mx-2 bg-green-100 rounded-3xl">Send</button>
    </form>
    </> 
  );
};
