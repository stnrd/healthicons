import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBody = (passedProps: SvgProps) => {
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
        d="M24 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm13.92 2.44a2 2 0 0 1-1.36 2.48c-2.376.692-4.522 1.214-6.56 1.561V42a2 2 0 0 1-3.992.181l-1-11A2 2 0 0 1 25 31h-2a2 2 0 0 1-.008.181l-1 11A2 2 0 0 1 18 42V19.444c-2.033-.35-4.171-.861-6.535-1.517a2 2 0 1 1 1.07-3.854c4.608 1.278 8.07 1.912 11.474 1.927 3.396.015 6.85-.585 11.431-1.92a2 2 0 0 1 2.48 1.36Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgBody;
