import Phonetop from "../../assets/iPhone-13-Pro-Front-top.svg";
import PhoneMiddle from "../../assets/iPhone-13-Pro-Front-Middle.svg";
import star from "../../assets/Star.svg";
import circle from "../../assets/Ellipse.svg";
import frame from "../../assets/Frame.svg";
import { NavLink } from "react-router-dom";
import zdesign from "../../assets/zdesign.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Features from "../Features/Features";
import Testimonial from "../Tesimonial/Testimonial";
import FAQ from "../FAQ/FAQ";
import Advertisment from "../LowerArea/Advertisment";
import Footer from "../Footer/Footer";

export default function Header() {
  return (
    <div className="h-screen p-0 m-0 ">
      {/* Navbar */}
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
      <div className="w-[1080px] mx-[175px] relative bottom-[150px] flex justify-between h-full">
        <div className="absolute left-[150px] top-[130px]">
          <div className="bg-[#FF5555] w-[284px] h-[153px] blur-[40px] rounded-full absolute z-[-1] left-[33px]"></div>
          <div className="bg-[#FDE598] w-[290px] h-[153px] blur-[40px] top-[57px] left-0 rounded-full absolute -z-40"></div>
        </div>

        {/* Iphone group */}
        <div className="absolute left-[650px] top-[20px] overflow-x-hiden">
          <img
            src={Phonetop}
            className="absolute z-10 h-[500px] top-[70px]"
            alt="Iphone at top"
          />

          <img
            src={PhoneMiddle}
            className="absolute left-[122px] top-[77px] z-[9] h-[600px]"
            alt="Iphone in the middle"
          />
          <img
            src={Phonetop}
            className="absolute left-[240px] top-[145px] z-[8] h-[600px] "
            alt="Iphone at bottom"
          />
          <div className="flex">
            <img
              src={circle}
              className="relative left-[210px] top-[230px] w-[380px] h-[300px]"
            />
            <img
              src={circle}
              className=" absolute top-[180px] left-[200px] w-[380px] h-[350px]"
            />
            <img
              src={circle}
              className=" absolute top-[35px] left-[200px] w-[380px] h-[590px]"
            />
          </div>
          <div
            className=" w-[397px] h-[214px] bg-[#FF5555] rounded-full blur-[60px] absolute rotate-[150deg] 
        bottom-[-230px] left-[120px]"
          ></div>
          <img
            src={star}
            width={48}
            className="rotate-[150deg] absolute top-[100px] left-[450px]"
          />
        </div>

        <div className="absolute top-[150px]">
          <p className="text-[55px] font-clash-display font-bold items-start w-[620px]">
            Make The Best Financial Decisions{" "}
          </p>
          <p className="text-[18px] font-clash-display font-medium w-[550px]">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <span className="relative top-[20px]">
            <button
              className={`w-[180px] h-[60px] rounded-[4px] bg-black text-white font-clash-display font-medium`}
            >
              GetStarted <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button
              className={`w-[180px] h-[60px] rounded-[4px] bg-white text-black font-clash-display font-medium`}
            >
              <FontAwesomeIcon icon={faCirclePlay} /> Watch now
            </button>
          </span>
          <span>
            <img src={star} alt="Star" className="relative top-[40px] " />
            <img
              src={zdesign}
              alt="Achievments and features"
              className="h-[350px] relative bottom-[50px] left-[40px]"
            />
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center">
        <Features />
        <Testimonial />
        <FAQ />
        <Advertisment />
        <span className="mt-[190px]">
          <Footer />
        </span>
      </div>
    </div>
  );
}
