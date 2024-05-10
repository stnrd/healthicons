import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPregnant = (passedProps: SvgProps) => {
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
      <Path d="M29 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.651 27.47a1.992 1.992 0 0 1-.827-.352l-5.5-4a2 2 0 0 1-.511-2.692L16.5 21.5l-1.687-1.074.001-.002.003-.004.01-.015.032-.051a33.87 33.87 0 0 1 .559-.84c.365-.536.874-1.258 1.437-1.987.554-.717 1.203-1.496 1.848-2.113.321-.307.69-.621 1.087-.87.355-.224.962-.544 1.71-.544H23.5a2 2 0 0 1 1.176.383L23.5 16l1.177-1.617h.001l.002.002.006.004.017.013.058.043.202.154c.17.131.411.322.704.564a32.898 32.898 0 0 1 2.247 2.048c1.7 1.7 3.795 4.177 4.943 7.046.665 1.662.681 3.22.148 4.593-.513 1.319-1.452 2.255-2.329 2.892-.88.641-1.807 1.06-2.484 1.316-.282.107-.53.189-.73.25L26 41v1a2 2 0 1 1-4 0v-1c0-5.855-.003-9.657-.349-13.53Zm-.658-5.175a105.38 105.38 0 0 0-.514-2.899c-.152.185-.305.378-.459.577-.276.357-.54.715-.777 1.049l1.75 1.273Z"
      />
    </Svg>
  );
};
export default SvgPregnant;
