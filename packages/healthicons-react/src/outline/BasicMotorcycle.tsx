import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBasicMotorcycle = (
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
        d="M29.416 10.598A1 1 0 0 0 28.5 10H23v2h4.847l1.756 4h-1.871a8.983 8.983 0 0 0-8.15 5.206l-3.03-2.925a1 1 0 0 0-.695-.281H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h9.17A3 3 0 0 0 19 28h1.412l1.389 2.5h-4.877A6.502 6.502 0 0 0 4 31.5a6.5 6.5 0 0 0 12.924 1H26.5a1 1 0 0 0 .776-.37l6.108-7.517.618 1.407a6.5 6.5 0 1 0 1.831-.805l-1.738-3.958 6.119.941-1.43-8.571-6.877 2.645-2.491-5.674ZM22.7 28l1.388 2.5h1.936l5.281-6.5H28v1a3 3 0 0 1-3 3h-2.3Zm2.3-2a1 1 0 0 0 1-1v-1h-7a1 1 0 1 0 0 2h6Zm2.732-8a6.983 6.983 0 0 0-6.314 4h10.82l-1.757-4h-2.75Zm4.98.105.43.982 4.644.715-.57-3.429-4.504 1.732ZM10.5 27a4.502 4.502 0 0 1 4.389 3.5H10.5a1 1 0 1 0 0 2h4.389A4.502 4.502 0 0 1 6 31.5a4.5 4.5 0 0 1 4.5-4.5ZM33 31.5c0-1.481.716-2.796 1.82-3.616l1.764 4.018a1 1 0 0 0 1.832-.804l-1.764-4.018A4.5 4.5 0 1 1 33 31.5ZM15.453 20l2.072 2H8v-2h7.453Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBasicMotorcycle);
export default ForwardRef;
