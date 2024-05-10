import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSodiumFree = (
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
      <path d="M24 13a5 5 0 0 0-5 5v.143c0 .473.384.857.857.857h8.286a.857.857 0 0 0 .857-.857V18a5 5 0 0 0-5-5ZM27 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM29 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM31 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20Zm-7.999 13.416A17.933 17.933 0 0 1 24 42c-9.941 0-18-8.059-18-18 0-4.738 1.83-9.049 4.823-12.263l3.97 3.97a1 1 0 0 0 1.414-1.414l-3.942-3.942A17.93 17.93 0 0 1 24 6c9.941 0 18 8.059 18 18 0 4.61-1.734 8.817-4.584 12.001l-7.126-7.125-.475-6.109A3 3 0 0 0 26.825 20h-5.65a3 3 0 0 0-2.99 2.767l-.934 12A3 3 0 0 0 20.242 38h7.516a3 3 0 0 0 2.99-3.233l-.22-2.824 5.473 5.473ZM22 23a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1Zm5 1a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0v-9Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSodiumFree);
export default ForwardRef;
