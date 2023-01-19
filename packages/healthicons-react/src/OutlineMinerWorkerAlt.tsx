import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineMinerWorkerAlt = (
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
        d="M14.207 19.403C13.55 20.06 13 21.02 13 22.292c0 1.872.612 3.125 1.264 3.897.137.162.275.302.411.424V20.75h2v19.615a.64.64 0 0 0 .635.635.64.64 0 0 0 .634-.635v-9.172h5.27v9.172a.64.64 0 0 0 .634.635.64.64 0 0 0 .635-.635V19.75h9.172a.64.64 0 0 0 .635-.634.64.64 0 0 0-.635-.635h-17.98l-.005.002c-.03.006-.197.039-.484.189-.298.157-.648.4-.979.731Zm.468 9.577a4.286 4.286 0 0 1-.459-.233 5.81 5.81 0 0 1-1.48-1.267C11.776 26.343 11 24.633 11 22.292c0-1.903.838-3.349 1.794-4.304a6.138 6.138 0 0 1 1.463-1.087c.444-.233.956-.42 1.418-.42h17.98a2.64 2.64 0 0 1 2.635 2.635 2.64 2.64 0 0 1-2.635 2.634h-7.172v18.615A2.64 2.64 0 0 1 23.848 43a2.64 2.64 0 0 1-2.635-2.635v-7.172h-1.269v7.172A2.64 2.64 0 0 1 17.31 43a2.64 2.64 0 0 1-2.635-2.635V28.98Z"
        clipRule="evenodd"
      />
      <path fill="#333" d="M34 11v30h-2V11h2Z" />
      <path
        fill="#333"
        d="M26 15c0-1.657 3.134-3 7-3s7 1.343 7 3c-5-1.5-8.5-1.5-14 0Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M26 11h-1.455a4.25 4.25 0 0 1 .303 1.578 4.28 4.28 0 0 1-4.27 4.269 4.279 4.279 0 0 1-4.268-4.27c0-.556.107-1.088.303-1.577H15c0-2.761 2.462-5 5.5-5S26 8.239 26 11Zm-3.796 0h-3.25c-.398.41-.644.967-.644 1.578a2.279 2.279 0 0 0 2.269 2.269 2.279 2.279 0 0 0 2.269-2.27A2.26 2.26 0 0 0 22.204 11ZM20.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineMinerWorkerAlt);
export default ForwardRef;
