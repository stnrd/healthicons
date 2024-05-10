import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDiabetesMeasure = (
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
        d="m14.956 8.211 18-.015.014 18-18 .015-.014-18Zm13.008 9.847c.002 2.133-1.757 3.81-3.997 3.812-2.24.002-4.001-1.673-4.003-3.806-.002-2.133 3.994-6.86 3.994-6.86s4.004 4.873 4.006 6.854Z"
      />
      <path d="M16.984 27.986a1 1 0 0 0 .001 2l4-.003a1 1 0 1 0-.001-2l-4 .003ZM25.985 28.979a1 1 0 0 1 .999-1.001l4-.003a1 1 0 1 1 .001 2l-4 .003a1 1 0 0 1-1-1ZM23.982 40.204a2 2 0 1 0-.003-4 2 2 0 0 0 .003 4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m12.978 35.213 5-.005.007 9 12-.01-.007-9 5-.003a3 3 0 0 0 2.997-3.003l-.02-25a3 3 0 0 0-3.002-2.997l-22 .018a3 3 0 0 0-2.998 3.002l.02 25a3 3 0 0 0 3.003 2.998ZM34.954 6.195l-22 .018a1 1 0 0 0-.999 1l.02 25a1 1 0 0 0 1.001 1l5-.005-.001-2 12-.01.001 2 5-.003a1 1 0 0 0 1-1.001l-.02-25a1 1 0 0 0-1.002-1ZM27.976 33.2l-8 .007.008 9 8-.007-.008-9Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDiabetesMeasure);
export default ForwardRef;
