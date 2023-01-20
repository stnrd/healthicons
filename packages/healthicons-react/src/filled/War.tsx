import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWar = (
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
        d="M9.007 24c-1.104 0-2.022-.9-1.871-1.995C8.07 15.218 13.697 10 20.5 10c4.997 0 9.36 2.815 11.694 7H43a1 1 0 1 1 0 2h-9.886c.352.956.607 1.962.75 3.005.15 1.095-.767 1.995-1.872 1.995H9.007Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.166 29.949C3.478 28.006 5.013 26 7.187 26h33.626c2.174 0 3.709 2.006 3.021 3.949l-1.397 3.948C41.57 36.347 39.136 38 36.394 38H11.606c-2.742 0-5.176-1.653-6.043-4.103L4.166 29.95ZM16 32a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm8 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM37 32a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgWar);
export default ForwardRef;
