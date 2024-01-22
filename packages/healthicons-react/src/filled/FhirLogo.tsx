import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFhirLogo = (
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
        d="M24.65 26.361c-5.62 5.642-4.926 11.294-2.374 15.551C16.413 39.412 11 29.5 18.5 20.5 26.5 12.5 25 9 25 6c2.5 4.5 6.406 13.58-.35 20.361Z"
        fill="#000"
      />
      <path
        d="M23.496 42c-1.196-2.593-2.444-8.865 1.18-12.5 6.528-6.73 5.48-12.627 5.335-12.983L30 16.5c.003 0 .006.006.01.017.269.424 5.39 8.73 1.621 17.983 2.175-1.256 3.1-2.971 3.369-3.5-1.126 9.124-6.882 10.626-11.504 11ZM21.5 15.5c-3 1.833-9.782 6.5-10.182 12.5-.4 6 3 8.5 5 10.5-1-1.5-3-5.2-3-10s5.515-10.833 8.182-13Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFhirLogo);
export default ForwardRef;
