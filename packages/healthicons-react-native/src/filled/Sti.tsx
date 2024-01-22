import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSti = (passedProps: SvgProps) => {
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
      <Path d="M28 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#000" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.826 15.077A2 2 0 0 1 16.6 14h12.418c2.122 0 3.892.742 5.136 2.001A6.46 6.46 0 0 1 36 20.481c.015 1.61-.564 3.26-1.793 4.513-1.054 1.075-2.492 1.764-4.207 1.953V42a2 2 0 0 1-3.994.153l-.87-11.316a4.002 4.002 0 1 0-2.771-7.489c-.195-.575-.565-1.118-1.114-1.585A132.885 132.885 0 0 0 18 19.08V18h-.186l-1.168 2.246-.151.194.016.012.05.04a119.578 119.578 0 0 1 .92.736c.619.502 1.485 1.215 2.473 2.057.506.43.608.852.568 1.199-.045.392-.293.838-.745 1.198-.729.58-1.839.822-2.908.174l-4.118-3.294a2 2 0 0 1-.525-2.485l2.6-5Zm5.259 12.746a4.54 4.54 0 0 1-2.085.415V42a2 2 0 0 0 3.994.153l.87-11.316a4.007 4.007 0 0 1-2.78-3.014ZM24 29a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-10.892V22.9c.64-.143 1.07-.42 1.35-.707A2.342 2.342 0 0 0 32 20.52a2.461 2.461 0 0 0-.693-1.708c-.287-.29-.706-.56-1.307-.703Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgSti;
