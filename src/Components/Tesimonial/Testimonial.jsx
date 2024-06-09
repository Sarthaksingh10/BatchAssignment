import star from "../../assets/Star.svg";
import circles from "../../assets/Circles.svg";
import fivephot from "../../assets/5photo.svg";
import coverphoto from "../../assets/covertesimonial.svg";
export default function Testimonial() {
  return (
    <div className="flex flex-col items-center  w-[1185px]">
      <div className="flex flex-col gap-[4px] items-center">
        <p className=" font-clash-display font-medium text-[18px] leading-[28px] tracking-[18%]">
          TESTIMONIAL
        </p>
        <p className=" font-clash-display font-semibold text-[48px] leading-[48px] w-[455px] text-center">
          What Our Users Say About Us?
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center relative">
          <img src={coverphoto} className="relative top-[80px]" />
          <img
            src={circles}
            className="absolute left-[-78px] top-[-5px] z-[-1]"
          />
          <div className="absolute z-[-10] left-[25px] bottom-[320px]">
            <div className=" w-[293px] h-[158px] bg-[#FF5555] rounded-full blur-[50px] z-[2] absolute left-[34px]"></div>
            <div className=" w-[299px] h-[158px] bg-[#FDE598] rounded-full blur-[50px] z-[1] absolute top-[79px]"></div>
          </div>
          <img
            src={star}
            width={48}
            className="absolute rotate-[-45deg] bottom-[-50px] left-[-70px]"
          />
        </div>
        <div className="flex flex-col gap-[24px] self-center">
          <p className=" font-clash-display font-semibold text-[28px] leading-[28px] w-[442px]">
            The Best Financial Accounting App Ever
          </p>
          <p className=" font-medium text-[18px] leading-[28px] text-black/50">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <img src={fivephot} width={192} />
          <p className=" font-clash-display font-semibold text-[18px] leading-[28px] ">
            Nick Jonas
          </p>
        </div>
      </div>
    </div>
  );
}
