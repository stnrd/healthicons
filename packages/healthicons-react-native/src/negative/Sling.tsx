import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSling = (passedProps: SvgProps) => {
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM24 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-8 9h.014l-1.954 2.487A2.002 2.002 0 0 1 16 31Zm11 7.5c0-1.6-1.073-2.948-2.538-3.366l.756-1.86A5.502 5.502 0 0 1 27.743 42H32a9 9 0 1 0 0-18H16a9 9 0 1 0 0 18h8v-.035a3.501 3.501 0 0 0 3-3.465ZM23.036 26l-2.969 3.078-7.756 9.872A6.967 6.967 0 0 0 16 40h4.327l5.687-14h-2.978ZM32 35a2 2 0 1 0 0-4v4Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgSling;
