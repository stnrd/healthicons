import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOldWoman = (
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
      <g clipPath="url(#old_woman_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM35 25a3 3 0 0 0-3 3v.343a1 1 0 1 0 2 0V28a1 1 0 1 1 2 0v15a1 1 0 1 0 2 0V28a3 3 0 0 0-3-3ZM22 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-10.081 4.001C13.21 15.741 15.049 15 17.255 15h7.32c4.973 0 7.944 1.722 9.62 3.759a8.443 8.443 0 0 1 1.494 2.695c.146.44.26.893.309 1.353v.015l.002.006v.006c.095 1.1-.755 2.067-1.899 2.16-1.134.09-2.132-.714-2.241-1.801v-.002a3.488 3.488 0 0 0-.13-.52 4.492 4.492 0 0 0-.795-1.43c-.614-.746-1.777-1.682-4.066-2.065.009.061.013.123.013.187 0 2.43 2.883 13.139 3.824 16.573a.994.994 0 0 1-.802 1.246c-6.004.963-9.8.995-15.806.006a.993.993 0 0 1-.795-1.252c.457-1.62 1.357-4.861 2.168-8.104-1.447-.284-2.673-.92-3.607-1.838A6.214 6.214 0 0 1 10 21.481 6.336 6.336 0 0 1 11.92 17Zm2.958 2.81c.427-.416 1.137-.79 2.28-.81-.026.115-.04.236-.04.362 0 .906-.294 2.588-.725 4.567-.754-.13-1.246-.428-1.56-.737a2.294 2.294 0 0 1-.675-1.674 2.413 2.413 0 0 1 .72-1.708ZM16.5 42.497v-3.482c1.364.209 2.63.343 3.864.405l-.914 3.46a1.5 1.5 0 0 1-2.95-.383Zm8.05.383-.916-3.467a39.741 39.741 0 0 0 3.866-.412v3.496a1.5 1.5 0 0 1-2.95.383Z"
        />
      </g>
      <defs>
        <clipPath id="old_woman_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOldWoman);
export default ForwardRef;
