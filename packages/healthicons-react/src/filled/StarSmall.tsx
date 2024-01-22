import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgStarSmall = (
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
        d="m23.06 30.426.464.886-.464-.886-4.904 2.569a.07.07 0 0 1-.013.005.04.04 0 0 1-.014-.007.04.04 0 0 1-.01-.008l.002-.01.937-5.44a2.017 2.017 0 0 0-.584-1.79l-3.967-3.853a.09.09 0 0 1-.007-.008.04.04 0 0 1 .008-.021h.002a.07.07 0 0 1 .01-.003l5.484-.794a2.023 2.023 0 0 0 1.523-1.103l-.896-.444.896.444 2.452-4.951a.076.076 0 0 1 .005-.008v-.001A.04.04 0 0 1 24 15a.04.04 0 0 1 .016.003l.005.009 2.452 4.95.896-.443-.896.444a2.023 2.023 0 0 0 1.523 1.103l5.484.794a.07.07 0 0 1 .01.002l.002.001a.04.04 0 0 1 .008.021.07.07 0 0 1-.007.008l-3.968 3.853a2.017 2.017 0 0 0-.582 1.79l.936 5.44v.006l.001.004a.04.04 0 0 1-.009.008.04.04 0 0 1-.014.007h-.003a.07.07 0 0 1-.01-.005l-4.904-2.57-.464.886.464-.885a2.026 2.026 0 0 0-1.88 0Z"
        fill="#000"
        stroke="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgStarSmall);
export default ForwardRef;
