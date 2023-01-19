import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineDischarge = (
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
        d="M4 37a1 1 0 0 1 1-1h38a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M4.649 20.064a1 1 0 0 0-.585 1.287l2.89 7.709-1.924 7.698a1 1 0 1 0 1.94.484l2-8a1 1 0 0 0-.034-.593l-3-8a1 1 0 0 0-1.287-.585Zm38.702 0a1 1 0 0 1 .585 1.287l-2.89 7.709 1.924 7.698a1 1 0 1 1-1.94.484l-2-8a1 1 0 0 1 .034-.593l3-8a1 1 0 0 1 1.287-.585Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M16.962 29.725A1 1 0 0 0 16 29H8a1 1 0 1 0 0 2h7.246l1.792 6.275a1 1 0 1 0 1.924-.55l-2-7Zm14.076 0A1 1 0 0 1 32 29h8a1 1 0 1 1 0 2h-7.246l-1.792 6.275a1 1 0 0 1-1.924-.55l2-7ZM18 27H7v-2h11v2Zm12 0h11v-2H30v2Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M18 30a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1Zm12 0a1 1 0 0 0 1 1h9a1 1 0 1 0 0-2h-9a1 1 0 0 0-1 1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M15 25a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Zm18 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm-10-7v-8h2v8h-2Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M20 13h8v2h-8v-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineDischarge);
export default ForwardRef;
