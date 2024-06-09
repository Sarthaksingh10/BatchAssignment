import star from "../../assets/Star.svg";
import applelogo from "../../assets/applelogo.svg";
import starwhite from "../../assets/whitestar.svg";
import iphone13 from "../../assets/iPhone 13 Pro.svg";
import circle from "../../assets/Ellipse 2157.svg";
import circle2 from "../../assets/Ellipse 2156.svg";
export default function Advertisment() {
  return (
    <>
      <div className="relative z-[0] right-[650px] top-[105px]">
        <div className="w-[275px] h-[148px] rotate-[40deg] rounded-full bg-[#FDE598] blur-[50px] absolute"></div>
        <div className="w-[275px] h-[148px] rotate-[40deg] rounded-full bg-[#FF5555] blur-[50px] absolute top-[77px]"></div>
      </div>
      <div className="mt-[156px] w-[1090px] h-[508px] bg-black rounded-[8px] flex items-center z-[1] relative ">
        <div className="flex flex-col gap-[16px] w-[547px] ml-[77px] ">
          <p className=" font-ClashBold text-[48px] leading-[48px] text-white">
            Ready To Get Started?
          </p>
          <p className="text-[18px] leading-[28px] text-white font-Clash">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <div className="w-[208px] h-[60px] rounded-[4px] bg-white flex items-center justify-center">
            <div className="flex gap-[12px] items-center">
              <p className=" font-medium text-[18px] leading-[28px] text-black">
                Download App
              </p>
              <img src={applelogo} />
            </div>
          </div>
        </div>
        <img src={circle} className="absolute bottom-0 " />
        <img src={circle2} className="absolute right-0 top-0" />
        <img src={starwhite} className="absolute top-[20px] right-[350px]" />
        <img
          src={starwhite}
          width={48}
          className="absolute rotate-[-45deg] top-[338px] left-[445px]"
        />
        <img src={iphone13} className="absolute right-0 z-[1]" />
        <div className="absolute z-[0] right-[325px] top-[165px]">
          <div className="w-[275px] h-[148px] rotate-[40deg] rounded-full bg-[#FDE598] blur-[50px] absolute"></div>
          <div className="w-[275px] h-[148px] rotate-[40deg] rounded-full bg-[#FF5555] blur-[50px] absolute top-[77px]"></div>
        </div>
        <img src={star} className="absolute top-[-70px] right-[-120px]" />
        <img
          src={star}
          width={48}
          className="absolute left-[-150px] rotate-[-45deg] top-[140px]"
        />
      </div>
    </>
  );
}
