import { BarsOutlined, SearchOutlined } from "@ant-design/icons";
import React from "react";
import "../_dist/navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-img">
        {" "}
        <img
          // className="nav-img"
          src="../../images/image-removebg-preview (1).png"
          alt="img grid"
        />
      </div>

      <ul className="nav-items">
        <li className="nav-item">Home</li>
        <li className="nav-item">Module</li>
        <li className="nav-item">Posts</li>
        <li className="nav-item">Archives</li>
        <li className="nav-item">Features</li>
        <SearchOutlined />
        <BarsOutlined />
      </ul>
    </div>
  );
};

export default Navbar;
