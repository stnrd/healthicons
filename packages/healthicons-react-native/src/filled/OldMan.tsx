import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOldMan = (passedProps: SvgProps) => {
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
      <Path d="M22 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM35 25a3 3 0 0 0-3 3v.343a1 1 0 1 0 2 0V28a1 1 0 1 1 2 0v14.946a1 1 0 1 0 2 0V28a3 3 0 0 0-3-3ZM29.709 20.179 28 19.433l1.595.677.114.069ZM30.935 21.241a4.966 4.966 0 0 0-1.226-1.062L36 22.928 36 22.832v.002c.095 1.1-.755 2.067-1.899 2.16-1.134.09-2.132-.714-2.241-1.801v-.002a3.488 3.488 0 0 0-.13-.52 4.492 4.492 0 0 0-.795-1.43Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m36 22.831-6.405-2.72A6.974 6.974 0 0 0 28 19.432V42a2 2 0 0 1-3.99.199l-1-10A2.012 2.012 0 0 1 23 32h-2c0 .066-.003.133-.01.199l-1 10A2 2 0 0 1 16 42V27.919c-1.679-.223-3.09-.898-4.136-1.925A6.214 6.214 0 0 1 10 21.481 6.336 6.336 0 0 1 11.92 17C13.21 15.741 15.049 15 17.255 15h7.32c4.973 0 7.944 1.722 9.62 3.759a8.443 8.443 0 0 1 1.494 2.695c.146.44.26.893.309 1.353v.015l.002.006v.003Zm-21.169.362c.257.252.631.496 1.169.648V19.17c-.5.152-.864.389-1.123.641a2.413 2.413 0 0 0-.72 1.708c-.006.64.232 1.24.674 1.674Z"
      />
    </Svg>
  );
};
export default SvgOldMan;
