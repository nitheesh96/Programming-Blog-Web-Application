import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function 
SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
       <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT </span>
        <img
          src="https://th.bing.com/th/id/OIP.KOjQx9eQSOX_PTDmVRuzugHaE8?w=225&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt=""
        />
        <p>
          This is a programming blog website for our college , where students can share their knowlegde about programming and help others.
        </p>
    </div>
    <div className="sidebarItem">
    
        <span className="sidebarTitle">CATAGERIOES</span>
        <ul className="sidebarList">
          
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
            
          
          
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
    </div>
    </div>
  )
}
