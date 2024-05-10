import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicines = (
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
      <path d="M37.084 15.735a1 1 0 1 0 .448-1.949l-6.616-1.52a1 1 0 1 0-.448 1.948l6.616 1.521Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM16.778 9.245c-.647-1.532-2.813-1.686-3.682-.263L6.292 20.115c-.785 1.284.092 2.924 1.623 3.033l11.866.846c1.53.11 2.644-1.388 2.06-2.77L16.778 9.245Zm-1.967.768a.099.099 0 0 0-.009.012L8.01 21.14l.002.002a.043.043 0 0 0 .01.004.139.139 0 0 0 .036.007l11.867.846c.02.002.032 0 .038 0a.056.056 0 0 0 .029-.015l-5.056-11.96-.004-.01a.13.13 0 0 0-.054-.014.132.132 0 0 0-.062.009l-.003.001v.001l-.002.002ZM35.385 36.36a6 6 0 0 0-5.071-10.877l-10.876 5.072a6 6 0 1 0 5.071 10.876l10.876-5.072Zm-15.102-3.992a4 4 0 1 0 3.381 7.25l4.466-2.083-3.38-7.25-4.467 2.082Zm9.66 4.322-3.381-7.25 4.597-2.144a4 4 0 1 1 3.38 7.25l-4.596 2.144Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMedicines);
export default ForwardRef;
