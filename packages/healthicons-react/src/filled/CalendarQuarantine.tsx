import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCalendarQuarantine = (
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
      <path d="M23.3 22a1 1 0 0 0-.3 1.954V25.1c-.638.13-1.233.38-1.757.728l-.729-.728a1 1 0 0 0-1.421-1.407l-1.4 1.4a1 1 0 0 0 1.407 1.421l.728.729A4.972 4.972 0 0 0 19.1 29h-1.146a1 1 0 0 0-1.954.3v1.4a1 1 0 0 0 1.954.3H19.1c.13.638.38 1.233.728 1.757l-.728.729a1 1 0 0 0-1.407 1.421l1.4 1.4a1 1 0 0 0 1.421-1.407l.729-.728A4.972 4.972 0 0 0 23 34.9v1.146A1 1 0 0 0 23.3 38h1.4a1 1 0 0 0 .3-1.954V34.9a4.981 4.981 0 0 0 2.16-1.025l1.026 1.025a1 1 0 0 0 1.421 1.407l1.4-1.4a1 1 0 0 0-1.407-1.421l-1.168-1.169c.214-.409.373-.851.468-1.317h1.146A1 1 0 0 0 32 30.7v-1.4a1 1 0 0 0-1.954-.3H28.9a4.972 4.972 0 0 0-.728-1.757l.728-.729a1 1 0 0 0 1.407-1.421l-1.4-1.4a1 1 0 0 0-1.421 1.407l-.729.728A4.972 4.972 0 0 0 25 25.1v-1.146A1 1 0 0 0 24.7 22h-1.4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6a1 1 0 0 0-1 1v3h-4a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h26a4 4 0 0 0 4-4V14a4 4 0 0 0-4-4h-2v3a1 1 0 1 1-2 0V7a1 1 0 1 0-2 0v3H19v3a1 1 0 1 1-2 0V7a1 1 0 0 0-1-1Zm-5 34a2 2 0 0 1-2-2V20h30v18a2 2 0 0 1-2 2H11Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCalendarQuarantine);
export default ForwardRef;
