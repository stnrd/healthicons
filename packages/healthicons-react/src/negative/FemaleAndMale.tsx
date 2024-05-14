import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFemaleAndMale = (
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
      <g clipPath="url(#female-and-male_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm33.5 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm5.149 7c.05.352.093.729.132 1.122.218 2.245.219 4.679.219 5.378a1.5 1.5 0 0 0 3 0v-.007c0-.707 0-3.264-.233-5.662-.116-1.19-.297-2.43-.597-3.406-.148-.479-.355-1.002-.671-1.436-.317-.434-.909-.989-1.81-.989H28.31c-.901 0-1.493.555-1.81.99-.316.433-.523.956-.67 1.435-.3.976-.482 2.217-.598 3.406C25 23.229 25 25.786 25 26.493v.007a1.5 1.5 0 0 0 3 0c0-.7 0-3.133.22-5.378.038-.393.082-.77.131-1.122H29v20.5a1.5 1.5 0 0 0 2.995.12l.85-10.62h1.31l.85 10.62A1.5 1.5 0 0 0 38 40.5V20h.649ZM14.5 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm4 2a1.5 1.5 0 0 1 .366.046c1.114.28 1.863.959 2.333 1.886.413.81.614 1.82.78 2.822l1 6a1.5 1.5 0 1 1-2.959.493l-1-6a14.708 14.708 0 0 0-.265-1.309L18.5 22c0 1.606 1.703 10.36 2.298 13.37a.99.99 0 0 1-.83 1.173c-4.12.599-6.816.618-10.938.004a.989.989 0 0 1-.823-1.177C8.806 32.408 10.5 23.87 10.5 22l-.255-3.061a14.71 14.71 0 0 0-.265 1.309l-1 6a1.5 1.5 0 1 1-2.96-.493l1-6c.167-1.003.368-2.011.78-2.823.472-.926 1.22-1.605 2.333-1.885.12-.03.242-.046.365-.046H18.5Zm-7.869 23.111.377 3.013a1 1 0 0 0 1.962.119l.72-2.88c-.992-.037-2-.121-3.059-.252Zm4.685.274.714 2.857a1 1 0 0 0 1.962-.118l.364-2.913a34.726 34.726 0 0 1-3.04.174Z"
        />
      </g>
      <defs>
        <clipPath id="female-and-male_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFemaleAndMale);
export default ForwardRef;
