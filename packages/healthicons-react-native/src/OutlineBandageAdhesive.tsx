import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineBandageAdhesive = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M26.828 8.444a9 9 0 0 1 12.728 12.728L21.172 39.557A9 9 0 0 1 8.444 26.829L26.828 8.444Zm11.314 1.414a7 7 0 0 0-9.9 0L9.859 28.243a7 7 0 1 0 9.9 9.9l18.384-18.385a7 7 0 0 0 0-9.9Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M24 16.929a2 2 0 0 1 2.828 0l4.243 4.242a2 2 0 0 1 0 2.829L24 31.07a2 2 0 0 1-2.828 0l-4.243-4.242a2 2 0 0 1 0-2.828l7.07-7.071Zm5.657 5.657-4.243-4.243-7.071 7.071 4.243 4.243 7.07-7.071Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M33.121 16.121a1 1 0 1 1-1.414-1.413 1 1 0 0 1 1.414 1.413Zm1-4a1 1 0 1 1-1.414-1.413 1 1 0 0 1 1.414 1.413Zm-4 1a1 1 0 1 1-1.414-1.413 1 1 0 0 1 1.414 1.413Zm6 6a1 1 0 1 1-1.414-1.413 1 1 0 0 1 1.414 1.413Zm1-4a1 1 0 1 1-1.414-1.413 1 1 0 0 1 1.414 1.413ZM14.707 31.707a1 1 0 1 1 1.414 1.415 1 1 0 0 1-1.414-1.415Zm-1 4a1 1 0 1 1 1.414 1.415 1 1 0 0 1-1.414-1.415Zm4-1a1 1 0 1 1 1.414 1.415 1 1 0 0 1-1.414-1.415Zm-6-6a1 1 0 1 1 1.414 1.415 1 1 0 0 1-1.414-1.415Zm-1 4a1 1 0 1 1 1.414 1.415 1 1 0 0 1-1.414-1.415Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineBandageAdhesive);
export default ForwardRef;
