import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDiabetesSymbols = (
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
        d="m40.658 24.003-6.75.005c.11.313.171.65.172 1v.64c0 .987-.475 1.863-1.21 2.41.29.46.457 1.006.458 1.59v.64a3 3 0 0 1-2.998 3.003h-.541c.11.313.171.65.171 1l.001.64a3 3 0 0 1-2.998 3.003l-11.063.009c-6.578.005-11.915-5.323-11.92-11.901a11.91 11.91 0 0 1 7.84-11.204l11.981-4.355a3.224 3.224 0 0 1 3.399.768c1.644 1.67 1.012 4.48-1.188 5.288l-2.285.837 16.926-.013a3.32 3.32 0 0 1 .005 6.64Zm-.004-4.64a1.32 1.32 0 0 1 .002 2.64h-.682a1.15 1.15 0 0 0 .002-.074v-.006c0-.828-.896-1.5-2-1.498-1.105 0-2 .673-2 1.501 0 .027.001.054.003.08l-10.485.009.002 2 5.583-.005a1 1 0 0 1 1 1l.001.64a1 1 0 0 1-1 1l-5.582.005.002 2 4.827-.004a1 1 0 0 1 1 1l.001.639a1 1 0 0 1-1 1l-7.106.007.002 2 3.736-.003a1 1 0 0 1 1 .999l.001.64a1 1 0 0 1-1 1l-11.063.01c-5.473.004-9.914-4.43-9.918-9.903a9.91 9.91 0 0 1 6.524-9.322l11.98-4.355a1.224 1.224 0 0 1 .84 2.298l-2.286.838c-2.099.77-1.545 3.88.69 3.877l16.926-.013Z"
      />
      <path d="M37.986 33.424c1.68 0 2.999-1.26 2.998-2.86-.002-1.485-3.005-5.14-3.005-5.14s-2.997 3.546-2.995 5.146c0 1.6 1.322 2.856 3.002 2.854Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDiabetesSymbols);
export default ForwardRef;