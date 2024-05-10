import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAmbulance = (
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
      <path d="M32 12.5a1 1 0 1 0 2 0V11a1 1 0 1 0-2 0v1.5Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 16a2 2 0 0 1 2-2h22a2 2 0 0 1 1.732 1H30v4h1v-1h1v-1a1 1 0 1 1 2 0v1h1v1h.718a3 3 0 0 1 2.035.796l5.282 4.875A3 3 0 0 1 44 26.876V35h-5.126a4.002 4.002 0 0 1-7.748 0H15.874a4.002 4.002 0 0 1-7.748 0H4V16Zm38 12H30v5h1.126a4.002 4.002 0 0 1 7.748 0H42v-5Zm-12-2h11.526l-5.13-4.735a1 1 0 0 0-.678-.265H30v5ZM12 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm25-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM13 22h3v-3h2v3h3v2h-3v3h-2v-3h-3v-2Z"
      />
      <path d="M36.5 17a1 1 0 0 1 1-1H39a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1ZM35.828 12.759a1 1 0 1 0 1.343 1.482l.915-.828a1 1 0 0 0-1.343-1.482l-.915.828Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAmbulance);
export default ForwardRef;
