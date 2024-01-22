import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGhana = (passedProps: SvgProps) => {
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
        d="M24 7a1 1 0 0 0-1 1v2.98l-.857.124a13.003 13.003 0 0 0-8.952 5.644 13 13 0 0 0 8.952 20.089l.857.124V40a1 1 0 1 0 2 0v-3.04l.857-.123a13 13 0 0 0 7.335-3.674 1 1 0 0 0-1.414-1.414 11 11 0 0 1-5.578 3l-1.2.244V12.948l1.2.245a11 11 0 0 1 5.578 3 1 1 0 0 0 1.414-1.415 13 13 0 0 0-7.335-3.674L25 10.98V8a1 1 0 0 0-1-1Zm-3 1a3 3 0 1 1 6 0v1.273a15 15 0 0 1 7.607 4.09 3 3 0 1 1-4.243 4.243A9 9 0 0 0 27 15.486v16.97a9 9 0 0 0 3.364-2.122 3 3 0 0 1 4.243 4.243A15 15 0 0 1 27 38.667V40a3 3 0 1 1-6 0v-1.333a15.007 15.007 0 0 1-9.472-6.363A15 15 0 0 1 21 9.274V8Zm2 4.948v22.045l-1.2-.245a11 11 0 0 1 0-21.555l1.2-.245Zm-2 2.537a9 9 0 0 0 0 16.97v-16.97Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgGhana;
