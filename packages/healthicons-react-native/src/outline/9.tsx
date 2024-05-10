import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg9 = (passedProps: SvgProps) => {
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
        d="M13.516 33.005A9.033 9.033 0 0 0 22.032 39h3.936C30.94 39 35 34.986 35 30V18c0-4.986-4.06-9-9.032-9h-3.936C17.06 9 13 13.014 13 18s4.06 9 9.032 9h3.936A9.045 9.045 0 0 0 29 26.48V30c0 1.642-1.343 3-3.032 3h-3.936a3.033 3.033 0 0 1-2.862-2.005 3 3 0 0 0-5.654 2.01ZM22.032 37a7.032 7.032 0 0 1-6.631-4.665 1 1 0 1 1 1.884-.67A5.033 5.033 0 0 0 22.032 35h3.936C28.753 35 31 32.756 31 30v-5.08a1 1 0 0 0-1.501-.865 7.021 7.021 0 0 1-3.531.945h-3.936C18.153 25 15 21.87 15 18s3.153-7 7.032-7h3.936C29.847 11 33 14.13 33 18v12c0 3.87-3.153 7-7.032 7h-3.936Zm0-16C20.343 21 19 19.642 19 18s1.343-3 3.032-3h3.936C27.657 15 29 16.358 29 18s-1.343 3-3.032 3h-3.936ZM17 18c0 2.756 2.247 5 5.032 5h3.936C28.753 23 31 20.756 31 18s-2.247-5-5.032-5h-3.936C19.247 13 17 15.244 17 18Z"
      />
    </Svg>
  );
};
export default Svg9;
