import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAgricultureWorker = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
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
        d="M48 0H0v48h48V0ZM24 27a8 8 0 0 1-7.998-7.846c.63.151 1.307.285 2.023.4a6 6 0 0 0 11.95 0 26.66 26.66 0 0 0 2.024-.4A8 8 0 0 1 24 27Zm-6.803 8A6.02 6.02 0 0 1 14 37.659V41c0 .35-.06.687-.17 1H42v-6c0-5.417-11.992-7-18-7a47.23 47.23 0 0 0-6 .414V35h-.803Zm2.803.57V31.2c1.467-.138 2.848-.2 4-.2 1.666 0 3.809.129 6 .432V35c-.013.005-2.51 1-6 1a19.02 19.02 0 0 1-4-.43ZM33 35h2a1 1 0 0 1 1 1v4h4v-4c0-.506-.248-1.092-1.165-1.777-.94-.702-2.363-1.325-4.132-1.831-.552-.158-1.122-.3-1.703-.429V35ZM8 25a1 1 0 1 0-2 0v7a4 4 0 0 0 4 4v5a1 1 0 1 0 2 0v-5a4 4 0 0 0 4-4v-7a1 1 0 1 0-2 0v7a2 2 0 0 1-2 2v-9a1 1 0 1 0-2 0v9a2 2 0 0 1-2-2v-7ZM30 8c0-1.105-2.988-2-6-2s-6 .895-6 2l-.852 2.841c.353.054.742.111 1.153.168 1.796.25 3.99.491 5.699.491 1.71 0 3.903-.242 5.699-.49.411-.058.8-.115 1.153-.169L30 8Zm1.587 4.751c-.468.074-1.017.157-1.614.24-1.813.25-4.12.509-5.973.509-1.854 0-4.16-.258-5.973-.51a87.043 87.043 0 0 1-1.614-.239C13.135 13.478 11 14.662 11 16c0 2.21 5.82 4 13 4s13-1.79 13-4c0-1.338-2.135-2.522-5.413-3.249Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAgricultureWorker);
export default ForwardRef;
