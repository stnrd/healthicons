import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTemple = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 10.762c0 3.572 3 3.286 3 3.286v4s-3.2 7-6 3.889c0 3.11 2.8 3.11 2.8 3.11H15v4s-2.4 7-6 3.89c0 1.67 1.039 2.444 2 2.802v8.309h26v-8.309c.962-.358 2-1.131 2-2.802-2.749 2.375-5.06-1.145-6-2.942v-4.947h1.2s2.8 0 2.8-3.111c-2.272 2.524-5.038-1.608-6-3.257v-4.632s3 .286 3-3.286c-4 4.286-10-6.714-10-6.714s-6 11-10 6.714Zm-1 31.286v-6h2v6h-2Zm4 0h2v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h2v-6H17v6Zm16-6v6h2v-6h-2Zm-4-22v4h-2v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1h-2v-4h10Zm-12 15v-4h14v4h-2v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1h-2Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTemple);
export default ForwardRef;
