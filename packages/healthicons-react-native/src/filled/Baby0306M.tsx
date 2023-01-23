import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBaby0306M = (passedProps: SvgProps) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 49"
      fill="none"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8 26.85a3 3 0 0 1 .6 4.2l-3 4a3 3 0 0 1-2.4 1.2H9a3 3 0 1 1 0-6h2.5l2.1-2.8a3 3 0 0 1 4.2-.6Z"
        fill="#333"
      />
      <Path
        d="M39.474 30.643H36.27l-.57-.262c-1.46-1.622-3.824-5.148-5.805-6.359a5.172 5.172 0 0 0-2.736-.772H21.5l.586 13h4.729a5.332 5.332 0 0 0 2.273-.516 5.847 5.847 0 0 0 1.911-1.46l.57-.655c.719.799 1.383 2.631 2.45 2.631h5.589c.67 0 1.178-.295 1.652-.821s.74-1.239.74-1.982c0-.744-.266-1.457-.74-1.982-.474-.526-1.116-.822-1.786-.822ZM40 15.75a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.5 20.25a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgBaby0306M;
