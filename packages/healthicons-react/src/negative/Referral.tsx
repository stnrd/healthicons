import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgReferral = (
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
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM34 31c1.934 0 3.5-1.566 3.5-3.5S35.934 24 34 24a3.499 3.499 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5Zm-8 6.364C26 34.462 31.33 33 34 33s8 1.462 8 4.364V42H17c-1.271 0-2.298-.487-2.997-1.273C13.32 39.959 13 38.963 13 38V34.414l-3.293 3.293-1.414-1.414 5-5 .707-.707.707.707 5 5-1.414 1.414L15 34.414V38c0 .537.18 1.041.497 1.398.301.339.774.602 1.503.602H26v-2.636ZM13 6a2 2 0 0 0-2 2v1H6v19h22V9h-5V8a2 2 0 0 0-2-2h-8Zm-5 5h3v2H8v-2Zm0 4h3v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1h3v11h-5v-6h-8v6H8V15Zm18-2h-3v-2h3v2Zm-7 9v4h-4v-4h4ZM16 8v3h-3v2h3v3h2v-3h3v-2h-3V8h-2Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgReferral);
export default ForwardRef;
