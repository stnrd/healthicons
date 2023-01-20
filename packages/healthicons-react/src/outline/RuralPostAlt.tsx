import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRuralPostAlt = (
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
        d="M8 25.6v16.448h32V25.54a4.8 4.8 0 0 1-2 1.057v13.452H10V26.631a4.794 4.794 0 0 1-2-1.03Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 25.54a4.8 4.8 0 0 1-2 1.056v13.452H10V26.631a4.794 4.794 0 0 1-2-1.03v16.447h32V25.54Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.547 15.048H8.612c-.706 0-1.318.487-1.477 1.175l-1.111 4.822c-.708 3.071 1.625 6.003 4.777 6.003 1.734 0 3.258-.9 4.13-2.26a5.524 5.524 0 0 0 4.46 2.26A5.526 5.526 0 0 0 24 24.575a5.526 5.526 0 0 0 4.61 2.473c1.83 0 3.453-.89 4.46-2.26a4.898 4.898 0 0 0 4.129 2.26c3.152 0 5.485-2.932 4.777-6.003l-1.111-4.822a1.515 1.515 0 0 0-1.477-1.175h-8.935v1c0 .345-.044.68-.126 1h1.814v4.469a3.531 3.531 0 0 1-7.063 0v-1.47h-2.156v1.47a3.531 3.531 0 0 1-7.063 0v-4.47h1.814a4.006 4.006 0 0 1-.126-1v-1Zm-8.55 2-1.024 4.446a2.902 2.902 0 1 0 5.73.652v-5.098H8.997Zm30.005 0h-4.705v5.098a2.902 2.902 0 1 0 5.73-.652l-1.025-4.446Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 8.048h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Zm-6-2a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4h-6Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 10.048a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6Zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-6Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 8.548a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2H25v2.5a1 1 0 0 1-2 0v-2.5h-2.5a1 1 0 0 1 0-2H23v-2.5a1 1 0 0 1 1-1ZM20 31h-5v9h5v-9Zm-7-2v13h9V29h-9ZM35 31h-8v4h8v-4Zm-10-2v8h12v-8H25Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRuralPostAlt);
export default ForwardRef;
