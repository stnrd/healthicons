import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativePwid = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M48 0H0v48h48V0ZM27.707 15.293 27 14.586l-1.293-1.293-1.414 1.414L25.586 16l-5.879 5.879a3.001 3.001 0 0 0-.529 3.529l-1.31 1.31-2.164-2.454-7.377 7.765 4.124 2.886A6 6 0 0 0 15.89 36H31a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5v6h-3a3 3 0 0 1-3-3v-1.5h2V31a1 1 0 0 0 1 1h1v-4a2 2 0 0 0-2-2H34l-3 2h-9.464l-4 4h-2.122l5.179-5.178a3.001 3.001 0 0 0 3.528-.53L30 20.415l1.293 1.293 1.414-1.414L31.414 19l-.707-.707-.793-.793L33 14.414l1.293 1.293 1.414-1.414-4-4-1.414 1.414L31.586 13 28.5 16.086l-.793-.793Zm-3.728 5.143L27 17.414 28.586 19l-3.022 3.021-1.585-1.585ZM16.475 33.06l-.06-.061h.12l-.06.06ZM4 11l10.375 11.759-7.705 8.11L4 29V11Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativePwid);
export default ForwardRef;
