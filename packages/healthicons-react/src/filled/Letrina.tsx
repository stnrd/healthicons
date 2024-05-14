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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 6H14a2 2 0 0 0-2 2v5.407l2.898-3.09 1.459 1.367L12 16.33v2.076l2.898-3.09 1.459 1.367L12 21.33v2.076l2.898-3.09 1.459 1.367L12 26.33v2.076l2.898-3.09 1.459 1.367L12 31.33v2.076l2.898-3.09 1.459 1.367L12 36.33V40a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-3.677l-4.35-4.64 1.46-1.367L36 33.4v-2.076l-4.35-4.64 1.46-1.367L36 28.4v-2.076l-4.35-4.64 1.46-1.367L36 23.4v-2.076l-4.35-4.64 1.46-1.367L36 18.4v-2.076l-4.35-4.64 1.46-1.367L36 13.4V8a2 2 0 0 0-2-2ZM14 4a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H14Zm14.19 4.18A4.002 4.002 0 0 1 31 12v23a3.99 3.99 0 0 1-1.364 3.009A3.984 3.984 0 0 1 27 39h-6a3.996 3.996 0 0 1-4-4V12a4 4 0 0 1 4-4h6c.414 0 .814.063 1.19.18Zm-8.308 28.478c.319.216.704.342 1.118.342h6a1.991 1.991 0 0 0 1.309-.488c.423-.367.691-.908.691-1.512V13.986A2 2 0 0 0 27 12h-6a2 2 0 0 0-2 2v21c0 .69.35 1.299.882 1.658ZM25.875 18c0 1.105-.84 2-1.875 2-1.035 0-1.875-.895-1.875-2s.84-2 1.875-2c1.035 0 1.875.895 1.875 2Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgLetrina);
export default ForwardRef;
