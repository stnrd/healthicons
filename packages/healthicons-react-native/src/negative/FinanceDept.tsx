import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFinanceDept = (passedProps: SvgProps) => {
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
      <G clipPath="url(#finance-dept_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm8 4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H17Zm14 2H17v9h14v-9Zm-9.727 12.636a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0ZM24 26.273A1.636 1.636 0 1 0 24 23a1.636 1.636 0 0 0 0 3.273Zm6-1.637a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0Zm-10.364 6a1.636 1.636 0 1 0 0-3.272 1.636 1.636 0 0 0 0 3.272Zm6-1.636a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0Zm2.728 1.636a1.636 1.636 0 1 0 0-3.272 1.636 1.636 0 0 0 0 3.272ZM30 33.364a1.636 1.636 0 1 1-3.273 0 1.636 1.636 0 0 1 3.273 0Zm-10.364-1.637a1.636 1.636 0 1 0 0 3.273H24a1.636 1.636 0 0 0 0-3.273h-4.364Z"
        />
      </G>
      <Defs>
        <ClipPath id="finance-dept_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgFinanceDept;
