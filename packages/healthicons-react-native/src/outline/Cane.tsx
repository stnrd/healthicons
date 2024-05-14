import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCane = (passedProps: SvgProps) => {
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
        d="M24.5 15a2.5 2.5 0 0 0 5 0v-3c0-2.15-.671-4.006-1.913-5.352A6.229 6.229 0 0 0 23 4.625a6.229 6.229 0 0 0-4.587 2.023C17.171 7.994 16.5 9.851 16.5 12a2.5 2.5 0 0 0 5 0c0-1.1.329-1.681.587-1.96A1.23 1.23 0 0 1 23 9.625c.316 0 .645.125.913.415.258.279.587.86.587 1.96v3Zm2 0a.5.5 0 0 0 1 0v-3c0-1.73-.534-3.076-1.383-3.995A4.229 4.229 0 0 0 23 6.625c-1.137 0-2.27.463-3.117 1.38C19.034 8.924 18.5 10.27 18.5 12a.5.5 0 0 0 1 0c0-1.52.466-2.611 1.117-3.317A3.23 3.23 0 0 1 23 7.625c.863 0 1.73.35 2.383 1.058.651.706 1.117 1.797 1.117 3.317v3Z"
      />
      <Path d="M25.86 38.836a1 1 0 0 1 .987-.836h.306a1 1 0 0 1 .986.836l.667 4A1 1 0 0 1 27.82 44h-1.64a1 1 0 0 1-.986-1.164l.667-4Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 16.366A1.53 1.53 0 0 1 26 16v21a1.53 1.53 0 0 1 1-.366c.384 0 .735.138 1 .366V16a1.53 1.53 0 0 1-1 .366ZM24 43a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"
      />
    </Svg>
  );
};
export default SvgCane;
