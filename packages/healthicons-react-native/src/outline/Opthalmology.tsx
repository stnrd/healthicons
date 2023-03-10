import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOpthalmology = (passedProps: SvgProps) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 24.4S30.3 16 24.037 16C17.774 16 10 24.4 10 24.4s7.774 8.4 14.037 8.4C30.3 32.8 38 24.4 38 24.4Zm-22.11-2.615a40.797 40.797 0 0 0-3.055 2.615c.78.736 1.838 1.678 3.055 2.616 1.3 1 2.741 1.966 4.19 2.675 1.467.718 2.814 1.109 3.957 1.109 1.142 0 2.484-.391 3.942-1.108 1.44-.708 2.873-1.673 4.163-2.672a40.278 40.278 0 0 0 3.036-2.62 40.278 40.278 0 0 0-3.036-2.62c-1.29-1-2.722-1.964-4.163-2.672C26.52 18.39 25.179 18 24.037 18c-1.143 0-2.49.392-3.957 1.109-1.449.709-2.89 1.675-4.19 2.675Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 30.1a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Zm0 2a7.7 7.7 0 1 0 0-15.4 7.7 7.7 0 0 0 0 15.4Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 27.9a3.5 3.5 0 0 0 2.659-5.776 1.05 1.05 0 1 1-.382-.382A3.5 3.5 0 1 0 24 27.9Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgOpthalmology;
