import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineReferral = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M34 26a2 2 0 1 0 0 4 2 2 0 1 0 0-4Zm-4 2a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4Zm-1.706 8.867c-.283.285-.294.441-.294.497V40h12v-2.636c0-.056-.01-.212-.294-.497-.3-.303-.805-.634-1.506-.94C36.788 35.308 35.06 35 34 35s-2.788.31-4.2.926c-.701.306-1.205.638-1.506.941ZM34 33c-2.67 0-8 1.462-8 4.364V42h16v-4.636C42 34.462 36.67 33 34 33Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M15 38c0 .537.18 1.041.497 1.398.301.339.774.602 1.503.602h10v2H17c-1.271 0-2.298-.487-2.997-1.273C13.32 39.959 13 38.963 13 38v-5h2v5Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m14 30.586 5.707 5.707-1.414 1.414L14 33.414l-4.293 4.293-1.414-1.414L14 30.586ZM10 9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1h4v19H6V10h4V9Zm0 3H8v2h2v-2Zm0 4H8v11h5v-6h8v6h5V16h-2v1a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-1Zm14-2h2v-2h-2v2Zm-5 13v-4h-4v4h4ZM13 8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Zm3 4V9h2v3h3v2h-3v3h-2v-3h-3v-2h3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineReferral);
export default ForwardRef;
