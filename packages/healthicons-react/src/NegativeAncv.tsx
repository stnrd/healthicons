import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeAncv = (
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
        d="M0 0h48v48H0V0Zm24 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-7.282 14.713L14.6 21.019c.222-.36.474-.752.74-1.142.16-.236.322-.463.48-.676.41 1.241.698 2.396.898 3.512Zm.405 4.783a1.988 1.988 0 0 1-1.372-.434l-5-4a2 2 0 0 1-.507-2.52L12 21.5a870.19 870.19 0 0 1-1.756-.958l.002-.002.002-.005.008-.014.029-.053.105-.188a39.676 39.676 0 0 1 1.645-2.657c.492-.721 1.079-1.513 1.682-2.145.3-.314.655-.643 1.05-.906.36-.24.97-.572 1.733-.572h2a2 2 0 0 1 1.176.383L18.5 16a388.912 388.912 0 0 1 1.177-1.617l.003.002.006.004.017.013.058.043.202.154c.17.131.411.322.704.564a32.9 32.9 0 0 1 2.247 2.048c1.7 1.7 3.795 4.177 4.943 7.046.665 1.662.681 3.22.148 4.593-.513 1.319-1.452 2.255-2.329 2.892-.88.641-1.807 1.06-2.484 1.316-.282.107-.53.189-.73.25L21 41v1a2 2 0 1 1-4 0v-1c-.164-3.775-.059-6.742.033-9.326.053-1.493.101-2.859.09-4.178ZM32 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm1-8a1 1 0 1 0-2 0v2.303l.168.252 1 1.5a1 1 0 0 0 1.664-1.11L33 11.697V10Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeAncv);
export default ForwardRef;
