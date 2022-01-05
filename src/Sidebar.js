import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import "./sidebar.css";
import SidebarChat from "./SidebarChat";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar></Avatar>
        <div className="sidebar_rightheader">
          <IconButton>
            <DonutLargeIcon></DonutLargeIcon>
          </IconButton>
          <IconButton>
            <ChatIcon></ChatIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchIcon></SearchIcon>
          <input placeholder="Search or start new chat "></input>
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat></SidebarChat>
        <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat>
      </div>
    </div>
  );
}

export default Sidebar;
