import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeAdmissions = (
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
      <G
        fill="#333"
        fillRule="evenodd"
        clipPath="url(#negative_admissions_svg__a)"
        clipRule="evenodd"
      >
        <Path d="M48 0H0v48h48V0ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z" />
        <Path d="M26.038 14.582H17v18.817h9.038V14.582Zm-11.038-2v22.817h13.038V12.582H15Z" />
        <Path d="M22.835 10.065a1 1 0 0 0-1.316.95v26.198a1 1 0 0 0 1.316.948l8.865-2.955a1 1 0 0 0 .684-.948V13.969a1 1 0 0 0-.684-.949l-8.865-2.955Zm2.306 14.773c.4 0 .724-.649.724-1.449s-.324-1.449-.724-1.449c-.4 0-.725.649-.725 1.45 0 .8.325 1.448.725 1.448Z" />
      </G>
      <Defs>
        <ClipPath id="negative_admissions_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeAdmissions);
export default ForwardRef;
