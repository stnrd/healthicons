import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalChicken = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M19 42h9.5v2H19v-2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 38a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.2 40c4.056 0 7.75-1.524 10.533-4.025A13.865 13.865 0 0 1 29.478 37C22.071 37 16 31.216 16 24a1 1 0 0 1 2 0c0 6.039 5.102 11 11.478 11 3.525 0 6.67-1.521 8.772-3.905.065-.075.14-.137.22-.187.5-1.09.877-2.248 1.113-3.455.369-1.892.914-3.784 2.078-5.32.483-.637-.06-1.536-.848-1.406L27.698 22.89a5 5 0 0 1-5.2-2.533l-4.564-8.34a3.88 3.88 0 0 0-7.159 2.835l.348 1.343a8.256 8.256 0 0 1-.017 4.205l-.761 2.842c-.882 3.293-1.135 6.912.75 9.753A15.695 15.695 0 0 0 24.201 40ZM14 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.086 6c1.26-1.26 3.414-.368 3.414 1.414V9h1.37c1.839 0 2.703 2.273 1.328 3.495l-2.534 2.252a1 1 0 0 1-1.328-1.495L19.87 11H18.5a2 2 0 0 1-2-2V7.414L7.914 16H11.5a1 1 0 0 1 0 2H7.914C6.132 18 5.24 15.846 6.5 14.586L15.086 6Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAnimalChicken);
export default ForwardRef;
