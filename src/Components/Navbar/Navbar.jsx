import frame from "../../assets/Frame.svg";

import { NavLink } from "react-router-dom";

export default function TopNavbar() {
  return (
    <div className=" bg-white ">
      <nav className="   w-[1080px] mx-[175px] my-[40px] flex justify-between">
        <ul className="flex justify-between gap-[40px] items-center w-full">
          <div className="flex gap-[40px]">
            <li className="flex items-center font-clash-display font-black text-[32px]">
              <img src={frame} alt="Logo" />
              uifry
            </li>
            <span className="flex items-center gap-[24px]">
              <NavLink
                to=""
                className={({ isActive }) =>
                  `
              font-clash-display font-bold text-[26px]
                    ${isActive ? "text-[#FF5555] " : "text-[#000000]"}
                    `
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/Aboutus"
                className={({ isActive }) =>
                  `
              font-clash-display font-bold text-[26px]
                    ${isActive ? "text-[#FF5555]" : "text-[#000000]"}
                    `
                }
              >
                <li>About us</li>
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `
              font-clash-display font-bold text-[26px]
                    ${isActive ? "text-[#FF5555]" : "text-[#000000]"}
                    `
                }
              >
                <li>Pricing</li>
              </NavLink>
              <NavLink
                to="/Features"
                className={({ isActive }) =>
                  `
              font-clash-display font-bold text-[26px]
                    ${isActive ? "text-[#FF5555]" : "text-[#000000]"}
                    `
                }
              >
                <li>Features</li>
              </NavLink>
            </span>
          </div>
          <li className="gap-[375px] w-[180px] h-[60px] text-[26px] font-clash-display font-medium">
            <button
              className={`w-[180px] h-[60px] rounded-[4px] bg-black text-white font-clash-display font-medium`}
            >
              Download
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
