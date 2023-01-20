import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSocialDistancingAlt = (
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
      <Path d="M24 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
        fill="#333"
      />
      <Path
        d="M30 23.3c0-1.67-.632-3.273-1.757-4.455C27.117 17.664 25.59 17 24 17c-1.591 0-3.117.664-4.243 1.845A6.463 6.463 0 0 0 18 23.3V26h2.571l.858 9h5.142l.858-9H30v-2.7Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.033 18.156C20.342 16.782 22.127 16 24 16c1.873 0 3.658.782 4.967 2.156C30.274 19.528 31 21.379 31 23.3V26a1 1 0 0 1-1 1h-1.662l-.771 8.095a1 1 0 0 1-.996.905H21.43a1 1 0 0 1-.996-.905L19.663 27H18a1 1 0 0 1-1-1v-2.7c0-1.92.726-3.772 2.033-5.144ZM24 18c-1.31 0-2.577.546-3.518 1.535A5.464 5.464 0 0 0 19 23.3V25h1.571a1 1 0 0 1 .996.905l.77 8.095h3.325l.771-8.095A1 1 0 0 1 27.43 25H29v-1.7a5.464 5.464 0 0 0-1.482-3.765C26.578 18.545 25.31 18 24 18ZM8 14v8H6v-8h2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 17h8v2H6v-2ZM42 14v8h-2v-8h2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 17h8v2h-8v-2ZM14.132 28.687a1 1 0 0 1-.637 1.263c-1.82.599-3.238 1.33-4.182 2.11C8.363 32.847 8 33.587 8 34.227c0 .57.286 1.216 1.022 1.909.737.695 1.859 1.367 3.327 1.952C15.281 39.255 19.4 40 24 40c4.6 0 8.719-.745 11.65-1.913 1.47-.585 2.59-1.257 3.328-1.952.736-.693 1.022-1.339 1.022-1.909 0-.64-.363-1.38-1.313-2.165-.944-.781-2.363-1.512-4.181-2.111a1 1 0 1 1 .625-1.9c1.957.644 3.629 1.475 4.831 2.47C41.16 31.511 42 32.763 42 34.226c0 1.3-.666 2.437-1.65 3.365-.983.925-2.351 1.713-3.96 2.354C33.17 41.228 28.79 42 24 42c-4.789 0-9.17-.772-12.39-2.055-1.609-.64-2.977-1.428-3.96-2.354C6.665 36.663 6 35.526 6 34.226c0-1.463.84-2.715 2.038-3.706 1.202-.995 2.874-1.826 4.831-2.47a1 1 0 0 1 1.263.637Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgSocialDistancingAlt);
export default ForwardRef;
