import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg4 = (passedProps: SvgProps) => {
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
        d="M25.504 10.336A3 3 0 0 1 31 12v15h1a3 3 0 1 1 0 6h-1v3a3 3 0 1 1-6 0v-3h-9a3 3 0 0 1-2.645-1.584l.875-.469-.875.469a3 3 0 0 1 .149-3.08l12-18Zm2.786.707a1 1 0 0 0-1.122.402l-12 18A1 1 0 0 0 16 31h10a1 1 0 0 1 1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 1 1-1h2a1 1 0 0 0 0-2h-2a1 1 0 0 1-1-1V12a1 1 0 0 0-.71-.957Zm-2 6.606a1 1 0 0 1 .71.957V28a1 1 0 0 1-1 1h-6.263a1 1 0 0 1-.832-1.554l6.263-9.395a1 1 0 0 1 1.122-.402ZM21.606 27H25V21.91L21.606 27Z"
        fill="#000"
      />
    </Svg>
  );
};
export default Svg4;
