import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg8 = (
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
      <g clipPath="url(#8_svg__a)" fill="#000">
        <path d="M30 18c0-2.2-1.795-4-4.032-4h-3.936C19.795 14 18 15.8 18 18s1.795 4 4.032 4h3.936C28.205 22 30 20.2 30 18ZM25.968 26h-3.936C19.795 26 18 27.8 18 30s1.795 4 4.032 4h3.936C28.205 34 30 32.2 30 30s-1.795-4-4.032-4Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM14 18a7.963 7.963 0 0 0 2.72 6A7.963 7.963 0 0 0 14 30c0 4.428 3.606 8 8.032 8h3.936C30.394 38 34 34.428 34 30a7.963 7.963 0 0 0-2.72-6A7.963 7.963 0 0 0 34 18c0-4.428-3.606-8-8.032-8h-3.936C17.606 10 14 13.572 14 18Z"
        />
      </g>
      <defs>
        <clipPath id="8_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(Svg8);
export default ForwardRef;
