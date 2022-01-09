import { Box } from "@chakra-ui/layout";
import { useState, useEffect } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from '../components/miscellaneous/SideDrawer';
import { useHistory, useLocation } from "react-router";
import PageImpl from "./PageImpl";

const Chatpage = () => {
   const location = useLocation();

  //  useEffect(() => {
  //   window.location.reload()
  // }, []);

   return <PageImpl/>
};

export default Chatpage;