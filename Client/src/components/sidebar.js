import React from "react";
import "./sidebar.css";
import {
  FaHome,
  FaBook,
  FaGraduationCap,
  FaCommentDollar,
  FaRegListAlt,
  FaUserCog,
  FaSignOutAlt
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/home",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/",
      name: "Courses",
      icon: <FaBook />,
    },
    {
      path: "/student",
      name: "Students",
      icon: <FaGraduationCap />,
    },
    {
      path: "/",
      name: "Payment",
      icon: <FaCommentDollar />,
    },
    {
      path: "/",
      name: "Report",
      icon: <FaRegListAlt />,
    },
    {
      path: "/",
      name: "Settings",
      icon: <FaUserCog />,
    },
    {
        path: "/",
        name: "Logout",
        icon: <FaSignOutAlt />,
      },
  ];

  const adminName = "Saurabh Wagh"; 
  const adminPhotoUrl = require("../components/Admin-Profile-Vector-PNG-File.png");
 

  return (
    <div className="container">
      <div className="sidebar">
        <h1 className="Logo">
          <span className="yellow-line"></span>Crud Operation
        </h1>
        <div className="admin_info">
          <img src={adminPhotoUrl} alt="Admin" className="admin_photo" />
          <span className="admin_name">{adminName}</span>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
        
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;

