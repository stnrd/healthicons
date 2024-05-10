import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSad = (
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
      <path d="M13.743 20.35c-.12.738.381 1.445 1.064 1.883.714.457 1.732.707 2.93.53a3.794 3.794 0 0 0 2.654-1.666c.504-.763.711-1.692.48-2.381a.5.5 0 0 0-.818-.203c-1.796 1.704-3.824 2.123-5.643 1.448a.5.5 0 0 0-.667.39ZM33.819 20.35c.119.738-.382 1.445-1.065 1.883-.714.457-1.731.707-2.93.53a3.794 3.794 0 0 1-2.653-1.666c-.504-.763-.712-1.692-.48-2.381a.5.5 0 0 1 .818-.203c1.796 1.704 3.824 2.123 5.642 1.448a.5.5 0 0 1 .668.39ZM33.258 31c-1.72-3.562-5.22-6-9.258-6-4.038 0-7.538 2.438-9.258 6-.469.97.316 2 1.394 2h15.728c1.078 0 1.863-1.03 1.394-2Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0-2c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSad);
export default ForwardRef;
