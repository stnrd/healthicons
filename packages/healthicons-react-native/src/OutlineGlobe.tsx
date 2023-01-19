import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineGlobe = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
      <Path fill="#fff" d="M0 0h48v48H0z" />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M15.149 18a3.554 3.554 0 0 1 2.195.754 3.581 3.581 0 0 1 1.267 1.948v.003l1.284 5.163a3.598 3.598 0 0 1-.65 3.067 3.569 3.569 0 0 1-2.812 1.378h-1.008l-1.579 8.862a1 1 0 0 1-1.969-.35l1.726-9.687a1 1 0 0 1 .985-.825h1.845a1.555 1.555 0 0 0 1.233-.605 1.589 1.589 0 0 0 .287-1.36l-1.282-5.157v-.002a1.581 1.581 0 0 0-.559-.859 1.554 1.554 0 0 0-.96-.33H6a1 1 0 1 1 0-2h9.149Zm18.517 6a2.756 2.756 0 0 0-1.713.595 2.809 2.809 0 0 0-.983 1.526v.003l-.889 3.614a2.838 2.838 0 0 0 .503 2.397c.259.336.59.609.97.797.38.189.799.287 1.223.287h.438l1.05 5.955a1 1 0 1 0 1.97-.348l-1.196-6.78a1 1 0 0 0-.984-.827h-1.278a.752.752 0 0 1-.334-.078.783.783 0 0 1-.273-.225.821.821 0 0 1-.146-.703l.887-3.609a.809.809 0 0 1 .282-.44.756.756 0 0 1 .47-.164H42a1 1 0 1 0 0-2h-8.334Zm-3.726-6a2.292 2.292 0 0 1-2.195-1.62l-2.61-5.505a1.001 1.001 0 0 1-.067-.187 2.29 2.29 0 0 1 2.224-2.845h.19l.652-2.135a1 1 0 0 1 1.913.584l-.87 2.844a1 1 0 0 1-.955.708h-.93a.294.294 0 0 0-.286.23.288.288 0 0 0-.006.067l2.588 5.457c.027.059.05.12.066.183a.29.29 0 0 0 .282.219H41a1 1 0 1 1 0 2H29.94Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineGlobe);
export default ForwardRef;
