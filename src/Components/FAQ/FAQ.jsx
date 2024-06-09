import Box from "./Box/Box";
import star from "../../assets/Star.svg";
export default function FAQ() {
  return (
    <div className="flex flex-col gap-[40px] mt-[68px] relative">
      <img src={star} width={64} className="absolute left-[620px] top-[60px]" />
      <div className="flex flex-col gap-[4px]">
        <p className=" font-ClashMedium text-[18px] leading-[28px] text-[#FF5555] tracking-[16%]">
          FAQ
        </p>
        <p className="w-[497px] font-ClashBold text-[48px] leading-[48px]">
          Frequently Asked Questions
        </p>
      </div>
      <div className=" grid grid-cols-2 grid-rows-3 gap-[20px] w-[1090px]">
        <Box color="bg-[#FF5555]" />
        <Box color="bg-[#ffff]" />
        <Box color="bg-[#FF5555]" />
        <Box color="bg-[#ffff]" />
        <Box color="bg-[#FF5555]" />
        <Box color="bg-[#ffff]" />
      </div>
    </div>
  );
}
