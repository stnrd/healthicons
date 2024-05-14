import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicalRecords = (passedProps: SvgProps) => {
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
        d="M21 10a2 2 0 0 0-2 2h-3a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2h-3a2 2 0 0 0-2-2h-6Zm0 2h6v2h-6v-2Zm3.557 16-2.493 6.649a1 1 0 1 0 1.872.702l1.259-3.355h2.61l1.259 3.355a1 1 0 1 0 1.872-.702L28.444 28h2.858a1 1 0 1 0 0-2h-10.3a1 1 0 0 0 0 2h3.556ZM31 19.24H17v-2h14v2ZM17 23.4h5v-2h-5v2Zm11.5-.4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
      />
    </Svg>
  );
};
export default SvgMedicalRecords;
