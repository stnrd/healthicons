import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHepatology = (passedProps: SvgProps) => {
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.062 13.003a9.484 9.484 0 0 0-.99 2.024c-.289.827-.427 1.57-.494 2.109a8.436 8.436 0 0 0-.06.895v.028l1-.019c.938-.019.996-.02 1-.019v-.024a6.382 6.382 0 0 1 .046-.617 8.166 8.166 0 0 1 .396-1.69 7.192 7.192 0 0 1 1.481-2.503c1.38.228 1.94.624 2.409.956.446.316.81.573 1.718.573.937 0 2.25-.329 3.562-.659 1.969-.494 3.937-.988 4.64-.37 1.172 1.03-2.343 8.582-5.859 8.582-1.809 0-2.894 1.526-3.947 3.008-.993 1.397-1.957 2.754-3.474 2.754-1.022 0-1.793.265-2.478.622V23.82c0-.24.118-.481.354-.687.255-.223.526-.3.633-.3v-2c-.688 0-1.41.322-1.95.794-.559.49-1.037 1.243-1.037 2.193v.583c-.916.369-2.316.546-3.841-.653-2.659-2.088-4.178.836-1.9 2.506 1.578 1.157 4.248.712 5.741.329v3.26c-.703.377-1.493.662-2.552.662-1.282 0-1.705 1.206-2.155 2.488C14.795 34.449 14.25 36 12.382 36c-3.515 0-2.648-12.732-.554-17.66C13.922 13.41 16.787 13 22.646 13c.143 0 .282.001.416.003Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.012 41.5V30h2v11.5h-2Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgHepatology;
