import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDiabetes = (passedProps: SvgProps) => {
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
        d="M42.982 28.942c.002 1.6-1.317 2.858-2.997 2.86-1.68 0-3.002-1.255-3.003-2.855-.001-1.6 2.996-5.145 2.996-5.145s3.003 3.654 3.004 5.14Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m24.126 17.598 17.719-.015a2.128 2.128 0 1 1 .003 4.257h-.005c.086-.168.133-.35.133-.54 0-.828-.897-1.5-2.001-1.498-1.105 0-2 .673-2 1.501.001.19.048.372.134.54l-13.022.01.001 1.064 6.89-.005a2 2 0 0 1 2 1.998l.001.256a2 2 0 0 1-1.998 2.002l-6.89.006.002 1.064 5.777-.005a2 2 0 0 1 2.002 1.998v.256a2 2 0 0 1-1.998 2.002l-8 .007v1.063l4.112-.003a2 2 0 0 1 2.002 1.998v.257a2 2 0 0 1-1.999 2.001l-7.444.006-4.1.004c-6.327.005-11.46-5.12-11.465-11.447a11.456 11.456 0 0 1 7.117-10.612l12.882-5.273a2.308 2.308 0 0 1 1.835 4.235l-2.105.964c-.977.447-.658 1.91.417 1.909Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgDiabetes;
