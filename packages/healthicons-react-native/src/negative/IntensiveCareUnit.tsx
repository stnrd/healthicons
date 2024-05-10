import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIntensiveCareUnit = (passedProps: SvgProps) => {
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
      <G
        clipPath="url(#intensive_care_unit_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#000"
      >
        <Path d="M27.667 10v1.111a3 3 0 0 0 1.555 2.63v.926h-.333a1 1 0 0 0-1 1v4.222a1 1 0 0 0 1 1h2.666a1 1 0 0 0 1-1v-4.222a1 1 0 0 0-1-1h-.333v-.556h3.445v9.163H20.974a.238.238 0 0 1-.169-.07l-.128-.13.287-.287a3.154 3.154 0 0 0 .001-4.461l-1.4-1.401a3.156 3.156 0 0 0-4.462-.002l-.644.644a3.073 3.073 0 0 0-2.774.855 3.137 3.137 0 0 0 0 4.415l.315.316v8.403h-2v2h2.17a2.722 2.722 0 1 0 4.217 0h15.227a2.722 2.722 0 1 0 4.217 0H38v-2h-3v-2.112c1.662-.032 3-1.401 3-3.085a3.09 3.09 0 0 0-1.333-2.548v-9.7a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V10h-2ZM19.55 21.372l-.283.283-3.023-3.044.273-.273a1.156 1.156 0 0 1 1.634 0l1.4 1.401c.45.452.45 1.183 0 1.633ZM33 31.556v-2.112H18.612a.874.874 0 0 1-.62-.258L14 25.166v6.39h19Z" />
        <Path d="M48 0H0v48h48V0ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z" />
      </G>
      <Defs>
        <ClipPath id="intensive_care_unit_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgIntensiveCareUnit;
