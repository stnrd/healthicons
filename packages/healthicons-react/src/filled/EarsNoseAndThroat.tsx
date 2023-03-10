import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEarsNoseAndThroat = (
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
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-6v-7.935c0-1.925.998-3.672 2.258-5.128.997-1.151 1.771-2.466 2.221-3.873.75-2.345.69-4.847-.172-7.159-.86-2.31-2.479-4.315-4.629-5.733-2.15-1.417-4.724-2.176-7.362-2.172-2.727.02-5.376.845-7.56 2.357-2.186 1.511-3.793 3.63-4.589 6.046-.256.899-.541 3.541-.541 3.541-.457 1.136-.941 2.246-1.426 3.356l-.685 1.612c-.255.437-.429.91-.513 1.4-.019.326.093.647.315.9.22.254.535.423.883.475.114 0 2.8.313 2.8.313v3c0 1 .6 3 3 3h2v6H9a3 3 0 0 1-3-3V9Zm7 19.9c0-2 3-5.9 7.5-5.9 1.711 0 2.817.78 3.689 1.394.568.4 1.036.731 1.509.731.92 0 1.659-.287 2.217-.643.575-.366 1.438-.277 1.743.334a.915.915 0 0 1-.269 1.145l-.167.124c-1.713 1.272-2.64 1.96-2.64 4.565V42H24v-6.5c0-1.827-1.069-3.517-2.85-3.926-1.863-.429-4.29-.637-6.15.426v-2c2.685-1.342 5.82-.883 7.592-.435.686.173 1.373-.363 1.004-.966-.77-1.26-2.556-2.099-4.596-2.099-3.535 0-5 2.5-5 2.5l-1-.1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m28.74 22.673-.008.009.001-.002.003-.003.002-.002.001-.002ZM28 22l-.74-.673.002-.002.003-.003.007-.008.018-.019a3.461 3.461 0 0 1 .229-.213A4.629 4.629 0 0 1 30.5 20c1.82 0 3.499 1.51 3.499 4.05 0 2.133-.956 3.633-2.05 4.58a6.301 6.301 0 0 1-1.624 1.022c-.489.21-1 .348-1.417.348a1 1 0 1 1 0-2c.002 0 .018 0 .05-.005.036-.006.083-.015.142-.03.118-.03.267-.078.437-.151.34-.146.733-.375 1.103-.695.724-.627 1.359-1.602 1.359-3.069 0-1.56-.905-2.05-1.5-2.05a2.63 2.63 0 0 0-1.685.605 1.49 1.49 0 0 0-.074.067l-.01.01a1 1 0 0 1-1.47-1.355L28 22Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEarsNoseAndThroat);
export default ForwardRef;
