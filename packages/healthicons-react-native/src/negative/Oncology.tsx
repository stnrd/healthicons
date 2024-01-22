import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOncology = (passedProps: SvgProps) => {
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
      <G clipPath="url(#oncology_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm14.3 26.329-4.02-5.196-5.073 6.433 5.072 3.896 4.02-5.133Zm-6.371-17.876 2.165-2.845c.804-.99 1.979-1.608 3.216-1.608h3.587c.619 0 1.237.124 1.794.433.557.247 1.052.68 1.423 1.175l2.226 2.907c1.732 2.289 1.732 5.443 0 7.67l-2.35 2.969-4.02-5.196 2.474-2.154s-.062 0-.062-.062a2.873 2.873 0 0 0-1.423-.371h-3.65c-.494 0-.989.185-1.422.433l2.474 2.154 5.814 7.423L34 33.566l-5.01 3.896-12.061-15.339c-1.732-2.227-1.732-5.381 0-7.67Zm3.03 1.176c.032.03.047.061.062.092.016.031.031.062.062.093.124-.124.31-.185.495-.247.557-.248 1.175-.433 1.794-.433h3.587c.619 0 1.237.123 1.794.433.062.03.14.077.216.123.078.047.155.093.217.124.128-.183.24-.3.329-.393.212-.223.296-.31.166-.834a2.489 2.489 0 0 0-.557-1.237 3.147 3.147 0 0 0-.99-.804 2.815 2.815 0 0 0-1.237-.309H22.31c-.866 0-1.67.433-2.227 1.113-.68.928-.804 1.289-.123 2.279Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="oncology_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgOncology;
