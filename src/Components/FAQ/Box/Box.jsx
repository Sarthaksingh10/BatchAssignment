import propTypes from "prop-types";
export default function Box({ color }) {
  return (
    <div
      className={`p-[31px] rounded-[8px] flex items-center justify-center ${color} `}
    >
      <div className="flex flex-col gap-[8px] w-[474px]">
        <p className=" font-clash-display font-semibold text-[28px] leading-[28px] text-black">
          The Best Financial Accounting App Ever
        </p>
        <p className=" font-clash-display font-medium text-[18px] leading-[28px] text-black">
          “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
          In ultrices malesuada elit mauris.
        </p>
      </div>
    </div>
  );
}

Box.propTypes = {
  color: propTypes.string,
};
