import { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import React from "react";
import "./sidebarchat.css";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      //clever stuff
    }
  };

  return !addNewChat ? (
    <div className="sidebarchat">
      <Avatar
        src={`https://avatars.dicebear.com/api/pixel-art/${seed}.svg`}
      ></Avatar>
      <div className="sidebarchat_info">
        <h2>{name}</h2>
        <p>Last message</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarchat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
