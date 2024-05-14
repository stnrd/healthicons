import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnus = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.07 3.867v25.825l-.071.18c-2.601 6.502-6.872 9.678-11.047 10.304-3.486.523-6.84-.765-8.784-3.256-1.912 2.506-5.341 3.775-8.881 3.257-4.259-.623-8.658-3.787-11.265-10.306l-.072-.178V3.976l17.202 16.29c.115-.058.242-.119.38-.18.618-.275 1.517-.586 2.468-.586.952 0 1.85.311 2.469.586.136.06.263.121.378.18L44.07 3.866ZM24.2 33.2c1.105 0 2-1.01 2-1.936 0-.926-.895-2.064-2-2.064-1.104 0-2 1.138-2 2.065 0 .926.896 1.935 2 1.935Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAnus);
export default ForwardRef;
