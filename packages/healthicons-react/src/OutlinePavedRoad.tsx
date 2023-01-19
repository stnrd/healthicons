import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlinePavedRoad = (
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
        d="M42 7A35 35 0 0 0 7 42a1 1 0 1 1-2 0A37 37 0 0 1 42 5a1 1 0 1 1 0 2Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M38.376 15.244c-.745.1-1.483.232-2.213.394l-.432-1.953a29.05 29.05 0 0 1 2.377-.423l.268 1.982Zm-6.502 1.726a27 27 0 0 0-4.01 2.025l-1.046-1.704a29.014 29.014 0 0 1 4.306-2.175l.75 1.854Zm-7.627 4.687a27.015 27.015 0 0 0-3.127 3.224l-1.546-1.268a29.04 29.04 0 0 1 3.358-3.463l1.315 1.507Zm-5.676 6.923a26.998 26.998 0 0 0-1.9 4.07l-1.876-.694a29.013 29.013 0 0 1 2.04-4.37l1.736.994Zm-3.1 8.398a27.026 27.026 0 0 0-.325 2.224l-1.99-.208c.084-.803.2-1.6.35-2.389l1.965.373Zm19.258-12.532A19 19 0 0 1 42 23a1 1 0 1 1 0 2 17 17 0 0 0-17 17 1 1 0 1 1-2 0 19 19 0 0 1 11.729-17.554Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlinePavedRoad);
export default ForwardRef;
