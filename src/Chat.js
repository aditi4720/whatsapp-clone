import { useState, useEffect } from "react";
import React from "react";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import "./chat.css";
function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed >>", input);
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          src={`https://avatars.dicebear.com/api/pixel-art/${seed}.svg`}
        ></Avatar>
        <div className="chat_headerInfo">
          <h3>Person Name</h3>
          <p>Last Seen</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchIcon></SearchIcon>
          </IconButton>
          <IconButton>
            <AttachFileIcon></AttachFileIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className={`chat_message ${true && "chat_reciever"}`}>
          <span className="chat_name">Aditi </span>
          hey babe
          <span className="chat_timestamp">12:39pm</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon></InsertEmoticonIcon>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon></MicIcon>
      </div>
    </div>
  );
}

export default Chat;
