import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHandWipePaper = (
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
      <g clipPath="url(#hand-wipe-paper_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm13 23.983V29a1 1 0 1 1-2 0v-3.187a6.996 6.996 0 0 0-2.145 2.309A6.45 6.45 0 0 0 8 31.319V41a1 1 0 1 1-2 0v-9.681a8.45 8.45 0 0 1 1.117-4.188 9.027 9.027 0 0 1 3.062-3.17l.821-.515V18h-.667a4.438 4.438 0 0 1-3.043-1.193A4.055 4.055 0 0 1 6 13.857V7a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v6.857a4.054 4.054 0 0 1-1.29 2.95A4.438 4.438 0 0 1 37.667 18H37v18a1 1 0 0 1-1.447.894L33 35.618l-2.553 1.276a1 1 0 0 1-.894 0L27 35.618l-2.553 1.276a1 1 0 0 1-.84.025l-2.645-1.133-3.083 5.69a1 1 0 1 1-1.758-.952l5.114-9.443a1.815 1.815 0 0 0-3.178-1.754l-3.676 6.535-1.743-.98 3.676-6.536a3.815 3.815 0 0 1 6.68 3.688l-1.076 1.986 2.05.878 2.585-1.292a1 1 0 0 1 .894 0L30 34.882l2.553-1.276a1 1 0 0 1 .894 0l1.553.776V13H13v10.983Z"
        />
      </g>
      <defs>
        <clipPath id="hand-wipe-paper_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHandWipePaper);
export default ForwardRef;
