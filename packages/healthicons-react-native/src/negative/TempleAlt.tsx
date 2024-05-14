import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTempleAlt = (passedProps: SvgProps) => {
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
      <G clipPath="url(#temple-alt_svg__a)" fill="#000">
        <Path d="M14 12.048h7v2h-7v-2ZM21 16.048h-5v2h5v-2ZM23 18.048v-2h2v2h-2ZM21 20.048h-8v2h8v-2ZM23 22.048v-2h2v2h-2ZM21 24.048h-7v2h7v-2ZM23 26.048v-2h2v2h-2ZM11 28.048v2h10v-2H11ZM37 30.048v-2H27v2h10ZM25 28.048V30h-2v-1.952h2ZM27 26.048h7v-2h-7v2ZM27 22.048h8v-2h-8v2ZM27 18.048h5v-2h-5v2ZM27 14.048h7v-2h-7v2ZM25 12.048v2h-2v-2h2ZM35 36v-3.952H13V36h7v-1.952h8V36h7ZM28 38v2h11v-2H28ZM20 38v2H9v-2h11Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM35 10.048h-5.083a6.002 6.002 0 0 0-11.834 0H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1V36H8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12v.048h8V42h12a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3v-3.952h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z"
        />
      </G>
      <Defs>
        <ClipPath id="temple-alt_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgTempleAlt;
