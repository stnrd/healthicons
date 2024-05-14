import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBurnUnit = (passedProps: SvgProps) => {
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
      <G clipPath="url(#burn-unit_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm14.089 1c0 4.781-2.035 8.412-4.314 12.477l-.47.843c-3.068 5.5-.215 10.263 3.288 14.68 0-5.07.806-7.931 4.6-11.741C25.525 30.435 25.737 33.5 25 38c9.663-4.666 9.146-12.317 6.33-21-.483 1.78-1.338 3.417-1.984 4.653l-.228.438c-1.309-5.07-5.042-8.783-9.03-12.091Z"
        />
      </G>
      <Defs>
        <ClipPath id="burn-unit_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBurnUnit;
