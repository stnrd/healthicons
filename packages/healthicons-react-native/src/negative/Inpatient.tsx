import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgInpatient = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="m16.117 17.188.364-.364a1.77 1.77 0 0 0 0-2.504l-1.8-1.8a1.771 1.771 0 0 0-2.504-.002l-.35.35 4.29 4.32ZM38 27v3H9v-8.644l5.275 5.311c.212.213.498.333.797.333H38Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM18.11 19.066h20.956c2.173 0 3.934 1.776 3.934 3.967a3.962 3.962 0 0 1-3 3.854V30h4v2h-2.05a3.5 3.5 0 1 1-4.899 0H10.948a3.5 3.5 0 1 1-4.899 0H4v-2h3V19.343l-.833-.839a4.034 4.034 0 0 1 0-5.676 3.953 3.953 0 0 1 3.892-1.021l.704-.704a3.771 3.771 0 0 1 5.333.002l1.8 1.801a3.77 3.77 0 0 1-.002 5.333l-.368.368.366.369c.058.058.137.09.218.09Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgInpatient);
export default ForwardRef;
