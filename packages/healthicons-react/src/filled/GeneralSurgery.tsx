import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGeneralSurgery = (
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
        d="m38.815 6-9.126 9.126 2.622 1.748 4.482-4.481a1 1 0 0 1 1.414 1.414l-5.5 5.5-.007-.007-2.114 2.114A2 2 0 0 0 30 22.828v.456a2 2 0 0 1-.6 1.43l-3.65 3.573A6 6 0 0 1 21.551 30H12l15.7-15.7-.007-.007L35.986 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-.185ZM16.828 28h4.724a4 4 0 0 0 2.798-1.142L28 23.284v-.456A4 4 0 0 1 29.172 20l1.689-1.69-2.606-1.736L16.828 28ZM20 34H10v2h10v-2Zm8 0v2h4v-2h-4Zm-6 0h4v2h-4v-2Zm16 0h-4v2h4v-2ZM26.707 22.707a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414l3-3Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGeneralSurgery);
export default ForwardRef;
