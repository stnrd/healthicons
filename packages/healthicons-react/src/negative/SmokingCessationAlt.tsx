import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSmokingCessationAlt = (
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
      <g clipPath="url(#smoking-cessation-alt_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM36.001 37.416A17.933 17.933 0 0 1 24 42c-9.941 0-18-8.059-18-18 0-4.738 1.83-9.049 4.823-12.263L22.086 23H12a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1.086L12.265 10.35A17.93 17.93 0 0 1 24 6c9.941 0 18 8.059 18 18 0 4.61-1.734 8.817-4.584 12.001l-5.209-5.208a1 1 0 0 0-1.414 1.414L36 37.416ZM44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20Zm-14-1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm-4-7.778c0-.675.547-1.222 1.222-1.222a1 1 0 1 0 0-2A3.222 3.222 0 0 0 24 15.222v.642a3.864 3.864 0 0 0 3.864 3.863h.863c.15 0 .273.122.273.273a1 1 0 1 0 2 0 2.273 2.273 0 0 0-2.273-2.273h-.863A1.864 1.864 0 0 1 26 15.864v-.642Zm2.852.161a1 1 0 0 0 .995.898c1.19 0 2.153.964 2.153 2.152v1.892a1 1 0 0 0 2 0v-1.892a4.144 4.144 0 0 0-1.466-3.166 3.138 3.138 0 0 0 .836-2.136v-1.003a3.522 3.522 0 0 0-3.523-3.522 1 1 0 1 0 0 2c.841 0 1.522.681 1.522 1.522v1.003a1.15 1.15 0 0 1-1.15 1.15h-.372a1 1 0 0 0-.995 1.102ZM33 23a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z"
        />
      </g>
      <defs>
        <clipPath id="smoking-cessation-alt_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSmokingCessationAlt);
export default ForwardRef;
