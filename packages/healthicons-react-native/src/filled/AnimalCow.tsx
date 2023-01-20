import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalCow = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M33 32c2.566 0 4-1.67 4-3s-1.434-3-4-3-4 1.67-4 3 1.434 3 4 3Zm0 2c3.314 0 6-2.239 6-5s-2.686-5-6-5-6 2.239-6 5 2.686 5 6 5Z"
        fill="#333"
      />
      <Path
        d="M15.727 13.126c.67-.17 1.345-.442 1.83-.8 1.27-.934 2.007-2.813.382-2.607-.473.06-.814.072-1.093.082-.678.023-.98.034-1.88.697a6.6 6.6 0 0 0-.951.847C12.616 10.305 10.755 9.84 7.5 10a.5.5 0 0 0 0 1h1.737c.286.184.53.356.747.52L6.4 16h-.212a2 2 0 0 0-1.916 2.575l.3 1A2 2 0 0 0 6.488 21H9.85a2 2 0 0 1 1.176.383l2.19 1.592c.066.048.134.092.203.13 1.567 4.04 3.22 7.186 5.07 8.769l.345 4.14A1 1 0 0 0 19 38h3v-9h9.81c1.48 1.441 3.14 2.571 5.69 3l.334 4.014A1 1 0 0 0 38 38h3V20a6.12 6.12 0 0 0-1.27-3.754c.625.168 1.062.413 1.37.71.557.535.9 1.436.9 3.044l.387 5.42c-.235.365-.387.937-.387 1.58 0 1.105.448 2 1 2s1-.895 1-2c0-.643-.152-1.215-.387-1.58L44 20c0-1.834-.383-3.4-1.514-4.487-1.117-1.073-2.756-1.477-4.773-1.511C37.637 14 35.556 14 35.5 14v.007a5.685 5.685 0 0 0-.278-.007H20.5c-1.934 0-3.395-.288-4.62-.668l-.153-.206Z"
        fill="#333"
      />
      <Path
        d="m28.074 29.768-1.748.715.758 1.851 1.747-.714-.757-1.852ZM28.876 33.858l1.059-1.97 1.762.948-1.059 1.97-1.762-.948ZM33.01 32.918l.424 2.196 1.964-.38-.425-2.196-1.964.38Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgAnimalCow);
export default ForwardRef;
