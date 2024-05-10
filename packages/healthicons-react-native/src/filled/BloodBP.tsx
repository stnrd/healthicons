import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodBP = (passedProps: SvgProps) => {
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
        d="M15 12a1 1 0 0 1 1-1h5a4 4 0 0 1 2.646 7A4 4 0 0 1 21 25h-5a1 1 0 0 1-1-1V12Zm6 5a2 2 0 1 0 0-4h-4v4h4Zm2 4a2 2 0 0 1-2 2h-4v-4h4a2 2 0 0 1 2 2Z"
      />
      <Path d="M27 17a1 1 0 1 0 0 2h1.5v1.5a1 1 0 1 0 2 0V19H32a1 1 0 1 0 0-2h-1.5v-1.5a1 1 0 1 0-2 0V17H27Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 34.03c0 2.193 1.79 3.97 4 3.97h4v2h5v4h2v-4h5v-2h4c2.21 0 4-1.777 4-3.97V10.328c0-2.192-1.79-3.97-4-3.97h-6l-1.132-1.155a4.022 4.022 0 0 0-5.736 0L20 6.358h-6c-2.21 0-4 1.777-4 3.97V34.03ZM28 8.359a2 2 0 0 1-1.429-.6L25.44 6.602a2.021 2.021 0 0 0-2.878 0l-1.132 1.156a2 2 0 0 1-1.429.6h-6c-1.12 0-2 .896-2 1.97V28.97a68.676 68.676 0 0 1 3.7.06l.53.02c1.284.048 2.481.093 3.652.069 2.627-.056 5.042-.466 7.61-1.981 3.118-1.84 5.758-1.288 7.583-.226.338.197.647.41.925.626V10.327c0-1.073-.88-1.97-2-1.97h-6Z"
      />
    </Svg>
  );
};
export default SvgBloodBP;
