import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAlertCircle = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
      <G clipPath="url(#alert_circle_svg__a)" fill="#333">
        <Path d="M24 11a2 2 0 0 1 2 2v14a2 2 0 1 1-4 0V13a2 2 0 0 1 2-2ZM26 35a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 48h48V0H0v48ZM24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4Z"
        />
      </G>
      <Defs>
        <ClipPath id="alert_circle_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAlertCircle);
export default ForwardRef;
