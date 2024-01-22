import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSayanaPress = (
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
        d="m25 4-2 2v5h-2a1 1 0 0 0-1 1v5h-1v2h-3a4 4 0 0 0-4 4v17a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V23a4 4 0 0 0-4-4h-3v-2h-1v-5a1 1 0 0 0-1-1h-2V4Zm0 7h-2v8h-1v1a1 1 0 0 0 1 1v3h2v-3a1 1 0 0 0 1-1v-1h-1v-8Zm-1 25a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-1 2v2h2v-2h-2Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSayanaPress);
export default ForwardRef;
