import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNose = (passedProps: SvgProps) => {
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
        d="M48 0H0v48h48V0ZM30.915 6.403a1 1 0 1 0-1.83-.806l-.004.008-.013.03a29.938 29.938 0 0 1-.266.582 93.432 93.432 0 0 1-3.76 7.217c-2.48 4.279-5.741 9.017-9.033 11.39-4.344 3.118-5.65 6.952-4.735 10.162.896 3.145 3.865 5.387 7.37 5.387h3.229A2.627 2.627 0 0 1 24.5 43h2a4.627 4.627 0 0 0-4.627-4.627h-.576c.224-.336.582-.665 1.126-.918.994-.464 2.68-.7 5.35-.08a1 1 0 1 0 .453-1.948c-2.929-.68-5.11-.503-6.649.215-1.357.633-2.155 1.664-2.461 2.73h-.472c-2.647 0-4.805-1.683-5.446-3.935-.624-2.187.121-5.221 3.978-7.989l.002-.001c3.67-2.645 7.111-7.725 9.595-12.01a95.501 95.501 0 0 0 3.844-7.379 56.141 56.141 0 0 0 .278-.608l.015-.034.005-.011v-.002L30 6l.915.403Zm4.84 28.588c-.518 2.09-1.816 3.979-3.226 4.858L31.47 38.15c.882-.55 1.923-1.947 2.344-3.642.409-1.647.195-3.408-1.16-4.815l1.44-1.388c1.947 2.022 2.192 4.547 1.66 6.685Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgNose;
