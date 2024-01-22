import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBandageAdhesive = (passedProps: SvgProps) => {
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
        d="M26.828 8.444a9 9 0 0 1 12.728 12.728L21.172 39.557A9 9 0 0 1 8.444 26.829L26.828 8.444Zm11.314 1.414a7 7 0 0 0-9.9 0L9.859 28.243a7 7 0 1 0 9.9 9.9l18.384-18.385a7 7 0 0 0 0-9.9Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 16.929a2 2 0 0 1 2.828 0l4.243 4.242a2 2 0 0 1 0 2.829L24 31.07a2 2 0 0 1-2.828 0l-4.243-4.242a2 2 0 0 1 0-2.828l7.07-7.071Zm5.657 5.657-4.243-4.243-7.071 7.071 4.243 4.243 7.07-7.071Z"
        fill="#000"
      />
      <Path
        d="M33.121 16.121a1 1 0 1 1-1.414-1.413 1 1 0 0 1 1.414 1.413ZM34.121 12.121a1 1 0 1 1-1.414-1.413 1 1 0 0 1 1.414 1.413ZM30.121 13.121a1 1 0 1 1-1.414-1.413 1 1 0 0 1 1.414 1.413ZM36.121 19.121a1 1 0 1 1-1.414-1.413 1 1 0 0 1 1.414 1.413ZM37.121 15.121a1 1 0 1 1-1.414-1.413 1 1 0 0 1 1.414 1.413ZM14.707 31.707a1 1 0 1 1 1.414 1.415 1 1 0 0 1-1.414-1.415ZM13.707 35.707a1 1 0 1 1 1.414 1.415 1 1 0 0 1-1.414-1.415ZM17.707 34.707a1 1 0 1 1 1.414 1.415 1 1 0 0 1-1.414-1.415ZM11.707 28.707a1 1 0 1 1 1.414 1.415 1 1 0 0 1-1.414-1.415ZM10.707 32.707a1 1 0 1 1 1.414 1.415 1 1 0 0 1-1.414-1.415Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgBandageAdhesive;
