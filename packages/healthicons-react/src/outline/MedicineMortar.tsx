import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicineMortar = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.014 8.997a1 1 0 0 0-1.34.323L28.774 20h3.886l4.913-9.584a1 1 0 0 0-.39-1.322l-.17-.097ZM34.908 20l4.444-8.671a3 3 0 0 0-1.17-3.967l-.168-.097a3 3 0 0 0-4.02.97L26.394 20H6v2h1v3c0 5.784 3.777 10.686 9 12.373V41a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3.627c5.222-1.687 9-6.589 9-12.373v-3h1v-2h-7.092ZM39 22H9v3c0 6.075 4.925 11 11 11h8c6.075 0 11-4.925 11-11v-3ZM20 38h-2v2h12v-2H20Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMedicineMortar);
export default ForwardRef;
