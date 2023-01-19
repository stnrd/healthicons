import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledRespirology = (
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
        d="M24.968 6h.047l-.004 5.935-.005 7.575c0 .786.282 1.03.417 1.123a.866.866 0 0 0 .35.137l.008.001h-.015l-.004-.001h-.003c-.001 0-.002 0-.044.999l-.043.999h-.01l-.014-.001-.036-.003a2.708 2.708 0 0 1-.411-.071 2.87 2.87 0 0 1-1.21-.648 2.87 2.87 0 0 1-1.62.72l-.036.002h-.023l-.002.001-.043-1-.043-.998h-.014l-.008.001h.007a.867.867 0 0 0 .35-.137c.136-.093.418-.338.417-1.124l-.005-7.575L22.968 6h.047H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H24.968Zm-7.262 8.24c3.83-.003 3.783 4.837 3.758 7.323l-.003.525c0 .507.023 1.106.048 1.76.115 3.038.276 7.27-1.539 9.082-2.247 2.245-6.744 3.37-8.995 1.503-2.25-1.867 1.483-20.188 6.73-20.193Zm8.784 7.32c-.029-2.485-.084-7.325 3.746-7.328 5.248-.005 9.012 18.31 6.764 20.181-2.247 1.871-6.747.753-8.997-1.488-1.818-1.81-1.664-6.041-1.554-9.079.024-.654.046-1.253.045-1.76 0-.16-.002-.336-.004-.526Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledRespirology);
export default ForwardRef;
