import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSodiumFree = (passedProps: SvgProps) => {
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
      <Path d="M27 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM29 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM31 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM23 24a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0v-9ZM26 23a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20Zm-7.999 13.416A17.933 17.933 0 0 1 24 42c-9.941 0-18-8.059-18-18 0-4.738 1.83-9.049 4.823-12.263l3.97 3.97a1 1 0 0 0 1.414-1.414l-3.942-3.942A17.93 17.93 0 0 1 24 6c9.941 0 18 8.059 18 18 0 4.61-1.734 8.817-4.584 12.001l-7.085-7.084-.526-7.138a2.994 2.994 0 0 0-1.08-2.09A.997.997 0 0 0 29 19v-1a5 5 0 0 0-10 0v1c0 .267.105.51.275.689a2.994 2.994 0 0 0-1.08 2.09l-.958 13A3 3 0 0 0 20.23 38h7.542a3 3 0 0 0 2.992-3.22l-.207-2.81L36 37.416ZM26.813 21h-5.626a1 1 0 0 0-.997.927l-.958 13A1 1 0 0 0 20.229 36h7.542a1 1 0 0 0 .997-1.074l-.958-13a1 1 0 0 0-.997-.926ZM27 18h-6a3 3 0 1 1 6 0Z"
      />
    </Svg>
  );
};
export default SvgSodiumFree;
