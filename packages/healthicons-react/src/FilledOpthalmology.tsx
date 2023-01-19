import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledOpthalmology = (
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
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm15.04 9C30.75 15 39 24 39 24s-8.25 9-14.96 9C17.328 33 9 24 9 24s8.329-9 15.04-9Zm-12.21 9a43.969 43.969 0 0 1 3.394-2.916c.516-.397 1.053-.79 1.605-1.166A8.213 8.213 0 0 0 15.75 24a8.21 8.21 0 0 0 1.079 4.082 34.155 34.155 0 0 1-1.605-1.166A43.969 43.969 0 0 1 11.83 24Zm20.42 0a8.212 8.212 0 0 0-1.111-4.138c.575.391 1.135.802 1.671 1.218A43.377 43.377 0 0 1 36.183 24a43.399 43.399 0 0 1-3.373 2.92c-.536.416-1.096.827-1.671 1.218A8.212 8.212 0 0 0 32.25 24ZM24 30.25a6.25 6.25 0 1 0 0-12.5 6.25 6.25 0 0 0 0 12.5ZM27.75 24a3.75 3.75 0 1 1-1.311-2.849 1.125 1.125 0 1 0 .41.41c.562.656.901 1.508.901 2.439Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledOpthalmology);
export default ForwardRef;
