import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCrossCountryMotorcycle = (
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
        d="M28 10a1 1 0 0 1 .907.58L30.492 14h5.133a1 1 0 0 1 .753.341l4.375 5A1 1 0 0 1 40 21h-6.264l1.97 4.25a6.5 6.5 0 1 1-1.814.842l-1.493-3.22-3.235 2.875a.993.993 0 0 1-.164.119V30a3 3 0 0 1-3 3h-4a2.986 2.986 0 0 1-1.659-.5h-3.417A6.502 6.502 0 0 1 4 31.5a6.5 6.5 0 0 1 12.924-1h2.117A3.018 3.018 0 0 1 19 30v-3c0-.566.157-1.095.429-1.546l-.35-.492-14.182-1.467A1 1 0 0 1 4 22.5V19a1 1 0 0 1 1-1h10.6a1.06 1.06 0 0 1 .08-.031l4.42-1.495A9 9 0 0 1 22.982 16H29v-.464L27.361 12H23v-2h5Zm3.42 6 1.39 3h4.986l-2.625-3H31.42ZM21 27a1 1 0 0 1 1-1h5v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3Zm10.521-6.023L28.12 24h-7.271l-3.254-4.567 3.145-1.064A7 7 0 0 1 22.983 18h7.159l1.38 2.977ZM17.532 22.79 15.544 20H6v1.598l11.532 1.193Zm17.216 5.148a4.5 4.5 0 1 0 1.814-.841l1.845 3.982a1 1 0 0 1-1.814.84l-1.845-3.98ZM10.5 36a4.5 4.5 0 1 1 4.389-5.5H10.5a1 1 0 1 0 0 2h4.389A4.502 4.502 0 0 1 10.5 36Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCrossCountryMotorcycle);
export default ForwardRef;
