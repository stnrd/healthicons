import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgStarSmall = (
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="m24 17.222-1.577 3.185-1.792-.888 2.452-4.95a1.025 1.025 0 0 1 1.834 0l2.452 4.95-1.792.888L24 17.222Zm6.222 9.24a1.017 1.017 0 0 0-.294.903l.937 5.441c.143.833-.734 1.468-1.484 1.075l-4.905-2.57a1.026 1.026 0 0 0-.952 0l-4.905 2.57c-.75.393-1.627-.242-1.484-1.075l.937-5.441a1.017 1.017 0 0 0-.294-.902l-3.968-3.854a1.018 1.018 0 0 1 .567-1.739l5.483-.794c.334-.048.622-.256.77-.557l1.793.888a3.023 3.023 0 0 1-2.276 1.649l-3.512.508 2.536 2.464-1.31 1.349 1.31-1.35a3.017 3.017 0 0 1 .872 2.677l-.6 3.488 3.153-1.652c.88-.46 1.929-.46 2.808 0l3.153 1.652-.6-3.488a3.017 3.017 0 0 1 .872-2.676l1.393 1.435Zm1.143-3.898-3.512-.508a3.023 3.023 0 0 1-2.276-1.65l1.792-.887c.15.3.438.51.77.558l5.484.793a1.018 1.018 0 0 1 .567 1.739l-3.968 3.854-1.393-1.435 2.536-2.464Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgStarSmall);
export default ForwardRef;
