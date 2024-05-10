import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRunningWater = (
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
      <path
        d="M8 22H7v-9h2v9H8Zm26.556 12.58c.332-.453.666-.845.944-1.152.278.307.612.7.944 1.152.842 1.15 1.556 2.522 1.556 3.784C38 39.856 36.845 41 35.5 41S33 39.856 33 38.364c0-1.262.714-2.635 1.556-3.784ZM40 25h1v4H29v-4h2v-2a3 3 0 0 0-3-3v-8h2a9 9 0 0 1 9 9v4h1ZM19 12h5v11H13V12h6Z"
        stroke="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRunningWater);
export default ForwardRef;
