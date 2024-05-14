import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgExerciseYoga = (
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
      <g clipPath="url(#exercise-yoga_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM29 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-2.838 19.414L25 28.252V24.51c.148.086.288.192.414.318l1.879 1.88A1 1 0 0 0 28 27h3a1 1 0 0 0 .894-1.447l-1-2a1 1 0 1 0-1.788.894l.276.553h-.968l-1.586-1.586a4 4 0 0 0-5.656 0L19.586 25h-.968l.276-.553a1 1 0 1 0-1.788-.894l-1 2A1 1 0 0 0 17 27h3a1 1 0 0 0 .707-.293l1.879-1.879c.127-.126.266-.232.414-.318v3.742l-1.162 1.162a2 2 0 0 1-1.414.586h-6.038a2 2 0 0 1-1.864-2.725l3.004-7.725A4 4 0 0 1 19.254 17h9.492a4 4 0 0 1 3.728 2.55l3.005 7.725A2 2 0 0 1 33.613 30h-6.038a2 2 0 0 1-1.414-.586ZM31 43a1 1 0 0 1-1 1H12.856a2.856 2.856 0 0 1-1.507-5.282l5.284-3.282a3 3 0 0 0 1.417-2.548V32h2.374a4 4 0 0 0 2.828-1.172l.748-.747.747.747A4 4 0 0 0 27.576 32H30v.892a3 3 0 0 0 1.41 2.543l5.246 3.279A2.86 2.86 0 0 1 35.14 44h-2.31c.11-.313.17-.65.17-1v-.25a3 3 0 0 0-2.602-2.973l-13.215-1.768a1 1 0 0 0-.266 1.982l13.216 1.768a1 1 0 0 1 .867.991V43Z"
        />
      </g>
      <defs>
        <clipPath id="exercise-yoga_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgExerciseYoga);
export default ForwardRef;
