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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 35h1.5C37.508 35 44 28.508 44 20.5S37.508 6 29.5 6h-11C10.492 6 4 12.492 4 20.5s5 17 21.5 21l2.5.5v-7Zm-2 4.56V33h3.5C36.404 33 42 27.404 42 20.5S36.404 8 29.5 8h-11C11.596 8 6 13.596 6 20.5c0 3.57 1.106 7.334 4.061 10.679 2.967 3.357 7.924 6.435 15.871 8.368l.068.013Z"
      />
      <Path d="M19 18h10v9H19v-9Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.067 14.769c-.226-.19-.597-.352-1.067-.352s-.841.161-1.067.352c-.222.187-.266.357-.266.46v2.688h2.666v-2.688c0-.103-.044-.273-.266-.46ZM24 12.417c1.841 0 3.333 1.259 3.333 2.812v4.688h-6.666v-4.688c0-1.553 1.492-2.812 3.333-2.812Z"
      />
    </Svg>
  );
};
export default SvgSecureCommunication;
