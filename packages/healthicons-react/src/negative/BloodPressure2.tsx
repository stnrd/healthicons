import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodPressure2 = (
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
      <g clipPath="url(#blood_pressure_2_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm6 13c0 .04.001.082.003.122H6V32.84c0 1.985 1.665 3.253 3.43 3.985 1.634.678 3.7 1.057 5.777 1.151.332 1.005 1.039 1.806 1.93 2.401 1.225.818 2.844 1.292 4.54 1.498 3.379.411 7.459-.197 10.22-1.814 2.83-1.657 3.752-4.982 4.066-8.978.21-2.678.157-5.888.098-9.457a435.965 435.965 0 0 1-.056-4.158C37.942 16.365 42 13.637 42 10.138 42 7.99 40.43 6 38.281 6 36.79 6 35.683 6.893 35 8.16 34.317 6.893 33.21 6 31.719 6 29.569 6 28 7.99 28 10.138c0 3.656 4.073 6.31 6.005 7.362.01 1.5.035 2.931.057 4.295.059 3.497.11 6.547-.093 9.131-.31 3.95-1.193 6.302-3.082 7.409-2.3 1.347-5.917 1.926-8.969 1.555-1.519-.185-2.799-.594-3.67-1.176a3.255 3.255 0 0 1-.813-.745c1.85-.098 3.66-.428 5.13-1.026 1.777-.723 3.387-1.999 3.434-4.014A7.002 7.002 0 0 0 26 19.071v-5.949h-.003C26 13.082 26 13.041 26 13c0-2.761-4.477-5-10-5S6 10.239 6 13Zm18 6.07V16c-1.825 1.215-4.729 2-8 2-.306 0-.61-.007-.91-.02v17.988c.306.017.613.027.921.03 2.168.026 4.275-.287 5.8-.907 1.513-.617 2.142-1.384 2.186-2.162A7.001 7.001 0 0 1 24 19.07Zm-1.823-4.323C23.774 13.948 24 13.215 24 13c0-.215-.226-.948-1.823-1.747C20.699 10.515 18.518 10 16 10s-4.7.515-6.177 1.253C8.226 12.052 8 12.785 8 13c0 .215.226.948 1.823 1.747C11.301 15.485 13.482 16 16 16s4.7-.515 6.177-1.253ZM23.5 26.5l1.5-5 1.5 5-1.5 2-1.5-2Z"
        />
      </g>
      <defs>
        <clipPath id="blood_pressure_2_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBloodPressure2);
export default ForwardRef;
