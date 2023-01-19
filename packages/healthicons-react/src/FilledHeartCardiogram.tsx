import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledHeartCardiogram = (
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
        d="M9 19.035C9 13.309 12.812 8 18.031 8c3.622 0 6.31 2.382 7.969 5.761C27.659 10.382 30.347 8 33.969 8 39.189 8 43 13.31 43 19.035 43 31.288 26 40 26 40s-11.451-5.513-15.557-14.556h10.142l1.612-2.865 1.883 6.59 4.41-5.669H34v-2h-6.49l-2.59 3.33-2.117-7.409-3.388 6.023H9.68c.212.685.469 1.352.763 2H6v-2h3.68a14.817 14.817 0 0 1-.68-4.41Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledHeartCardiogram);
export default ForwardRef;
