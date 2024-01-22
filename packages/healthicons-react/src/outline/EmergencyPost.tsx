import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEmergencyPost = (
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
        d="M19.758 32.97a1 1 0 0 1-.728-1.212L19.72 29H17a1 1 0 1 1 0-2h3.22l.81-3.242a1 1 0 1 1 1.94.485L22.28 27H25a1 1 0 1 1 0 2h-3.22l-.81 3.243a1 1 0 0 1-1.212.727Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.014 20.138C9.402 18.869 10.59 18 11.938 18H36v-2h-7v-6h9v8.962l5.935 13.687a.995.995 0 0 1-.642 1.303l.001.004L33.5 37l1-2.5 7.092-2.122-4.607-10.25-4.803 13.734C31.795 37.131 30.607 38 29.26 38H7.054c-2.044 0-3.51-1.937-2.923-3.862l4.883-14ZM6.036 34.749l4.88-13.99.011-.037A1.047 1.047 0 0 1 11.938 20h23.673l-5.33 15.24-.011.038a1.047 1.047 0 0 1-1.011.722H7.054c-.737 0-1.178-.663-1.018-1.25ZM36 12h-5v2h5v-2Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEmergencyPost);
export default ForwardRef;
