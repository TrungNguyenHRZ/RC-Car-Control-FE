import React, { useEffect, useState } from "react";
import { FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MatchInfo from "./Match/MatchInfo";
import Students from "./Students/Students";
import Team from "./Team/Team";

//import Cookies from "js-cookie";

const Dashboardview = ({}) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const showDropDown = () => {
    setOpen(!open);
  };

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  const handleLogout = async () => {
    setCookie("username", "", 0);
    navigate("/login");
  };

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  useEffect(() => {
    setUsername(getCookie("username"));
    var user = getCookie("username");
    if (user !== "") {
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex items-center justify-between h-[70px] shadow-lg px px-[25px]">
      <div className="flex items-center rounded-[5px]"></div>
      <div className="flex items-center gap-[15px] relative">
        <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
          <FaRegBell />
          <FaEnvelope />
        </div>
        <div
          className="flex items-center gap-[10px] relative"
          onClick={showDropDown}
        >
          <p>Administrator: {username}</p>
          <div className="w-[40px] h-[40px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative">
            <img src="" alt="" />
          </div>
          {open && (
            <div className="bg-white border h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]">
              <p className="cursor-pointer hover:text-[blue] font-semibold">
                Profile
              </p>
              <p className="cursor-pointer hover:text-[blue] font-semibold">
                Setting
              </p>
              <p
                className="cursor-pointer hover:text-[blue] font-semibold"
                onClick={handleLogout}
              >
                Log out
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboardview;
