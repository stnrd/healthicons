import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusShield = (passedProps: SvgProps) => {
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
      <Path fill="#fff" d="M0 0h48v48H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 19.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4ZM18.8 23a5.2 5.2 0 1 1 10.4 0 5.2 5.2 0 0 1-10.4 0ZM22.3 16a1 1 0 0 1 1-1h1.4a1 1 0 1 1 0 2h-1.4a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 19.5v-2.8h2v2.8h-2ZM27.493 16.693a1 1 0 0 1 1.414 0l1.4 1.4a1 1 0 0 1-1.414 1.414l-1.4-1.4a1 1 0 0 1 0-1.414Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m26.093 19.493 2.1-2.1 1.414 1.414-2.1 2.1-1.414-1.414ZM31 21.3a1 1 0 0 1 1 1v1.4a1 1 0 1 1-2 0v-1.4a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.2 23a1 1 0 0 1 1-1H31a1 1 0 1 1 0 2h-2.8a1 1 0 0 1-1-1ZM31.007 26.493a1 1 0 0 1 0 1.414l-1.4 1.4a1 1 0 1 1-1.414-1.414l1.4-1.4a1 1 0 0 1 1.414 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m28.207 25.093 2.1 2.1-1.414 1.414-2.1-2.1 1.414-1.414ZM22.3 30a1 1 0 0 1 1-1h1.4a1 1 0 1 1 0 2h-1.4a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 26.2a1 1 0 0 1 1 1V30a1 1 0 1 1-2 0v-2.8a1 1 0 0 1 1-1ZM17.693 26.493a1 1 0 0 1 1.414 0l1.4 1.4a1 1 0 0 1-1.414 1.414l-1.4-1.4a1 1 0 0 1 0-1.414Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m21.907 26.507-2.1 2.1-1.414-1.414 2.1-2.1 1.414 1.414ZM17 21.3a1 1 0 0 1 1 1v1.4a1 1 0 1 1-2 0v-1.4a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a1 1 0 0 1 1-1h2.8a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1ZM20.507 16.693a1 1 0 0 1 0 1.414l-1.4 1.4a1 1 0 0 1-1.414-1.414l1.4-1.4a1 1 0 0 1 1.414 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m20.493 20.907-2.1-2.1 1.414-1.414 2.1 2.1-1.414 1.414Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 6.001A34.906 34.906 0 0 1 38.059 8.82l.015.007a3.274 3.274 0 0 1 1.407 1.203c.342.527.523 1.142.519 1.77v11.502c0 2.934-.66 6.456-2.764 9.79-2.11 3.343-5.629 6.428-11.226 8.542a5.694 5.694 0 0 1-4.02 0c-5.598-2.117-9.117-5.19-11.227-8.527C8.659 29.78 8 26.258 8 23.301V11.8a3.216 3.216 0 0 1 .52-1.77 3.274 3.274 0 0 1 1.406-1.203l.015-.007A34.906 34.906 0 0 1 24 6ZM9 11.796h1v11.505c0 2.668.594 5.797 2.453 8.736 1.852 2.93 5.004 5.744 10.244 7.726a3.693 3.693 0 0 0 2.607 0c5.235-1.978 8.387-4.803 10.24-7.74C37.405 29.075 38 25.944 38 23.3V11.79a1.215 1.215 0 0 0-.197-.671c-.13-.2-.317-.363-.541-.465a32.906 32.906 0 0 0-13.253-2.652h-.018a32.906 32.906 0 0 0-13.253 2.652 1.275 1.275 0 0 0-.54.464 1.217 1.217 0 0 0-.198.672l-1 .007Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgVirusShield;
