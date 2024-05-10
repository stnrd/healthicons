import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBike = (passedProps: SvgProps) => {
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
      <G clipPath="url(#bike_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM17.917 31A6.002 6.002 0 0 1 6 30a6 6 0 0 1 11.917-1H12a1 1 0 1 0 0 2h5.917Zm2.021 0A8.001 8.001 0 0 1 4 30a8 8 0 0 1 15.938-1h2.5l-4.88-13.664A.998.998 0 0 1 17.5 15H16a1 1 0 1 1 0-2h4.5a1 1 0 1 1 0 2h-.938l1.842 5.157 8.127-4.277-.965-2.523a1 1 0 0 1 .647-1.315l5-1.5.957-.287.575 1.915-.958.288-3.968 1.19 3.28 8.58a8 8 0 1 1-1.868.715l-1.648-4.31-5.682 11.8A1 1 0 0 1 24 31h-4.062Zm2.145-8.94 1.972 5.52 4.23-8.784-6.202 3.264Zm12.983 8.297-2.113-5.527a6 6 0 1 0 1.868-.715l2.113 5.528a1 1 0 0 1-1.868.714Z"
        />
      </G>
      <Defs>
        <ClipPath id="bike_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBike;
