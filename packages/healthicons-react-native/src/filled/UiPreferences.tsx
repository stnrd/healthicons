import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUiPreferences = (passedProps: SvgProps) => {
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
      <Path d="M23 22.922c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 1 1-2 0V22.922ZM28 16a4.002 4.002 0 0 0-3-3.874V7a1 1 0 1 0-2 0v5.126A4.002 4.002 0 0 0 24 20a4 4 0 0 0 4-4ZM12 36a4 4 0 0 0 1-7.874V7a1 1 0 1 0-2 0v21.126A4.002 4.002 0 0 0 12 36ZM36 33c-.526 0-1 .396-1 .922V41a1 1 0 1 0 2 0v-7.078c0-.526-.474-.922-1-.922ZM37 23.126A4.002 4.002 0 0 1 36 31a4 4 0 0 1-1-7.874V7a1 1 0 1 1 2 0v16.126ZM11 38.922c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 1 1-2 0v-2.078Z" />
    </Svg>
  );
};
export default SvgUiPreferences;
