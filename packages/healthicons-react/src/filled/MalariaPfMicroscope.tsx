import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMalariaPfMicroscope = (
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
      <path d="M20.003 14.752a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16.523 15.138a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM18.59 17.158a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM25.558 29.199a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM28.877 28.104a.453.453 0 1 1-.906 0 .453.453 0 0 1 .906 0ZM27.093 14.16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM30.493 14.86a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0ZM15.059 30.648a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15.688 27.435a.453.453 0 1 1-.907 0 .453.453 0 0 1 .906 0ZM17.732 30.162a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20Zm-26.609-3.539c-3.071 2.374-6.518 3.06-7.698 1.533-1.18-1.527.353-4.69 3.425-7.063 3.071-2.374 6.518-3.06 7.699-1.533 1.18 1.527-.354 4.69-3.426 7.063Zm18.16 13.626c.987-1.634-.877-4.567-4.164-6.552-3.287-1.984-6.75-2.268-7.737-.634-.987 1.634.878 4.567 4.164 6.552 3.287 1.984 6.751 2.268 7.738.634ZM32.407 15.69c1.645 3.518 1.562 7.034-.188 7.852-1.749.818-4.5-1.37-6.147-4.89-1.646-3.518-1.562-7.033.187-7.851 1.75-.819 4.502 1.37 6.148 4.889ZM20.603 38.65c1.765-.887 1.749-4.484-.035-8.033-1.784-3.549-4.661-5.707-6.426-4.82-1.764.887-1.748 4.483.036 8.033 1.784 3.548 4.66 5.707 6.425 4.82Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMalariaPfMicroscope);
export default ForwardRef;
