import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLetrina = (
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
      <g clipPath="url(#letrina_svg__a)" fill="#000">
        <path d="M21 11h6l-6.518.033A4.03 4.03 0 0 1 21 11Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27 13a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V15a2 2 0 0 1 2-2h6Zm-3 7c1.035 0 1.875-.895 1.875-2s-.84-2-1.875-2c-1.035 0-1.875.895-1.875 2s.84 2 1.875 2Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 6h20a2 2 0 0 1 2 2v5.4l-2.89-3.084-1.46 1.368 4.35 4.64v2.075l-2.89-3.083-1.46 1.368 4.35 4.64v2.075l-2.89-3.083-1.46 1.368 4.35 4.64v2.075l-2.89-3.083-1.46 1.368 4.35 4.64v2.075l-2.89-3.083-1.46 1.368 4.35 4.64V40a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2v-3.669l4.357-4.647-1.46-1.368L12 33.407v-2.076l4.357-4.647-1.46-1.368L12 28.407v-2.076l4.357-4.647-1.46-1.368L12 23.407v-2.076l4.357-4.647-1.46-1.368L12 18.407v-2.076l4.357-4.647-1.46-1.368L12 13.407V8a2 2 0 0 1 2-2Zm13 2h-6a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V12a4.002 4.002 0 0 0-4-4Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM10 8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V8Z"
        />
      </g>
      <defs>
        <clipPath id="letrina_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgLetrina);
export default ForwardRef;
