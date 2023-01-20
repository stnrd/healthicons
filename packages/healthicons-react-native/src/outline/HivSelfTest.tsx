import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHivSelfTest = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.122 21c0-.35-.06-.687-.171-1H38a3.5 3.5 0 1 0 0-7H24.082l2.566-1.033c2.068-.832 2.603-3.512 1.014-5.075a3.093 3.093 0 0 0-3.279-.682l-11.648 4.477A11.282 11.282 0 0 0 5.5 21.218c0 6.23 5.051 11.282 11.282 11.282h9.43a3 3 0 0 0 2.83-4h.364a3 3 0 0 0 3-3v-.423c0-.593-.172-1.145-.47-1.61a2.995 2.995 0 0 0 1.186-2.39V21Zm6.378-4.5A1.5 1.5 0 0 0 38 15H24.082c-2.2 0-2.788-3.034-.747-3.855l2.566-1.033a1.093 1.093 0 0 0-.8-2.035l-11.649 4.477a9.282 9.282 0 0 0 3.33 17.946h9.43a1 1 0 0 0 0-2h-3.434v-2h6.628a1 1 0 0 0 1-1v-.423a1 1 0 0 0-1-1h-4.468v-2h5.184a1 1 0 0 0 1-1V21a1 1 0 0 0-1-1h-5.184v-2h9.676a1.167 1.167 0 0 1-.114-.5c0-.828.895-1.5 2-1.5s2 .672 2 1.5c0 .154-.031.303-.089.443A1.5 1.5 0 0 0 39.5 16.5Z"
        fill="#333"
      />
      <Path
        d="M39.5 26.143c0 1.6-1.32 2.857-3 2.857s-3-1.257-3-2.857c0-1.6 3-5.143 3-5.143s3 3.657 3 5.143ZM38.705 41.385a1 1 0 0 1-1.83.036l-2.782-6a1 1 0 0 1 1.814-.841l1.826 3.938 1.626-3.902a1 1 0 0 1 1.846.769l-2.5 6ZM20.5 34a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-2h3v2a1 1 0 0 0 2 0v-6a1 1 0 1 0-2 0v2h-3v-2a1 1 0 0 0-1-1ZM28 35a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-.5v4h.5a1 1 0 1 1 0 2h-3a1 1 0 0 1 0-2h.5v-4H29a1 1 0 0 1-1-1Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgHivSelfTest);
export default ForwardRef;
