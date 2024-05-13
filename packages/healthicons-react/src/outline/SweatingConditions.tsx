import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSweatingConditions = (
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
        d="M14.7 17.658C15.867 16.098 17.65 15 20 15h8c2.349 0 4.133 1.098 5.3 2.658C34.449 19.191 35 21.16 35 23v5a3 3 0 0 1-4 2.83v10.333a2.837 2.837 0 0 1-5.66.29L24.36 33h-.72l-.98 8.454a2.837 2.837 0 0 1-5.66-.291V30.829A3 3 0 0 1 13 28v-4.999c0-1.84.552-3.809 1.7-5.342ZM20 17h8c1.651 0 2.867.745 3.7 1.857.852 1.138 1.3 2.67 1.3 4.143v5a1 1 0 1 1-2 0v-6.5h-2v19.663a.837.837 0 0 1-1.67.083l-.001-.008-1.086-9.353A1 1 0 0 0 25.25 31h-2.5a1 1 0 0 0-.993.885l-1.086 9.353v.008A.837.837 0 0 1 19 41.163V26.5h-2V28a1 1 0 1 1-2 0v-5c0-1.474.448-3.005 1.3-4.143C17.133 17.745 18.35 17 20 17ZM26.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm3 .5c.828 0 1.5-.769 1.5-1.717C33 5.78 31.5 4 31.5 4S30 5.78 30 7.283C30 8.23 30.672 9 31.5 9Z"
      />
      <path d="M38 14.94c0 1.137-.895 2.06-2 2.06s-2-.923-2-2.06c0-1.804 2-3.94 2-3.94s2 2.136 2 3.94Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.779 12.646C35.34 11.704 36 11 36 11s.66.704 1.221 1.646c.417.698.779 1.526.779 2.293C38 16.077 37.105 17 36 17s-2-.923-2-2.06c0-.768.362-1.596.779-2.294Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSweatingConditions);
export default ForwardRef;
