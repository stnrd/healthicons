import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUiSettings = (passedProps: SvgProps) => {
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
      <G clipPath="url(#ui_settings_svg__a)" fill="#000">
        <Path d="M24 29a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 34c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM20 6v1.202c-.666 6.63-2.895 7.56-9.365 4.463l-.223-.13-4 6.93.932.538c5.34 3.79 5.341 6.153.103 9.935l-1.035.598 4 6.928.434-.25c6.335-3.02 8.484-2.006 9.154 4.62V42h8v-.304l.027.329c.508-7.477 2.444-8.907 8.8-6l.761.44 3.98-6.894.02-.035-.456-.264c-5.899-4.074-5.838-6.483.066-10.583l.39-.225-4-6.928-.69.399C30.662 14.842 28.618 13.6 28 6.732V6h-8Z"
        />
      </G>
      <Defs>
        <ClipPath id="ui_settings_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgUiSettings;
