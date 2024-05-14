import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGeriatrics = (passedProps: SvgProps) => {
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
      <G clipPath="url(#geriatrics_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm14.867 10c-3 0-5.013 1.847-6.174 3.68C16.558 21.472 16 23.59 16 25c0 .404.092.78.163 1.03.08.28.184.567.293.838.217.542.494 1.13.755 1.651.264.528.526 1.02.72 1.376l.069.125V36a2 2 0 1 0 4 0v-6.5c0-2.198.511-4.308 1.18-6.074l.215.849a2 2 0 0 0 1.555 1.47l3.666.718a2 2 0 1 0 .768-3.926l-2.424-.474-1.155-4.555A2 2 0 0 0 23.867 16Zm4.78 10.497a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5h.084c.323 0 .584.262.584.584v7.975a1 1 0 1 0 2 0V29.08a2.584 2.584 0 0 0-2.584-2.584h-.085ZM33 14.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        />
      </G>
      <Defs>
        <ClipPath id="geriatrics_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgGeriatrics;
