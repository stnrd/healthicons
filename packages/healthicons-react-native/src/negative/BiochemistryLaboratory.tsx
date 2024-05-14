import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBiochemistryLaboratory = (passedProps: SvgProps) => {
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
      <G clipPath="url(#biochemistry-laboratory_svg__a)" fill="#000">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32 16.678c2.282-1.52 4-2.99 4-5.678h2c0 3.411-2.077 5.381-4.188 6.865.831.558 1.657 1.163 2.338 1.856C37.222 20.81 38 22.174 38 24s-.778 3.19-1.85 4.28c-.681.692-1.507 1.297-2.338 1.855C35.922 31.619 38 33.589 38 37h-2c0-.353-.03-.686-.086-1H31a1 1 0 1 1 0-2h4.065c-.722-1.019-1.808-1.841-3.065-2.678-2.282 1.52-4 2.99-4 5.678h-2c0-3.411 2.077-5.381 4.188-6.865-.831-.558-1.657-1.163-2.338-1.856C26.778 27.19 26 25.826 26 24s.778-3.19 1.85-4.28c.681-.692 1.507-1.297 2.338-1.855C28.078 16.381 26 14.411 26 11h2c0 .353.03.686.086 1H33a1 1 0 1 1 0 2h-4.065c.722 1.019 1.808 1.841 3.065 2.678Zm0 2.39c-1.004.652-1.896 1.25-2.6 1.932h5.2c-.703-.682-1.596-1.28-2.6-1.933ZM28 24c0-.358.044-.69.128-1h7.744c.084.31.128.642.128 1s-.044.69-.128 1h-7.744A3.815 3.815 0 0 1 28 24Zm1.4 3c.704.682 1.596 1.28 2.6 1.933 1.004-.653 1.897-1.251 2.6-1.933h-5.2Z"
        />
        <Path d="M14 16a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v4.048l-4.231 6.85C9.123 33.563 11.039 37 14.172 37h6.656c3.132 0 5.05-3.437 3.403-6.102L20 24.048V20h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-7Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Z"
        />
      </G>
      <Defs>
        <ClipPath id="biochemistry-laboratory_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgBiochemistryLaboratory;
