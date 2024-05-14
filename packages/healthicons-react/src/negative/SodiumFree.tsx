import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSodiumFree = (
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
      <g clipPath="url(#sodium-free_svg__a)" fill="#000">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.416 36.001A17.933 17.933 0 0 0 42 24c0-9.941-8.059-18-18-18a17.93 17.93 0 0 0-11.735 4.35l3.942 3.943a1 1 0 0 1-1.414 1.414l-3.97-3.97A17.937 17.937 0 0 0 6 24c0 9.941 8.059 18 18 18 4.61 0 8.817-1.734 12.001-4.584l-5.472-5.473.22 2.824A3 3 0 0 1 27.758 38h-7.516a3 3 0 0 1-2.99-3.233l.933-12A3 3 0 0 1 21.175 20h5.65a3 3 0 0 1 2.99 2.767l.475 6.11L37.416 36ZM24 13a5 5 0 0 0-5 5v.143c0 .473.384.857.857.857h8.286a.857.857 0 0 0 .857-.857V18a5 5 0 0 0-5-5Zm3-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        />
        <path d="M22 23a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1ZM27 24a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0v-9Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
        />
      </g>
      <defs>
        <clipPath id="sodium-free_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSodiumFree);
export default ForwardRef;
