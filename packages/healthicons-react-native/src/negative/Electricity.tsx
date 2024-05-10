import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgElectricity = (passedProps: SvgProps) => {
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
      <G clipPath="url(#electricity_svg__a)" fill="#000">
        <Path d="m19 21 6-9v6h4l-6 9v-6h-4Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM17 34c-.52-2.182-2.968-6.539-3.93-7.715a13.568 13.568 0 0 1-2.98-7.017 13.47 13.47 0 0 1 1.292-7.494 13.814 13.814 0 0 1 5.166-5.67A14.215 14.215 0 0 1 24.002 4c2.638 0 5.222.73 7.454 2.107a13.813 13.813 0 0 1 5.164 5.671 13.47 13.47 0 0 1 1.29 7.495c-.3 2.567-1.334 4.999-2.983 7.015C33.965 27.463 31.52 31.82 31 34H17Zm0 3a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1Zm14 3H17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2Z"
        />
      </G>
      <Defs>
        <ClipPath id="electricity_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgElectricity;
