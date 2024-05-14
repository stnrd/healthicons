import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCarbohydrates = (
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
      <g clipPath="url(#carbohydrates_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM36 11a1 1 0 1 0-2 0v17.528a4 4 0 0 0 2.211 3.578L38 33v4a1 1 0 1 0 2 0v-4l1.789-.894A4 4 0 0 0 44 28.528V11a1 1 0 1 0-2 0v1l-1.789.894a3.985 3.985 0 0 0-.211.114V11a1 1 0 1 0-2 0v2.008a3.985 3.985 0 0 0-.211-.114L36 12v-1Zm2 17.472v2.292l-.894-.447A2 2 0 0 1 36 28.527v-2.29l.894.446A2 2 0 0 1 38 28.473Zm2.894 1.845-.894.447v-2.292a2 2 0 0 1 1.106-1.789l.894-.447v2.292a2 2 0 0 1-1.106 1.789ZM42 22.527v-2.29l-.894.446A2 2 0 0 0 40 22.473v2.29l.894-.446A2 2 0 0 0 42 22.527Zm-4 2.237v-2.292a2 2 0 0 0-1.106-1.789L36 20.236v2.292a2 2 0 0 0 1.106 1.789l.894.447Zm0-8.292v2.292l-.894-.447A2 2 0 0 1 36 16.527v-2.29l.894.446A2 2 0 0 1 38 16.473Zm2.894 1.845-.894.447v-2.292a2 2 0 0 1 1.106-1.789l.894-.447v2.292a2 2 0 0 1-1.106 1.789ZM21.787 20.01a11.7 11.7 0 0 1 2.486.371c-.565.657-1.013 1.42-1.352 2.178C22.325 23.887 22 25.341 22 26.5a1 1 0 1 0 2 0c0-.834.247-2.01.746-3.123.417-.93.967-1.723 1.598-2.237A11.701 11.701 0 0 1 33 31.7a6.3 6.3 0 0 1-6.3 6.3H10.3A6.3 6.3 0 0 1 4 31.7c0-5.036 3.182-9.33 7.645-10.978-.071.11-.14.22-.206.331C10.504 22.636 10 24.56 10 26a1 1 0 1 0 2 0c0-1.06.396-2.635 1.16-3.928C13.937 20.76 14.92 20 16 20h2.174a8.306 8.306 0 0 0-.735 1.053C16.504 22.636 16 24.56 16 26a1 1 0 1 0 2 0c0-1.06.396-2.635 1.16-3.928.725-1.225 1.63-1.969 2.627-2.062Z"
        />
      </g>
      <defs>
        <clipPath id="carbohydrates_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCarbohydrates);
export default ForwardRef;
