import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLungs = (passedProps: SvgProps) => {
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
        d="M16.542 11.991c5.85.005 5.312 7.962 5.31 11.145-.004 4.062.993 12.261-2.14 15.382-3.194 3.18-9.577 4.767-12.766 2.112-3.189-2.656 2.15-28.645 9.596-28.639ZM31.483 12.003c-5.85-.005-5.325 7.953-5.328 11.136-.003 4.063-1.014 12.26 2.115 15.386 3.188 3.186 9.569 4.782 12.762 2.133 3.193-2.65-2.104-28.649-9.55-28.655Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.017 6h2l-.011 14.494c-.002 2.101-.939 3.305-1.999 3.923a4.314 4.314 0 0 1-1.976.572h-.026v-2h-.01H21a2.172 2.172 0 0 0 .283-.036c.204-.04.465-.117.718-.264.44-.256 1.003-.8 1.005-2.197L23.017 6Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.017 6h-2l-.011 14.492c-.002 2.101.932 3.307 1.991 3.927a4.314 4.314 0 0 0 1.975.574H27l.002-1c0-1 .002-1 .002-1H27.013h-.005c-.009 0-.026 0-.051-.003a2.316 2.316 0 0 1-.949-.298c-.44-.257-1.003-.801-1.001-2.198L25.017 6Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgLungs;
