import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusLabResearchTestTube = (
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
        d="M13 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v1.273a1.5 1.5 0 0 1 1 1.415v12.311a10.06 10.06 0 0 0-2 2v-2.014L17.015 20H16v1.157l5.933 5.933a9.993 9.993 0 0 0-1.045 1.784L16 23.985v2.172l4.32 4.32c-.207.802-.319 1.642-.32 2.508l-4-4v2.172l4.305 4.305a10.004 10.004 0 0 0 3.379 5.291A5.002 5.002 0 0 1 14 39V12.687a1.5 1.5 0 0 1 1-1.414V10h-1a1 1 0 0 1-1-1V5Zm9 8.102a1.5 1.5 0 0 1-1-1.415V10h-4v1.688a1.5 1.5 0 0 1-1 1.414V18h6v-4.898Zm0 9.055L19.844 20h1.17l.986.985v1.172Zm-.959 19.041L16 36.157v-2.172l5.875 5.875a2.999 2.999 0 0 1-.834 1.338ZM19.015 42 16 38.985V39a3 3 0 0 0 3 3h.015ZM15 8V6h8v2h-8Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 27a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v1.1c-.638.13-1.233.38-1.757.728L26.414 28A1 1 0 0 0 25 26.586l-.698.698-.01.009-.009.01-.697.697A1 1 0 0 0 25 29.414l.828.829A4.972 4.972 0 0 0 25.1 32H24a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0h1.1c.13.638.38 1.233.728 1.757l-.828.829A1 1 0 1 0 23.586 38L25 39.414A1 1 0 0 0 26.414 38l.829-.828A4.972 4.972 0 0 0 29 37.9V39a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2v-1.1a4.972 4.972 0 0 0 1.757-.728l.829.828A1 1 0 0 0 35 39.414L36.414 38A1 1 0 0 0 35 36.586l-.828-.829A4.972 4.972 0 0 0 34.9 34H36a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0h-1.1a4.972 4.972 0 0 0-.728-1.757l.828-.829A1 1 0 1 0 36.414 28L35 26.586A1 1 0 0 0 33.586 28l-.829.828A4.972 4.972 0 0 0 31 28.1V27Zm-1 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVirusLabResearchTestTube);
export default ForwardRef;
