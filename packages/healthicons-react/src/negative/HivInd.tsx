import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHivInd = (
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
      <g clipPath="url(#hiv_ind_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm36 19a2.008 2.008 0 0 0-2-2c-1.111.009-2 .906-2 2a1 1 0 1 1-2 0c0-2.193 1.768-3.966 3.952-4h.096A4.008 4.008 0 0 1 38 19a4.004 4.004 0 0 1-3.016 3.875V25a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1C35.102 21 36 20.1 36 19ZM31.616 6.418l.01.015 2.332 3.022.009.011.813 1.084a9.334 9.334 0 0 1 1.481 2.895A6.008 6.008 0 0 0 34.017 13h-.032l-.077.001C30.649 13.059 28 15.708 28 19a3 3 0 0 0 2.984 3v3c0 .14.01.277.028.411l-4.44-5.612-1.133-1.464 3.335-4.308c-.598-.325-1.278-.518-1.94-.518h-5.248c-.72 0-1.42.178-2.012.518l5.423 7.004 4.792 6.058.005.007 7.425 9.556a2 2 0 0 1-.24 2.713l-4.067 3.662A2 2 0 0 1 30 42.775l-6.576-8.385-.001-.001-4.703-5.97-5.067-6.424-.006-.007-.006-.008a9.414 9.414 0 0 1-.002-11.339l.002-.002.811-1.082.008-.01 2.329-3.019.108-.141C18.007 4.85 19.852 4 21.677 4h5.247c.967 0 1.866.217 2.667.675.685.39 1.462.93 2.037 1.734l-.012.01ZM30.032 7.64a4.034 4.034 0 0 1-.022 4.792c-.934-.57-2.045-.923-3.177-.923h-5.247c-1.123 0-2.267.3-3.241.924a4.206 4.206 0 0 1-.736-2.366c0-.815.257-1.632.774-2.331l.104-.135.011-.014.01-.015C19.21 6.59 20.434 6 21.677 6h5.248c.66 0 1.21.145 1.675.411.551.315 1.02.66 1.348 1.088l-.015.011.1.13ZM16.756 29.966l-.189-.238-5.73 7.332a2 2 0 0 0 .368 2.826l4.379 3.317a2 2 0 0 0 2.781-.36l4.256-5.426-1.16-1.48-.005-.005-4.7-5.964v-.002ZM35 28a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="hiv_ind_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHivInd);
export default ForwardRef;
