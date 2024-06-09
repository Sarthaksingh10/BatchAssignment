import logo from "../../assets/Frame.svg";
import mail from "../../assets/mail.svg";
import call from "../../assets/call.svg";

export default function Footer() {
  return (
    <div className={`flex flex-col gap-[92px] items-center `}>
      <div className="flex gap-[65px]">
        <div className="flex flex-col gap-[16px]">
          <div className=" flex gap-[2px]">
            <img src={logo} />
            <button className=" font-Jakarta font-extrabold text-[41px] text-black self-center mb-[9px]">
              Uifry
            </button>
          </div>
          <div className="flex gap-[8px] items-center">
            <img src={mail} />
            <button className=" font-clash-display font-medium text-[16px] leading-[26px] text-black">
              Help@Frybix.com
            </button>
          </div>
          <div className="flex gap-[8px] items-center">
            <img src={call} />
            <button className=" font-clash-display font-medium text-[16px] leading-[26px] text-black">
              +1 234 456 678 89
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <button className=" font-clash-display font-medium text-[32px] leading-[42px] text-black ">
            Links
          </button>
          <button className=" font-clash-display font-medium text-[16px] leading-[26px] text-black">
            Home
          </button>
          <button className=" font-clash-display font-medium text-[16px] leading-[26px] text-black">
            About Us
          </button>
          <button className=" font-clash-display font-medium text-[16px] leading-[26px] text-black">
            Bookings
          </button>
          <button className=" font-clash-display font-medium text-[16px] leading-[26px] text-black">
            Blog
          </button>
        </div>
        <div className="flex flex-col gap-[16px]">
          <button className=" font-clash-display font-medium text-[32px] leading-[42px] text-black ">
            Legal
          </button>
          <button className=" font-clash-display font-medium text-[16px] leading-[26px] text-black">
            Terms of Use
          </button>
          <button className=" font-clash-display font-medium text-[16px] leading-[26px] text-black">
            Privacy Policy
          </button>
          <button className=" font-clash-display font-medium text-[16px] leading-[26px] text-black">
            Cookie Policy
          </button>
        </div>
        <div className="flex flex-col gap-[16px]">
          <button className=" font-clash-display font-medium text-[32px] leading-[42px] text-black ">
            Product
          </button>
          <button className=" font-clash-display font-medium text-[16px] leading-[26px] text-black">
            Take Tour
          </button>
          <button className=" font-clash-display font-medium text-[16px] leading-[26px] text-black">
            Live Chat
          </button>
          <button className=" font-clash-display font-medium text-[16px] leading-[26px] text-black">
            Reviews
          </button>
        </div>
        <div className="flex flex-col gap-[16px]">
          <button className=" font-clash-display font-medium text-[32px] leading-[42px] text-black ">
            Newsletter
          </button>
          <button className=" font-clash-display font-medium text-[16px] leading-[26px] text-black">
            Stay Up to Date
          </button>
          <div className="flex">
            <div className="w-[160px] h-[61px] bg-white rounded-[4px] flex justify-center">
              <input
                type="text"
                placeholder="Your Email"
                className=" placeholder:text-[#81848A] font-clash-display font-medium text-[16px] leading-[26px] focus:outline-none w-[120px]"
              />
            </div>
            <div className="w-[160px] h-[61px] bg-black rounded-[4px] flex items-center justify-center">
              <button className=" font-clash-display font-medium text-[16px] leading-[26px] text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1090px]">
        <hr />

        <div className="w-full h-[104px] flex items-center justify-center">
          <button className=" font-medium text-[16px] leading-[26px]">
            Copyright 2022 uifry.com all rights reserved
          </button>
        </div>
      </div>
    </div>
  );
}
