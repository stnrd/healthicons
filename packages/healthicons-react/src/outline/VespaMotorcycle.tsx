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
        d="M30.903 17.407a3.997 3.997 0 0 1-1.89-3.732L25 12.97l.346-1.97 4.338.762A3.996 3.996 0 0 1 33 10h3.385c.34 0 .615.275.615.615v6.77c0 .34-.276.615-.615.615H36v8.25a6.5 6.5 0 0 1 7.882 3.981c.312.84-.022 1.607-.595 2.064a5.501 5.501 0 0 1-10.733 1.892c-.541-.182-1.011-.59-1.189-1.187H19.979a5.5 5.5 0 0 1-10.956 0H4.47A.457.457 0 0 1 4 32.556c0-3.536 2.027-6.623 5.04-8.276A1 1 0 0 1 9 24v-3a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v3a1 1 0 0 1-1 1v1h6.24l1.663-8.593ZM31 14a2 2 0 0 1 2-2h2v4h-2a2 2 0 0 1-2-2Zm-2.148 14H23v3h5.272l.58-3Zm1.457 3h1.156A6.498 6.498 0 0 1 34 27.218V18h-1.175l-2.516 13Zm4.35 3.066a3.501 3.501 0 0 0 6.609-1.165l-6.61 1.165ZM11 21a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2H11v-2ZM6.174 31c.76-3.365 3.939-6 7.912-6H21v5.968a.177.177 0 0 1-.111.032H6.174Zm11.445 2.023c.126.004.239.008.34.013a3.5 3.5 0 0 1-6.918 0c.101-.005.214-.01.34-.013C12.117 33 13.11 33 14.5 33c1.389 0 2.383 0 3.12.023Zm22.752-4.21a4.5 4.5 0 0 0-7.076 3.463l8.642-1.524a4.5 4.5 0 0 0-1.566-1.94Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVespaMotorcycle);
export default ForwardRef;
