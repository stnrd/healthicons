import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineDiabetesMeasure = (
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
        d="m32.956 8.196-18 .015.015 18 18-.015-.015-18ZM23.967 21.87c2.24-.002 3.999-1.68 3.997-3.812-.002-1.981-4.006-6.854-4.006-6.854s-3.996 4.727-3.994 6.86c.002 2.133 1.763 3.808 4.003 3.806Zm-7.982 7.117a1 1 0 0 1 .999-1l4-.004a1 1 0 0 1 .001 2l-4 .003a1 1 0 0 1-1-1Zm10-.008a1 1 0 0 1 .999-1.001l4-.003a1 1 0 1 1 .001 2l-4 .003a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m12.954 6.213 22-.018a1 1 0 0 1 1.001.999l.02 25a1 1 0 0 1-.999 1l-6 .005.002 2 6-.004a3 3 0 0 0 2.997-3.003l-.02-25a3 3 0 0 0-3.002-2.997l-22 .018a3 3 0 0 0-2.998 3.002l.02 25a3 3 0 0 0 3.003 2.998l6-.005-.002-2-6 .005a1 1 0 0 1-1-1l-.02-25a1 1 0 0 1 .998-1Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m27.976 33.2-8 .007.008 9 8-.007-.008-9Zm-10.001-1.992.01 13 12-.01-.01-13-12 .01Z"
        clipRule="evenodd"
      />
      <Path fill="#333" d="M25.98 38.202a2 2 0 1 1-4 .003 2 2 0 0 1 4-.003Z" />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineDiabetesMeasure);
export default ForwardRef;
