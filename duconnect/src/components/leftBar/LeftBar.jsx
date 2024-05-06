import { Link } from "react-router-dom";
import "./leftBar.scss";
import Home from "../../assets/1.png";
import Notifications from "../../assets/2.png";
import Settings from "../../assets/3.png";
import Profile from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";

import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);
  const mainTray = [
    {
      name: "Home",
      to: "/",
      src: Home,
    },
    {
      name: "Notification",
      to: "/notification",
      src: Notifications,
    },
    {
      name: "Settings",
      to: "/settings",
      src: Settings,
    },
    {
      name: "Profile",
      to: "/profile",
      src: Profile,
    },
    {
      name: "Terms and Conditions",
      to: "/terms",
      src: Memories,
    },
  ];
  const shortcutTray = [
    {
      name: "Events",
      to: "/event",
      src: Events,
    },
    {
      name: "Blood Donations",
      to: "/blood-donation",
      src: Gaming,
    },
    {
      name: "Articles",
      to: "/article",
      src: Gallery,
    },
  ];
  const othersTray = [
    {
      name: "Fundraiser",
      to: "/fundraiser",
      src: Fund,
    },
    {
      name: "Tutorials",
      to: "/tutorials",
      src: Tutorials,
    },
    {
      name: "Courses",
      to: "/courses",
      src: Courses,
    },
  ];
  const entireTray = [
    { name: "", elements: mainTray },
    { name: "Your shortcuts", elements: shortcutTray },
    { name: "Others", elements: othersTray },
  ];
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
        </div>
        {entireTray.map((tray) => (
          <div>
            <div className="menu">
              <span>{tray.name}</span>
              {tray.elements.map((link, index) => (
                <Link key={index} to={link.to} className="item">
                  <img src={link.src} alt={link.name} />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
