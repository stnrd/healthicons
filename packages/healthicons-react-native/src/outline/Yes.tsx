import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgYes = (passedProps: SvgProps) => {
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
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.67 16.259a1 1 0 0 1 .072 1.412L21.386 32.432l-8.076-7.709a1 1 0 0 1 1.38-1.446l6.59 6.29L33.259 16.33a1 1 0 0 1 1.413-.07Z"
      />
    </Svg>
  );
};
export default SvgYes;
