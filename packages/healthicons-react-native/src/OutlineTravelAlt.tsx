import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineTravelAlt = (
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
        d="M35.5 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM11 28a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3v-2ZM8 40v-8h2v8H8Zm8-12v2h-3v-2h3Zm1 4h-5v8h5v-8Zm2 0v8h2v-8h-2Z"
        clipRule="evenodd"
      />
      <Path fill="#333" d="M38 22a2 2 0 0 0-2-2v4a2 2 0 0 0 2-2Z" />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M28 42a3 3 0 0 1-3-3V22h-5a3 3 0 1 1 0-6h17.016C38.129 16 42 17.364 42 21.571c0 3.339-2.437 5.427-4 6.147V39a3 3 0 1 1-6 0v-8h-1v8c0 .701-.24 1.346-.644 1.857A2.994 2.994 0 0 1 28 42Zm8-15.563 1.163-.536c1.144-.527 2.837-2.047 2.837-4.33 0-1.394-.605-2.238-1.308-2.789a4.28 4.28 0 0 0-1.126-.63 2.741 2.741 0 0 0-.543-.15C37.009 18 37.007 18 37.015 18H20a1 1 0 1 0 0 2h7v19a1 1 0 1 0 2 0V29h5v10a1 1 0 1 0 2 0V26.437Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineTravelAlt);
export default ForwardRef;
