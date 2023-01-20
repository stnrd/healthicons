import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgReferral = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
      <Path d="M37 27a3 3 0 1 1-6 0 3 3 0 1 1 6 0Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 25a2 2 0 1 0 0 4 2 2 0 1 0 0-4Zm-4 2a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4Z"
        fill="#333"
      />
      <Path
        d="M26 37.364C26 34.462 31.33 33 34 33s8 1.462 8 4.364V42H26v-4.636Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.294 36.867c-.283.285-.294.441-.294.497V40h12v-2.636c0-.056-.01-.212-.294-.497-.3-.303-.805-.634-1.506-.94C36.788 35.308 35.06 35 34 35s-2.788.31-4.2.926c-.701.306-1.205.638-1.506.941ZM34 33c-2.67 0-8 1.462-8 4.364V42h16v-4.636C42 34.462 36.67 33 34 33Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 38c0 .537.18 1.041.497 1.398.301.339.774.602 1.503.602h10v2H17c-1.271 0-2.298-.487-2.997-1.273C13.32 39.959 13 38.963 13 38v-5h2v5Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m14 30.586 5.707 5.707-1.414 1.414L14 33.414l-4.293 4.293-1.414-1.414L14 30.586ZM11 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1h5v19H6V9h5V8Zm0 3H8v2h3v-2Zm0 4H8v11h5v-6h8v6h5V15h-3v1a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-1Zm12-2h3v-2h-3v2Zm-4 13v-4h-4v4h4Zm-3-15V8h2v3h3v2h-3v3h-2v-3h-3v-2h3Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgReferral);
export default ForwardRef;
