import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVaginaAlt = (
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
      <path d="M35.434 6h1.86c3.127 7.848 4.714 14.106 4.706 19.852-.008 5.614-1.538 10.66-4.504 16.148h-1.982c3.192-5.658 4.764-10.635 4.772-16.151C40.293 20.288 38.71 14.09 35.434 6ZM10.705 6h1.86c-3.277 8.09-4.858 14.288-4.85 19.849.007 5.516 1.579 10.493 4.771 16.151h-1.982C7.538 36.511 6.008 31.466 6 25.852 5.992 20.105 7.579 13.848 10.705 6ZM23.143 31.546V42h1.714V31.546l7.022-7.373-1.212-1.273-6.667 7-6.667-7-1.212 1.273 7.022 7.373Z" />
      <path d="M23 26v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-2 0Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVaginaAlt);
export default ForwardRef;
