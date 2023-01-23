import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGym = (passedProps: SvgProps) => {
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill="#333"
      />
      <Path d="M29 16h3v16h-3V16Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 17h-1v14h1V17Zm-2-1v16h3V16h-3Z"
        fill="#333"
      />
      <Path d="M34 19h3v10h-3V19Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 20h-1v8h1v-8Zm-2-1v10h3V19h-3Z"
        fill="#333"
      />
      <Path d="M19 32h-3V16h3v16Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 31h1V17h-1v14Zm2 1V16h-3v16h3Z"
        fill="#333"
      />
      <Path d="M14 29h-3V19h3v10Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 28h1v-8h-1v8Zm2 1V19h-3v10h3ZM38 25h-4v-2h4v2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 25H10v-2h3.5v2ZM27 25h-6v-2h6v2Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgGym;
