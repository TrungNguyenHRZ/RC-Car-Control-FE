import React from "react";
import {
  FaBolt,
  FaCarSide,
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
  FaRegCalendarAlt,
  FaRegSun,
  FaStickyNote,
  FaTachometerAlt,
  FaWrench,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="bg-[#4e73df] h-screen px-[25px]">
      <Link to={"/"}>
        <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
          <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
            Admin panel
          </h1>
        </div>
      </Link>

      <Link to={"/"}>
        <div className="flex items-center gap-[10px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]">
          <FaTachometerAlt color="#fff" />
          <p className="text-[14px] leading-[20px] font-bold text-white">
            Dashboard
          </p>
        </div>
      </Link>
      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
          INTERFACE
        </p>
        <Link to={"pages"}>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <FaCarSide color="#fff" />
              <p className="text-[14px] leading-[20px] font-normal text-white">
                Match Information
              </p>
            </div>
            <FaChevronRight color="#fff" />
          </div>
        </Link>
        <Link to={"charts"}>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <FaChartBar color="#fff" />
              <p className="text-[14px] leading-[20px] font-normal text-white">
                Charts
              </p>
            </div>
            <FaChevronRight color="#fff" />
          </div>
        </Link>
      </div>

      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3] pb-[15px]">
        <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
          ADDONS
        </p>
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaRegSun color="#fff" />
            <p className="text-[14px] leading-[20px] font-normal text-white">
              Components
            </p>
          </div>
          <FaChevronRight color="#fff" />
        </div>
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaWrench color="#fff" />
            <p className="text-[14px] leading-[20px] font-normal text-white">
              Ultilities
            </p>
          </div>
          <FaChevronRight color="#fff" />
        </div>
        <div className="flex items-center gap-[10px] py-[15px]">
          <FaRegCalendarAlt color="#fff" />
          <p className="text-[14px] leading-[20px] font-normal text-white">
            Tables
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center pt-[15px]">
          <div className="h-[40px] w-[40px] bg-[#3c5ec1] rounded-full flex items-center justify-center cursor-pointer">
            <FaChevronLeft color="#fff" />
          </div>
        </div>
        <div className="bg-[#395cbf] mt-[15px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[15px] rounded-[3px]">
          <FaBolt color="#fff" />
          <p className="text-[12px] leading-[18px] font-normal text-white/[0.4] text-center">
            Demo feature. Coming soon.
          </p>
          <button className="bg-[#17A673] text-white flex items-center justify-center h-[30px] w-full rounded-[3px] text-[14px] leading-[21px] font-normal">
            SUBSCRIBE !!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
