import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusResearchAlt = (
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
        d="M48 0H0v48h48V0ZM36 7a1 1 0 0 1-1 1v1.1c.638.13 1.233.38 1.757.728L37.586 9A1 1 0 0 1 39 7.586L40.414 9A1 1 0 1 1 39 10.414l-.828.829c.347.524.598 1.119.728 1.757H40a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0h-1.1a4.972 4.972 0 0 1-.728 1.757l.828.829A1 1 0 1 1 40.414 19L39 20.414A1 1 0 0 1 37.586 19l-.829-.828A4.972 4.972 0 0 1 35 18.9V20a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2v-1.1a4.972 4.972 0 0 1-1.757-.728l-.829.828A1 1 0 0 1 29 20.414L27.586 19A1 1 0 0 1 29 17.586l.828-.829A4.972 4.972 0 0 1 29.1 15H28a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0h1.1c.13-.638.38-1.233.728-1.757L29 10.414A1 1 0 0 1 27.586 9l.698-.698.009-.01.01-.008.697-.698A1 1 0 0 1 30.414 9l.829.828A4.972 4.972 0 0 1 33 9.1V8a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm-21.049 4.157-1.5-2.598 1.732-1 1.5 2.598 1.732-1 1.085 1.88a3.001 3.001 0 0 1 3.147 1.45l4 6.928a3 3 0 0 1-1.098 4.098l-.866.5 1 1.732-1.732 1-1-1.732-.866.5a3 3 0 0 1-4.098-1.098l-2.776-4.808A9.49 9.49 0 0 0 11 27.5c0 .854.112 1.68.323 2.465A9.462 9.462 0 0 1 15.5 29a9.488 9.488 0 0 1 7.709 3.947l-4.552 2.628 1 1.732 4.545-2.624a9.567 9.567 0 0 1 .68 5.317H39a1 1 0 1 1 0 2H6.634l-.216-.706A9.498 9.498 0 0 1 6 38.5a9.482 9.482 0 0 1 3.568-7.42A11.491 11.491 0 0 1 9 27.5a11.49 11.49 0 0 1 5.21-9.628l-.223-.385a3.001 3.001 0 0 1 .317-3.45l-1.085-1.88 1.732-1Zm9.251 23.526 13.641-7.876-1-1.732-13.634 7.872a9.49 9.49 0 0 1 .993 1.736Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVirusResearchAlt);
export default ForwardRef;
