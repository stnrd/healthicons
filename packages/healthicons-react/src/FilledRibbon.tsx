import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledRibbon = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M26.924 4c.967 0 1.866.217 2.667.675.685.39 1.462.93 2.037 1.734l-.012.01.01.014 2.332 3.022.822 1.095a9.414 9.414 0 0 1-.002 11.34l-2.927 3.778-.092-.118-4.793-6.06-1.21-1.563 3.018-3.9c-.598-.325-1.278-.518-1.94-.518h-5.248c-.72 0-1.42.178-2.012.518l5.423 7.004 4.792 6.058 7.43 9.563a2 2 0 0 1-.24 2.713l-4.067 3.662A2 2 0 0 1 30 42.775l-6.576-8.385-9.777-12.402-.006-.008a9.414 9.414 0 0 1-.002-11.339l.002-.002.811-1.082 2.337-3.029.108-.141C18.007 4.85 19.852 4 21.677 4h5.247Zm-8.207 8.215a6.097 6.097 0 0 1 2.869-.706h5.247c1.132 0 2.243.353 3.177.923a4.034 4.034 0 0 0 .022-4.792l-.1-.13.015-.011c-.329-.428-.797-.773-1.348-1.088C28.134 6.145 27.585 6 26.924 6h-5.248c-1.243 0-2.466.59-3.167 1.572l-.01.015-.116.149a3.908 3.908 0 0 0-.774 2.33c0 .811.253 1.68.735 2.367.122-.078.247-.15.373-.218Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="m16.567 29.728 4.889 6.204.004.006 1.16 1.48-4.255 5.425a2 2 0 0 1-2.781.36l-4.379-3.317a2 2 0 0 1-.368-2.826l5.73-7.332Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledRibbon);
export default ForwardRef;
