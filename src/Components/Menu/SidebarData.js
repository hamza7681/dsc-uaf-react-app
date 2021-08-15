import React from "react";
import {
  AiFillHome,
  FaUsers,
  SiGooglecalendar,
  FaPhoneSquare,
} from "react-icons/all";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Event",
    path: "/events",
    icon: <SiGooglecalendar />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <FaUsers />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaPhoneSquare />,
    cName: "nav-text",
  },
];
