import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RiChatSmile3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Nav() {
    const [activeItem, setActiveItem] = useState("Home");

    const handleItemClick = (itemName) => {
      setActiveItem(itemName);
    };
  return (
    <div className="mx-24 ">
      <nav className="flex justify-between">
        <div className="flex space-x-2 justify-center items-center text-4xl text-blue-600 font-bold">
          <h2 className="">Hello</h2>
          <RiChatSmile3Fill />
        </div>
        <div className="flex space-x-4 text-gray-500 nav-text">
          <Link
            to="/Home"
            className={activeItem === "Home" ? "active" : ""}
            onClick={() => handleItemClick("Home")}
          >
            {" "}
            Home
          </Link>
          <Link
            to="/Company"
            className={activeItem === "Company" ? "active" : ""}
            onClick={() => handleItemClick("Company")}
          >
            {" "}
            Company
          </Link>
          <Link
            to="/Blog"
            className={activeItem === "Blog" ? "active" : ""}
            onClick={() => handleItemClick("Blog")}
          >
            {" "}
            Blog
          </Link>
          <Link
            to="/Services"
            className={activeItem === "Services" ? "active" : ""}
            onClick={() => handleItemClick("Services")}
          >
            {" "}
            Services
          </Link>
          <Link
            to="/Contact"
            className={activeItem === "Contact" ? "active" : ""}
            onClick={() => handleItemClick("Contact")}
          >
            {" "}
            Contact
          </Link>
          <BsSearch className="mt-2" />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
