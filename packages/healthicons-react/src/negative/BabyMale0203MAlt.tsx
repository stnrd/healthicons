import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBabyMale0203MAlt = (
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
      <g clipPath="url(#baby_male_0203m_alt_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0Zm-9 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-27 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 0 0 4.89-9.476L20 9.414V11a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h1.586l-3.11 3.11A6 6 0 1 0 12 22Zm12 12.041V16.447c.99.407 2.012.9 3.047 1.466.191.11.38.215.568.317a40.935 40.935 0 0 1 6.371 4.522c3.579 3.091 6.57 6.764 8.014 10.434v.855C42 38.021 39.187 42 33 42c-6.188 0-9-4.548-9-7.959ZM35.293 21.24a43.267 43.267 0 0 0-1.26-1.048C36.49 20.186 38.957 19.178 42 17v11.83c-1.738-2.752-4.107-5.346-6.707-7.591Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="baby_male_0203m_alt_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBabyMale0203MAlt);
export default ForwardRef;
