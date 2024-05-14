import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg8 = (passedProps: SvgProps) => {
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
        d="M35 18c0-4.986-4.06-9-9.032-9h-3.936C17.06 9 13 13.014 13 18c0 2.308.872 4.41 2.3 6a8.948 8.948 0 0 0-2.3 6c0 4.986 4.06 9 9.032 9h3.936C30.94 39 35 34.986 35 30c0-2.308-.872-4.41-2.3-6a8.947 8.947 0 0 0 2.3-6Zm-9.032-7C29.847 11 33 14.13 33 18c0 2.092-.92 3.966-2.38 5.249a1 1 0 0 0 0 1.502A6.963 6.963 0 0 1 33 30c0 3.87-3.153 7-7.032 7h-3.936C18.153 37 15 33.87 15 30c0-2.092.92-3.966 2.38-5.249a1 1 0 0 0 0-1.502A6.963 6.963 0 0 1 15 18c0-3.87 3.153-7 7.032-7h3.936Zm0 4C27.657 15 29 16.358 29 18s-1.343 3-3.032 3h-3.936C20.343 21 19 19.642 19 18s1.343-3 3.032-3h3.936ZM31 18c0-2.756-2.247-5-5.032-5h-3.936C19.247 13 17 15.244 17 18s2.247 5 5.032 5h3.936C28.753 23 31 20.756 31 18Zm-5.032 9C27.657 27 29 28.358 29 30s-1.343 3-3.032 3h-3.936C20.343 33 19 31.642 19 30s1.343-3 3.032-3h3.936ZM31 30c0-2.756-2.247-5-5.032-5h-3.936C19.247 25 17 27.244 17 30s2.247 5 5.032 5h3.936C28.753 35 31 32.756 31 30Z"
      />
    </Svg>
  );
};
export default Svg8;
