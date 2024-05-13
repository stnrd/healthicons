import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHeartbeat = (
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
      <g clipPath="url(#heartbeat_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm27.92 10.002a1.5 1.5 0 0 0-1.378 1.147l-4.824 20.042-5.302-15.185a1.5 1.5 0 0 0-2.812-.054l-2.627 6.694H4v3h8a1.5 1.5 0 0 0 1.396-.952l1.522-3.878 5.649 16.179a1.5 1.5 0 0 0 2.874-.144l4.838-20.1 2.817 7.899a1.5 1.5 0 0 0 1.412.996h1.393c1.267.037 2.122.262 3.032.921.277.332.608.618.978.845L38 27.5v-.035a4 4 0 1 0 0-6.93V20.5l-.088.088a4.02 4.02 0 0 0-1.028.904c-.982.736-1.909 1.006-3.37 1.008l-4.101-11.504a1.5 1.5 0 0 0-1.493-.994Z"
        />
      </g>
      <defs>
        <clipPath id="heartbeat_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHeartbeat);
export default ForwardRef;