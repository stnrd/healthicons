import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgArm = (passedProps: SvgProps) => {
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
        d="M5 26a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8.053c1.397 0 2.785-.225 4.11-.667l4-1.333h1.18a5 5 0 0 0 3.536-1.464l.683-.684 1.511-.604a13 13 0 0 0 5.793-4.573l3.83-5.426 4.819-2.891a1 1 0 0 0 .475-.716l1-7a1 1 0 0 0-.39-.942l-.376-.282a3 3 0 0 0-4.226.635l-.431.593a2.998 2.998 0 0 0-.564-.615l-.367-.302a1 1 0 0 0-1.417.146l-3.123 3.905A5 5 0 0 0 32 18.903v1.39l-3.875 1.367a13 13 0 0 0-6.586 5.194l-1.863-.466A13 13 0 0 0 16.523 26H5Zm31.903-11.066-.712.978a1 1 0 1 0 1.618 1.176l.711-.978 2.095-2.88a1 1 0 0 1 1.31-.277l-.848 5.934-4.591 2.756a1 1 0 0 0-.303.28l-3.951 5.598a11 11 0 0 1-4.902 3.87l-1.701.68c-.126.05-.24.126-.336.222l-.828.828a3 3 0 0 1-2.122.88H21a1 1 0 0 0-.316.05l-4.153 1.385a11.002 11.002 0 0 1-3.478.564H6v-8h10.523c.9 0 1.795.11 2.668.328l2.567.642a1 1 0 0 0 1.09-.44l.276-.44a11 11 0 0 1 5.667-4.544l4.542-1.603A1 1 0 0 0 34 21v-2.097a3 3 0 0 1 .657-1.874l2.39-2.987a1 1 0 0 1-.144.892Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgArm;
