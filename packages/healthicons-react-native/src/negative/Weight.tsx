import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWeight = (passedProps: SvgProps) => {
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
      {...props}
    >
      <G clipPath="url(#weight_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM36.216 42a4 4 0 0 0 3.994-3.778l1.556-28A4 4 0 0 0 37.772 6H10.228a4 4 0 0 0-3.993 4.222l1.555 28A4 4 0 0 0 11.784 42h24.432Zm-1.619-26.529c.673.697.467 1.767-.353 2.308l-4.417 2.91c-.82.54-1.94.322-2.75-.231a5.549 5.549 0 0 0-1.016-.548l2.63-3.025a1 1 0 0 0-1.509-1.312l-3.393 3.901a5.775 5.775 0 0 0-2.345.523 5.58 5.58 0 0 0-.666.362c-.83.528-1.957.71-2.757.145l-4.312-3.046c-.8-.566-.968-1.642-.271-2.318a14.508 14.508 0 0 1 4.045-2.756 15.293 15.293 0 0 1 6.61-1.382c2.29.036 4.537.58 6.56 1.587a14.425 14.425 0 0 1 3.944 2.882Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="weight_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgWeight;
