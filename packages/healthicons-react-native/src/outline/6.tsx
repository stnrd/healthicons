import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg6 = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.484 14.995A9.033 9.033 0 0 0 25.968 9h-3.936C17.06 9 13 13.014 13 18v12c0 4.986 4.06 9 9.032 9h3.936C30.94 39 35 34.986 35 30s-4.06-9-9.032-9h-3.936a9.046 9.046 0 0 0-3.032.52V18c0-1.642 1.343-3 3.032-3h3.936c1.326 0 2.449.841 2.862 2.005a3 3 0 0 0 5.654-2.01ZM25.968 11a7.032 7.032 0 0 1 6.631 4.665 1 1 0 1 1-1.884.67A5.033 5.033 0 0 0 25.968 13h-3.936C19.247 13 17 15.244 17 18v5.08a1 1 0 0 0 1.501.865A7.021 7.021 0 0 1 22.032 23h3.936C29.847 23 33 26.13 33 30s-3.153 7-7.032 7h-3.936C18.153 37 15 33.87 15 30V18c0-3.87 3.153-7 7.032-7h3.936Zm0 16C27.657 27 29 28.358 29 30s-1.343 3-3.032 3h-3.936C20.343 33 19 31.642 19 30s1.343-3 3.032-3h3.936ZM31 30c0-2.756-2.247-5-5.032-5h-3.936C19.247 25 17 27.244 17 30s2.247 5 5.032 5h3.936C28.753 35 31 32.756 31 30Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(Svg6);
export default ForwardRef;
