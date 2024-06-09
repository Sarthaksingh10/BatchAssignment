import propTypes from "prop-types";

export default function Button({ children, background, textbg }) {
  return (
    <button
      className={`w-[180px] h-[60px] rounded-[4px] bg-${background} text-${textbg} font-clash-display font-medium`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: propTypes.string,
  background: propTypes.string,
  textbg: propTypes.string,
};
