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
        d="M14 4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v2.273a1.5 1.5 0 0 0-1 1.415V39a5 5 0 0 0 9.684 1.753A9.98 9.98 0 0 1 20 33a9.985 9.985 0 0 1 4-8V12.686a1.5 1.5 0 0 0-1-1.414V9h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H14Zm3 7.688V9h4v2.688a1.5 1.5 0 0 0 1 1.414V18h-6v-4.898a1.5 1.5 0 0 0 1-1.415Zm15.757 25.484A4.972 4.972 0 0 1 31 37.9V39a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2v-1.1a4.972 4.972 0 0 1-1.757-.728l-.829.828A1 1 0 0 1 25 39.414L23.586 38A1 1 0 0 1 25 36.586l.828-.829A4.972 4.972 0 0 1 25.1 34H24a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0h1.1c.13-.638.38-1.233.728-1.757L25 29.414A1 1 0 0 1 23.586 28l.698-.698.009-.01a.846.846 0 0 1 .01-.009l.697-.697A1 1 0 1 1 26.414 28l.829.828A4.972 4.972 0 0 1 29 28.1V27a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2v1.1c.638.13 1.233.38 1.757.728l.829-.828A1 1 0 0 1 35 26.586L36.414 28A1 1 0 0 1 35 29.414l-.828.829c.347.524.598 1.119.728 1.757H36a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0h-1.1a4.972 4.972 0 0 1-.728 1.757l.828.829A1 1 0 1 1 36.414 38L35 39.414A1 1 0 0 1 33.586 38l-.829-.828Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVirusLabResearchTestTube);
export default ForwardRef;
