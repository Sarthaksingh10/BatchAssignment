import circle from "../../assets/Ellipse.svg";
import iphone from "../../assets/iPhone-13-Pro-Front.svg";
import iphone2 from "../../assets/iPhone-13-Pro-Front-other.svg";
import star from "../../assets/Star.svg";
import chakra from "../../assets/chakra.svg";
import cube from "../../assets/cube-04.svg";
import smallstar from "../../assets/star-05.svg";
import CustomCircle from "../../assets/customcircle.svg";
import NotificationBell from "../../assets/Notificationbell.svg";
export default function Features() {
  return (
    <div className="relative bottom-[200px] h-[1800px]">
      <div className="flex items-center mx-[32px]">
        <div>
          <div className="relative top-[300px]">
            <img src={star} alt="star" />
          </div>
          <div className="relative left-[50px] top-[230px]">
            <div className="bg-[#FF5555] w-[284px] h-[153px] blur-[40px] rounded-full absolute z-[-1] left-[33px]"></div>
            <div className="bg-[#FDE598] w-[290px] h-[153px] blur-[40px] top-[57px] left-0 rounded-full absolute -z-40"></div>
          </div>
          <span className="flex relative top-[90px] left-[50px]  w-[600px]">
            <img
              src={circle}
              alt="Ellipse"
              className="h-[630px] w-[330px] relative left-[30px] top-[10px] rotate-12"
            />
            <img
              src={circle}
              alt="Ellipse"
              className="h-[630px] w-[330px] relative right-[320px] top-[70px] rotate-12"
            />
            <img
              src={circle}
              alt="Ellipse"
              className="h-[630px] w-[330px] relative right-[640px] top-[40px] rotate-12"
            />
          </span>
          <img
            src={iphone}
            alt="IPhone"
            className="h-[550px] relative bottom-[420px] left-[100px]"
          />
        </div>
        <div className="relative bottom-[120px]">
          <div className="flex flex-col gap-[32px] self-center  ">
            <div className="flex flex-col gap-[4px]">
              <p className=" font-clash-display font-semibold text-[18px] leading-[28px] tracking-[16%] text-[#FF5555]">
                FEATURES
              </p>
              <p className=" font-clash-display font-bold text-[48px] leading-[48px] text-black">
                Uifry Premium
              </p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="flex gap-[8px] items-center">
                <img src={smallstar} />
                <p className=" font-clash-display font-semibold text-[18px] leading-[28px]">
                  Budgeting Intervals
                </p>
              </div>
              <p className=" font-clash-display font-medium w-[620px] text-[18px] leading-[28px] text-black/50">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="flex gap-[8px] items-center">
                <img src={chakra} />
                <p className=" font-clash-display font-semibold text-[18px] leading-[28px]">
                  Budgeting Intervals
                </p>
              </div>
              <p className=" font-clash-display font-medium w-[620px] text-[18px] leading-[28px] text-black/50">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="flex gap-[8px] items-center">
                <img src={cube} />
                <p className=" font-clash-display font-semibold text-[18px] leading-[28px]">
                  Budgeting Intervals
                </p>
              </div>
              <p className=" font-clash-display font-medium w-[620px] text-[18px] leading-[28px] text-black/50">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
          </div>
        </div>
        <div className="relative right-[20px] bottom-[280px]">
          <div className="bg-[#FF5555] w-[284px] h-[153px] blur-[40px] rounded-full absolute z-[-1] left-[33px]"></div>
          <div className="bg-[#FDE598] w-[290px] h-[153px] blur-[40px] top-[57px] left-0 rounded-full absolute -z-40"></div>
        </div>
      </div>

      <div className="flex items-center flex-row-reverse relative bottom-[650px] mx-[32px]">
        <div>
          <div className="relative top-[250px] left-[400px]">
            <img src={star} alt="star" />
          </div>
          <div className="relative left-[50px] top-[260px]">
            <div className="bg-[#FF5555] w-[284px] h-[153px] blur-[40px] rounded-full absolute z-[-1] left-[33px]"></div>
            <div className="bg-[#FDE598] w-[290px] h-[153px] blur-[40px] top-[57px] left-0 rounded-full absolute -z-40"></div>
          </div>
          <span className="flex relative top-[90px] left-[50px]  w-[600px]">
            <img
              src={circle}
              alt="Ellipse"
              className="h-[630px] w-[330px] relative left-[30px] top-[10px] rotate-12"
            />
            <img
              src={circle}
              alt="Ellipse"
              className="h-[630px] w-[330px] relative right-[320px] top-[70px] rotate-12"
            />
            <img
              src={circle}
              alt="Ellipse"
              className="h-[630px] w-[330px] relative right-[640px] top-[40px] rotate-12"
            />
          </span>
          <img
            src={iphone2}
            alt="IPhone"
            className="h-[550px] relative bottom-[420px] left-[100px]"
          />
        </div>
        <div className="relative bottom-[120px]">
          <div className="flex flex-col gap-[32px] self-center  ">
            <div className="flex flex-col gap-[4px]">
              <p className=" font-clash-display font-semibold text-[18px] leading-[28px] tracking-[16%] text-[#FF5555]">
                ADVANTAGES
              </p>
              <p className=" font-clash-display font-bold text-[48px] leading-[48px] text-black">
                Why Choose Uifry?
              </p>
            </div>
            <div className="flex flex-col gap-[12px] ">
              <div className="flex gap-[8px] items-center">
                <img src={NotificationBell} />
                <p className=" font-clash-display font-semibold text-[18px] leading-[28px]">
                  Clever Notification
                </p>
              </div>
              <p className=" font-clash-display font-medium w-[620px] text-[18px] leading-[28px] text-black/50">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between relative bottom-[1300px] mx-[32px] mt-0">
        <div>
          <div className="relative top-[250px] left-[400px]">
            <img src={star} alt="star" />
          </div>
          <div className="relative left-[50px] top-[260px]">
            <div className="bg-[#FF5555] w-[284px] h-[153px] blur-[40px] rounded-full absolute z-[-1] left-[33px]"></div>
            <div className="bg-[#FDE598] w-[290px] h-[153px] blur-[40px] top-[57px] left-0 rounded-full absolute -z-40"></div>
          </div>
          <span className="flex relative top-[90px] left-[50px]  w-[600px]">
            <img
              src={circle}
              alt="Ellipse"
              className="h-[630px] w-[330px] relative left-[30px] top-[10px] rotate-12"
            />
            <img
              src={circle}
              alt="Ellipse"
              className="h-[630px] w-[330px] relative right-[320px] top-[70px] rotate-12"
            />
            <img
              src={circle}
              alt="Ellipse"
              className="h-[630px] w-[330px] relative right-[640px] top-[40px] rotate-12"
            />
          </span>
          <img
            src={iphone}
            alt="IPhone"
            className="h-[550px] relative bottom-[420px] left-[100px]"
          />
        </div>
        <div className="relative bottom-[120px]">
          <div className="flex flex-col gap-[32px] self-center  ">
            <div className="flex flex-col gap-[12px] ">
              <div className="flex gap-[8px] items-center">
                <img src={CustomCircle} />
                <p className=" font-clash-display font-semibold text-[18px] ">
                  Fully Customizable
                </p>
              </div>
              <p className=" font-clash-display font-medium w-[620px] text-[18px] leading-[28px] text-black/50">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
