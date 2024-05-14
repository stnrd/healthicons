import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeFaceShield = (passedProps: SvgProps) => {
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
      <G clipPath="url(#ppe-face-shield_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM9.92 10.413C9.235 11.022 9 11.56 9 12c0 .405.197.89.764 1.441.317.308.73.616 1.236.915V14a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v.356c.507-.299.92-.607 1.236-.915.567-.55.764-1.036.764-1.441 0-.44-.234-.978-.92-1.587-.686-.608-1.735-1.201-3.117-1.72C32.206 7.66 28.33 7 24 7c-4.33 0-8.206.66-10.963 1.694-1.382.518-2.43 1.111-3.116 1.719Zm-1.55 4.462c.68.661 1.58 1.241 2.63 1.74v20.92l3.57 2.38a17 17 0 0 0 18.86 0l3.57-2.38v-20.92c1.05-.499 1.95-1.079 2.63-1.74C40.442 14.087 41 13.117 41 12c0-1.217-.661-2.257-1.594-3.084-.934-.828-2.228-1.527-3.741-2.095C32.63 5.683 28.506 5 24 5c-4.506 0-8.63.683-11.665 1.821-1.513.568-2.807 1.267-3.741 2.095C7.66 9.743 7 10.783 7 12c0 1.117.559 2.087 1.37 2.875ZM13 17v19.465l2.68 1.786a15 15 0 0 0 16.64 0L35 36.465V17H13Zm10.757 18.828 7.071-7.07-1.414-1.415-7.07 7.071 1.413 1.414Zm9.193-3.535-5.657 5.657-1.414-1.414 5.657-5.657 1.414 1.414Z"
        />
      </G>
      <Defs>
        <ClipPath id="ppe-face-shield_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgPpeFaceShield;
