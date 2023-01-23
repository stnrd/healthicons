import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSimpleLogo = (passedProps: SvgProps) => {
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
        d="M25.917 5.456C29.525 9.407 39 20.623 39 29.454 39 37.489 32.528 44 24.544 44c-7.983 0-14.455-6.512-14.455-14.546 0-8.831 9.475-20.047 13.083-23.998C24.02 4.527 24.544 4 24.544 4s.524.527 1.373 1.456ZM24.544 6.92a80.595 80.595 0 0 1 5.607 6.889c1.763 2.439 3.494 5.168 4.779 7.914C36.224 24.49 37 27.14 37 29.454 37 36.395 31.412 42 24.544 42c-6.867 0-12.455-5.605-12.455-12.546 0-2.315.776-4.965 2.07-7.732 1.284-2.746 3.016-5.475 4.778-7.914a80.62 80.62 0 0 1 5.607-6.889Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.426 32.301a1.482 1.482 0 0 0-2.061.266l-.203.26c-2.354 3.025-6.97 3.025-9.324 0l-.202-.26a1.482 1.482 0 0 0-2.062-.266 1.44 1.44 0 0 0-.27 2.036l.203.26c3.531 4.537 10.455 4.537 13.986 0l.202-.26a1.44 1.44 0 0 0-.269-2.036Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgSimpleLogo;
