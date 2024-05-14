import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVascularSurgery = (passedProps: SvgProps) => {
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <G clipPath="url(#vascular-surgery_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM8 6a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1.083l-9.223 9.13 2.617 1.744 4.482-4.481a1 1 0 0 1 1.414 1.414l-5.5 5.5-.007-.007-2.114 2.114A2 2 0 0 0 30 22.828v.456a2 2 0 0 1-.6 1.43l-3.65 3.573A6 6 0 0 1 21.551 30H12l15.705-15.705-.005-.006L36.074 6H8Zm13.552 22h-4.724l11.427-11.426 2.606 1.737L29.17 20A4 4 0 0 0 28 22.828v.456l-3.65 3.574A4 4 0 0 1 21.552 28Zm5.155-6.707a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0Zm-3.556 12.941a1 1 0 1 0-1.056 1.7 1 1 0 0 0 1.056-1.7Zm7 1A1 1 0 1 0 29.22 37H14.025a1 1 0 1 0-.802 0H10v2h28v-2h-7.976a1 1 0 0 0 .127-1.766ZM38 32h-8.373l5.874-5.874-1.414-1.414L26.799 32H10v2h28v-2Z"
        />
      </G>
      <Defs>
        <ClipPath id="vascular-surgery_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgVascularSurgery;
