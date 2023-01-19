import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeFever = (
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
        d="M48 0H0v48h48V0ZM19.06 20H16v9h-2v-9h-3.06c-.723 0-1.174-.877-.813-1.579l4.06-7.895c.362-.701 1.264-.701 1.625 0l4.061 7.895c.36.702-.09 1.579-.812 1.579ZM25 29.755a8 8 0 1 0 10 0V9.357C35 6.398 32.761 4 30 4s-5 2.398-5 5.357v20.398Zm8-7.694c-1.457.024-2.822-.33-4.018-.64-.73-.19-1.396-.362-1.982-.422V9.357c0-1.775 1.343-3.214 3-3.214s3 1.439 3 3.214v.619h-2a1 1 0 0 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v2.085Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeFever);
export default ForwardRef;
