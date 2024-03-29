import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgStethoscope = (
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
        d="M12 10a2 2 0 1 0-1.732-3H10a3 3 0 0 0-3 3v9h2v-9a1 1 0 0 1 1-1h.268A2 2 0 0 0 12 10Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.16 19H7c-.552 0-1.005.449-.955.999A11 11 0 0 0 14 29.583V32c0 1.306.835 2.418 2 2.83a7.25 7.25 0 0 0 14.5-.08v-4a3.75 3.75 0 1 1 7.5 0v2.42a3.001 3.001 0 1 0 2 0v-2.42a5.75 5.75 0 0 0-11.5 0v4a5.25 5.25 0 0 1-10.5.08A3.001 3.001 0 0 0 20 32v-2.417a11 11 0 0 0 7.955-9.584c.05-.55-.403-.999-.955-.999v-9a3 3 0 0 0-3-3h-.268A2 2 0 0 0 20 8a2 2 0 0 0 3.732 1H24a1 1 0 0 1 1 1v9h-1.16c-.552 0-.991.45-1.085.995a5.84 5.84 0 0 1-11.51 0c-.094-.544-.533-.995-1.085-.995Zm14.42 2h1.195a9 9 0 0 1-17.55 0H9.42a7.84 7.84 0 0 0 15.16 0ZM39 35a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-21-5v2a1 1 0 1 1-2 0v-2h2Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgStethoscope);
export default ForwardRef;
