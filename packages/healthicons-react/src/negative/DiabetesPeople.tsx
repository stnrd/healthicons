import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDiabetesPeople = (
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
      <g clipPath="url(#diabetes_people_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm24.153 17.783h17.719a2.128 2.128 0 0 1 0 4.256h-.003c.085-.167.132-.348.132-.537 0-.829-.895-1.5-2-1.5-1.104 0-2 .671-2 1.5 0 .19.047.37.133.537H25.11v1.064H32a2 2 0 0 1 2 2v.257a2 2 0 0 1-2 2h-6.889v1.064h5.778a2 2 0 0 1 2 2v.256a2 2 0 0 1-2 2h-8v1.064H27a2 2 0 0 1 2 2V36a2 2 0 0 1-2 2H15.456C9.13 38 4 32.87 4 26.544c0-4.655 2.816-8.847 7.125-10.606l12.887-5.263a2.308 2.308 0 0 1 1.832 4.237l-2.107.962c-.977.446-.659 1.91.416 1.91Zm15.85 14.214c1.68 0 3-1.257 3-2.857 0-1.485-3-5.143-3-5.143s-3 3.543-3 5.143c0 1.6 1.32 2.857 3 2.857Z"
        />
      </g>
      <defs>
        <clipPath id="diabetes_people_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDiabetesPeople);
export default ForwardRef;
