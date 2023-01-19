import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineVirusResearchAlt = (
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
      <path fill="#fff" d="M0 0h48v48H0z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M35 8a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v1.1c-.638.13-1.233.38-1.757.728L30.414 9A1 1 0 0 0 29 7.586l-.698.698-.01.009-.008.01-.698.697A1 1 0 0 0 29 10.414l.828.829A4.972 4.972 0 0 0 29.1 13H28a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0h1.1c.13.638.38 1.233.728 1.757l-.828.829A1 1 0 1 0 27.586 19L29 20.414A1 1 0 0 0 30.414 19l.829-.828A4.972 4.972 0 0 0 33 18.9V20a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2v-1.1a4.972 4.972 0 0 0 1.757-.728l.829.828A1 1 0 0 0 39 20.414L40.414 19A1 1 0 0 0 39 17.586l-.828-.829A4.972 4.972 0 0 0 38.9 15H40a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0h-1.1a4.972 4.972 0 0 0-.728-1.757l.828-.829A1 1 0 1 0 40.414 9L39 7.586A1 1 0 1 0 37.586 9l-.829.828A4.972 4.972 0 0 0 35 9.1V8Zm-1 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-19.049.157-1.5-2.598 1.732-1 1.5 2.598 1.732-1 1.085 1.88a3.001 3.001 0 0 1 3.147 1.45l4 6.928a3 3 0 0 1-1.098 4.098l-.866.5 1 1.732-1.732 1-1-1.732-.866.5a3 3 0 0 1-4.098-1.098l-2.776-4.808A9.49 9.49 0 0 0 11 27.5c0 .854.112 1.68.323 2.465A9.462 9.462 0 0 1 15.5 29a9.488 9.488 0 0 1 7.709 3.947l13.634-7.872 1 1.732-13.64 7.876a9.567 9.567 0 0 1 .68 5.317H39a1 1 0 1 1 0 2H6.634l-.216-.706A9.498 9.498 0 0 1 6 38.5a9.482 9.482 0 0 1 3.568-7.42A11.49 11.49 0 0 1 9 27.5a11.49 11.49 0 0 1 5.21-9.628l-.223-.385a3.001 3.001 0 0 1 .317-3.45l-1.085-1.88 1.732-1Zm4.598 1.964-3.464 2a1 1 0 0 0-.366 1.366l4 6.928a1 1 0 0 0 1.366.366l3.464-2a1 1 0 0 0 .366-1.366l-4-6.928a1 1 0 0 0-1.366-.366Zm1.916 20.833-2.808 1.621 1 1.732 2.8-1.616A7.538 7.538 0 0 1 22.85 40H8.15a7.5 7.5 0 0 1 13.316-6.046Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineVirusResearchAlt);
export default ForwardRef;
