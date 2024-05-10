import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLactoseFree = (passedProps: SvgProps) => {
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
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.2 11.217C19.2 10 19.8 10 21.6 10h4.8c1.8 0 2.4 0 2.4 1.217 0 1.218-1.2 1.826-1.2 1.826l2.4 9.13v13.392C30 36.91 28.925 38 27.6 38h-7.2c-1.325 0-2.4-1.09-2.4-2.435V22.174l2.4-9.13s-1.2-.61-1.2-1.827ZM24 23.553c-1.333-1.245-4 0-4 0V35a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V24.798s-2.667 0-4-1.245ZM10.293 9.793a1 1 0 0 1 1.414 0l5.5 5.5a1 1 0 0 1-1.414 1.414l-5.5-5.5a1 1 0 0 1 0-1.414Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m37.293 38.707-9-9 1.414-1.414 9 9-1.414 1.414Z"
      />
    </Svg>
  );
};
export default SvgLactoseFree;
