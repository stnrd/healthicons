import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHeartCardiogram = (passedProps: SvgProps) => {
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
      <G clipPath="url(#heart_cardiogram_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm16.031 8C10.811 8 7 13.31 7 19.035c0 1.538.246 3.01.68 4.41H4v2h4.443a17.026 17.026 0 0 1-.763-2h9.735l3.388-6.024 2.117 7.41 2.59-3.331H32v2h-5.51l-4.41 5.67-1.883-6.591-1.612 2.865H8.443C12.55 34.487 24 40 24 40s17-8.711 17-20.965C41 13.31 37.189 8 31.969 8c-3.622 0-6.31 2.382-7.969 5.761C22.341 10.382 19.653 8 16.031 8Z"
        />
      </G>
      <Defs>
        <ClipPath id="heart_cardiogram_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgHeartCardiogram;
