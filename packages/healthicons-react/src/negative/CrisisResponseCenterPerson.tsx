import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCrisisResponseCenterPerson = (
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
      <g clipPath="url(#crisis-response-center-person_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM23 6H6v12h17V6Zm19 0H25v12h17V6ZM6 32V20h17v4.083A6.002 6.002 0 0 0 18.341 32H6Zm24-2a5.99 5.99 0 0 1-.341 2H42V20H25v4.083c2.838.476 5 2.944 5 5.917ZM14.5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1-7a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0V9ZM32 25h7a1 1 0 1 0 0-2h-7a1 1 0 1 0 0 2ZM9 25v-2h2v2H9Zm0 2v2h2v-2H9Zm4-2v-2h2v2h-2Zm0 2v2h2v-2h-2Zm4-2v-2h2v2h-2Zm15 3a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2h-6a1 1 0 0 0-1 1Zm8.207-18.793L34.5 14.914l-2.5-2.5-2.293 2.293-1.414-1.414L32 9.586l2.5 2.5 4.293-4.293 1.414 1.414ZM24 36c-2.336 0-7 .71-7 2.121V41h14v-2.879C31 36.711 26.336 36 24 36Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        />
      </g>
      <defs>
        <clipPath id="crisis-response-center-person_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCrisisResponseCenterPerson);
export default ForwardRef;
