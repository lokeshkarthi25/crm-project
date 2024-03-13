import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiAdminLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { TbCirclesRelation } from "react-icons/tb";
import { MdStorefront } from "react-icons/md";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <body>
      <div className="sidebar">
        <div className="logo-detail">
          <TbCirclesRelation className="icon" />
          <div className="logo-name"> CRM </div>
        </div>

        <ul className="nav-list">
          <li onClick={() => navigate("/")}>
            <p>
              <LuLayoutDashboard className="icon" />
              <span className="link-name">DashBoard</span>
            </p>
            {/* <span className="tooltip">DashBoard</span> */}
          </li>
          <li onClick={() => navigate("/customer")}>
            <p>
              <BsPerson className="icon" />
              <span className="link-name">Customer</span>
            </p>

            {/* <span className="tooltip">Customer</span> */}
          </li>
          <li onClick={() => navigate("/order")}>
            <p>
              <AiOutlineShoppingCart className="icon" />
              <span className="link-name">Order</span>
            </p>

            {/* <span className="tooltip">Order</span> */}
          </li>
          <li onClick={() => navigate("/product")}>
            <p>
              <MdStorefront className="icon" />
              <span className="link-name">Product</span>
            </p>

            {/* <span className="tooltip">Product</span> */}
          </li>
          <li onClick={() => navigate("/about")}>
            <p>
              <AiOutlineExclamationCircle className="icon" />
              <span className="link-name">About</span>
            </p>
            {/* <span className="tooltip">About</span> */}
          </li>
          <li className="profile">
            <div className="profile-details">
              <RiAdminLine className="icon" />
              <div className="profile-content">
                <div className="name">Admin</div>
              </div>
            </div>
          </li>
        </ul>
        <Outlet />
      </div>
    </body>
  );
};
export default Sidebar;
