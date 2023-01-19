import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineVirusPatient = (
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
      <path fill="#fff" d="M0 0h48v48H0z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M33 28a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm4-10a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M32 28v-4h2v4h-2Zm6.293-3.707a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m36.293 28.293 3-3 1.414 1.414-3 3-1.414-1.414ZM43 30a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M38 33a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm4.707 5.293a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m38.707 36.293 3 3-1.414 1.414-3-3 1.414-1.414ZM30 43a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M33 38a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm-8.707.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m29.707 37.707-3 3-1.414-1.414 3-3 1.414 1.414ZM23 30a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M22 33a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm5.707-8.707a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m28.293 29.707-3-3 1.414-1.414 3 3-1.414 1.414ZM6 25.333c0-.472.258-.992.946-1.556.687-.564 1.692-1.073 2.888-1.498C12.222 21.429 15.108 21 17 21c1.892 0 4.778.428 7.166 1.279.336.12.656.245.959.377.62-.472 1.283-.89 1.982-1.247a14.534 14.534 0 0 0-2.27-1.014C22.227 19.465 19.113 19 17 19c-2.113 0-5.227.465-7.837 1.395-1.304.464-2.548 1.067-3.485 1.836C4.74 22.999 4 24.03 4 25.333V31h16.153c.106-.686.265-1.354.474-2H6v-3.667ZM17 16c2.763 0 5-2.237 5-5s-2.237-5-5-5-5 2.237-5 5 2.237 5 5 5Zm7-5c0 3.867-3.133 7-7 7s-7-3.133-7-7 3.133-7 7-7 7 3.133 7 7Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineVirusPatient);
export default ForwardRef;
