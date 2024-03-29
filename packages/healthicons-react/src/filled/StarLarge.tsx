import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgStarLarge = (
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
        d="M23.097 7.064a1.005 1.005 0 0 1 1.806 0l4.782 9.736c.147.298.43.505.759.553l10.693 1.561c.826.121 1.155 1.141.558 1.726l-7.738 7.579a1.015 1.015 0 0 0-.29.895l1.827 10.7c.141.827-.722 1.458-1.461 1.068l-9.564-5.053a1.003 1.003 0 0 0-.938 0l-9.564 5.053c-.739.39-1.602-.24-1.461-1.067l1.826-10.7a1.015 1.015 0 0 0-.29-.896L6.306 20.64c-.598-.585-.268-1.605.558-1.726l10.694-1.56c.328-.049.611-.256.758-.554l4.782-9.736Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgStarLarge);
export default ForwardRef;
