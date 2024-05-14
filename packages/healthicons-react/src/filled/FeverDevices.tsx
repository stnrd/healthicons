import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFeverDevices = (
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
        d="M30 4c-2.761 0-5 2.398-5 5.357v20.398a8 8 0 1 0 10 0V9.357C35 6.398 32.761 4 30 4Zm3 18.061c-1.457.024-2.822-.33-4.018-.64-.73-.19-1.396-.362-1.982-.422V9.357c0-1.775 1.343-3.214 3-3.214s3 1.439 3 3.214v.619h-2a1 1 0 0 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v2.085Z"
      />
      <path d="M15.812 10.526c-.36-.701-1.263-.701-1.624 0l-4.061 7.895c-.36.702.09 1.579.812 1.579H14v9h2v-9h3.06c.723 0 1.174-.877.813-1.579l-4.06-7.895Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFeverDevices);
export default ForwardRef;
