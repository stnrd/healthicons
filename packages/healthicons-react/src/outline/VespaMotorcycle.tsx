import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVespaMotorcycle = (
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
        d="M17.96 33.036c-.102-.005-.215-.01-.34-.013C16.882 33 15.887 33 14.5 33c-1.388 0-2.383 0-3.12.023-.125.004-.238.008-.34.013a3.5 3.5 0 0 0 6.92 0Zm-7.746.081Zm8.571 0ZM14.5 38a5.5 5.5 0 0 0 5.5-5.5c0-.444 0-.757-.143-.977C19.518 31 18.372 31 14.5 31 9 31 9 31 9 32.5a5.5 5.5 0 0 0 5.5 5.5ZM31.175 16H36v12h-2V18h-1.175l-2.843 14.69-1.964-.38L31.175 16ZM38.448 35.938a3.5 3.5 0 0 0 2.78-4.096l1.964-.376a5.5 5.5 0 0 1-10.804 2.068l1.964-.376a3.5 3.5 0 0 0 4.096 2.78Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.371 28.812a4.5 4.5 0 0 0-7.076 3.464l8.642-1.524a4.5 4.5 0 0 0-1.566-1.94Zm1.678 1.92Zm-5.388-4.635a6.5 6.5 0 0 1 7.22 4.134c.456 1.222-.458 2.29-1.486 2.47l-8.863 1.564c-1.027.18-2.251-.51-2.242-1.814a6.5 6.5 0 0 1 5.371-6.354ZM21 20h-9a1 1 0 0 0-1 1v2h11v-2a1 1 0 0 0-1-1Zm-9-2a3 3 0 0 0-3 3v3a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-3a3 3 0 0 0-3-3h-9Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 25h-6.914c-3.973 0-7.152 2.635-7.912 6h14.715a.177.177 0 0 0 .111-.032V25Zm-6.914-2C8.516 23 4 27.278 4 32.556c0 .245.21.444.47.444h16.419C22.055 33 23 32.105 23 31v-7.2c0-.442-.378-.8-.844-.8h-8.07ZM35 12h-2a2 2 0 1 0 0 4h2v-4Zm-2-2a4 4 0 0 0 0 8h3.385c.34 0 .615-.276.615-.615v-6.77a.615.615 0 0 0-.615-.615H33Z"
        fill="#333"
      />
      <path
        d="m25.346 11 4.925.866-.347 1.97L25 12.97l.346-1.97Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 33H20v-2h12v2ZM30 28h-9v-2h9v2Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVespaMotorcycle);
export default ForwardRef;
