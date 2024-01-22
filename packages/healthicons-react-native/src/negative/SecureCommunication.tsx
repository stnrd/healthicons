import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSecureCommunication = (passedProps: SvgProps) => {
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
        d="M48 0H0v48h48V0ZM18.5 6C10.492 6 4 12.492 4 20.5s5 17 21.5 21l2.5.5v-7h1.5C37.508 35 44 28.508 44 20.5S37.508 6 29.5 6h-11Z"
        fill="#000"
      />
      <Path d="M19 18h10v9H19v-9Z" fill="#000" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.067 14.769c-.226-.19-.597-.352-1.067-.352s-.841.161-1.067.352c-.222.187-.266.357-.266.46v2.688h2.666v-2.688c0-.103-.044-.273-.266-.46ZM24 12.417c1.841 0 3.333 1.259 3.333 2.812v4.688h-6.666v-4.688c0-1.553 1.492-2.812 3.333-2.812Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgSecureCommunication;
