import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBabyMale0203MAlt = (
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
      <path d="M33 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22a6 6 0 0 0 4.89-9.476L20 9.414V11a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h1.586l-3.11 3.11A6 6 0 1 0 12 22Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
      <path d="M33 42c-6.188 0-9-4.548-9-7.959V16.447c.99.407 2.012.9 3.047 1.466.191.11.38.215.568.318a40.928 40.928 0 0 1 6.371 4.522c3.579 3.09 6.57 6.763 8.014 10.434v.854C42 38.021 39.187 42 33 42ZM35.293 21.239a43.134 43.134 0 0 0-1.26-1.048C36.49 20.186 38.957 19.178 42 17v11.83c-1.738-2.752-4.107-5.346-6.707-7.591Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBabyMale0203MAlt);
export default ForwardRef;
