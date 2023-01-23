import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgContraceptiveVoucher = (passedProps: SvgProps) => {
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
        d="M19.273 25.585a2.956 2.956 0 0 1 .152-1.861l1.912 1.91.567 2.46c.628 2.725-2.483 4.752-4.72 3.077l-.49-.366c-.728-.545-1.746.086-1.583.98l.26 1.421-1.968.36-.26-1.421c-.49-2.683 2.566-4.575 4.75-2.941l.488.366c.746.558 1.783-.118 1.574-1.026l-.682-2.959ZM34.106 14.15c-1.407-1.407-3.975-1.122-5.734.637-1.757 1.757-2.044 4.32-.643 5.729l.408 3.42.002.016 1.611 1.611a2.952 2.952 0 0 0 .373-1.863l-.273-2.288c1.214.054 2.562-.47 3.619-1.528 1.76-1.759 2.044-4.326.637-5.734Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 43c10.493 0 19-8.507 19-19S34.493 5 24 5 5 13.507 5 24s8.507 19 19 19Zm0-2c4.335 0 8.29-1.622 11.293-4.293l-24-24A16.936 16.936 0 0 0 7 24c0 9.389 7.611 17 17 17ZM12.707 11.293l24 24A16.936 16.936 0 0 0 41 24c0-9.389-7.611-17-17-17-4.335 0-8.29 1.622-11.293 4.293Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgContraceptiveVoucher;
