import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSti = (
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
        d="M0 0h48v48H0V0Zm28 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-11.4 6a2 2 0 0 0-1.774 1.077l-2.6 5a2 2 0 0 0 .525 2.485l4.118 3.294c1.07.648 2.18.406 2.908-.174.452-.36.7-.806.745-1.198.04-.347-.062-.768-.568-1.2a130.977 130.977 0 0 0-3.394-2.793l-.05-.039-.012-.01-.003-.002.151-.194L17.814 18H18v1.08c.174.139.426.34.74.595.63.51 1.509 1.233 2.511 2.087.549.468.919 1.01 1.114 1.586a4 4 0 1 1 2.77 7.488l.87 11.317A2 2 0 0 0 30 42V26.947c1.715-.19 3.153-.878 4.207-1.953 1.229-1.253 1.808-2.903 1.793-4.513A6.46 6.46 0 0 0 34.154 16C32.91 14.741 31.14 14 29.019 14H16.6ZM18 28.238a4.54 4.54 0 0 0 2.085-.415 4.007 4.007 0 0 0 2.78 3.014l-.87 11.316A2 2 0 0 1 18 42V28.239ZM26 27a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4-4.1v-4.792c.601.143 1.02.413 1.307.703.444.45.687 1.067.693 1.708.006.64-.223 1.24-.65 1.674-.28.287-.71.564-1.35.707Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSti);
export default ForwardRef;
