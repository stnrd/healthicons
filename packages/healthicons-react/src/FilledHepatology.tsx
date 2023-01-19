import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledHepatology = (
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
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H22.012V29h-2v13H9a3 3 0 0 1-3-3V9Zm5.552 26c-3.766 0-2.837-12.179-.593-16.893C13.202 13.393 16.271 13 22.549 13c3.845 0 4.82.616 5.576 1.093.478.302.868.549 1.84.549 1.005 0 2.411-.315 3.817-.63 2.11-.473 4.219-.946 4.972-.355 1.255.985-2.511 8.209-6.277 8.209-1.94 0-3.102 1.46-4.23 2.877-1.064 1.336-2.097 2.634-3.722 2.634-1.674 0-2.72.593-3.766 1.185-1.046.592-2.093 1.184-3.767 1.184-1.372 0-1.826 1.154-2.308 2.38-.547 1.39-1.13 2.874-3.132 2.874Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M22.073 15.027c.582-1.659 1.786-3.677 4.242-5.017l.957 1.756c-1.914 1.044-2.848 2.602-3.312 3.923a8.16 8.16 0 0 0-.396 1.69 6.483 6.483 0 0 0-.046.617v.028-.003l-1 .019-1 .019v-.029a3.829 3.829 0 0 1 .005-.244c.007-.159.023-.38.056-.651.066-.54.204-1.282.494-2.109Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M14.272 25.258c2.278 1.67 6.835 0 6.835 0V22.75s-2.279 2.089-4.937 0c-2.658-2.088-4.177.836-1.898 2.506Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M21.049 20.628c.54-.472 1.262-.793 1.95-.793v2c-.107 0-.378.076-.633.299-.236.206-.354.446-.354.687V29h-2v-6.18c0-.95.478-1.704 1.037-2.193Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledHepatology);
export default ForwardRef;
