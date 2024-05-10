import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHospice = (passedProps: SvgProps) => {
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
        d="M41.708 23.794 24.058 6.086 6.294 23.792a1 1 0 1 0 1.412 1.416L11 21.925V41a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V21.904l3.292 3.302a1 1 0 1 0 1.416-1.412ZM20.25 20C17.794 20 16 22.655 16 25.517c0 .77.116 1.506.32 2.205.1.342.22.676.36 1C18.61 33.244 24 36 24 36s8-4.355 8-10.483C32 22.655 30.206 20 27.75 20c-1.705 0-2.97 1.191-3.75 2.88-.78-1.689-2.046-2.88-3.75-2.88Z"
      />
    </Svg>
  );
};
export default SvgHospice;
