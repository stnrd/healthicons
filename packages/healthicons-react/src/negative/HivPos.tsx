import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHivPos = (
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
      <g clipPath="url(#hiv_pos_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm26.924 4c.967 0 1.866.217 2.667.675.685.39 1.462.93 2.037 1.734l-.012.01.01.014 2.332 3.022.009.011.813 1.084a9.368 9.368 0 0 1 1.877 5.057A3 3 0 0 0 31 17a3 3 0 0 0-2.82 4.025l-1.214-1.534-1.21-1.564 3.018-3.9c-.598-.325-1.278-.518-1.94-.518h-5.248c-.72 0-1.42.178-2.012.518l5.423 7.004 4.792 6.058.005.007 7.425 9.556a2 2 0 0 1-.24 2.713l-4.067 3.662A2 2 0 0 1 30 42.775l-6.576-8.385-.001-.001-4.703-5.97-5.067-6.424-.006-.007-.006-.008a9.414 9.414 0 0 1-.002-11.339l.002-.002.811-1.082.008-.01 2.329-3.019.108-.141C18.007 4.85 19.852 4 21.677 4h5.247Zm-8.58 8.433c.974-.623 2.12-.924 3.242-.924h5.247c1.132 0 2.243.353 3.177.923a4.034 4.034 0 0 0 .022-4.792l-.1-.13.015-.011c-.329-.428-.797-.773-1.348-1.088C28.134 6.145 27.585 6 26.924 6h-5.248c-1.243 0-2.466.59-3.167 1.572l-.01.015-.012.014-.104.135a3.908 3.908 0 0 0-.774 2.33c0 .811.253 1.68.735 2.367ZM31 19a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 1 0-2 0v2h-2ZM16.567 29.728l.189.238v.002l4.7 5.964.004.006 1.16 1.48-4.255 5.425a2 2 0 0 1-2.781.36l-4.379-3.317a2 2 0 0 1-.368-2.826l5.73-7.332Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="hiv_pos_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHivPos);
export default ForwardRef;
