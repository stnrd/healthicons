import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMagnifyingGlass = (passedProps: SvgProps) => {
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
      <Path d="M18.748 12.816c-1.74.067-3.313.688-4.154 1.53a1 1 0 1 1-1.414-1.415c1.297-1.297 3.409-2.033 5.49-2.114 2.095-.081 4.382.492 5.984 2.094a1 1 0 0 1-1.415 1.414c-1.09-1.091-2.764-1.577-4.491-1.51Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.384 28.936A12.948 12.948 0 0 1 19 32c-7.18 0-13-5.82-13-13S11.82 6 19 6s13 5.82 13 13c0 3.195-1.152 6.12-3.064 8.384L31.144 27l10.284 10.284c.763.763.763 2 0 2.762l-1.382 1.382c-.763.763-2 .763-2.762 0L27 31.144l.384-2.208ZM30 19c0 6.075-4.925 11-11 11S8 25.075 8 19 12.925 8 19 8s11 4.925 11 11Zm7.249 16.933-6.785-6.785-1.12.195-.196 1.121 6.805 6.805 1.296-1.336Zm.118 2.75 1.298 1.298 1.316-1.316-1.318-1.318-1.296 1.336Z"
      />
    </Svg>
  );
};
export default SvgMagnifyingGlass;
