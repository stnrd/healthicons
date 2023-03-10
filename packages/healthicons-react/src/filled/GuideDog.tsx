import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGuideDog = (
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
        d="M28.297 20.117 23.5 24.915v6.715c2.732-.365 5.067-.932 8-2.629 2.138 3.919 3.929 5.045 4.848 5.624.37.233.6.377.652.579.12.46.246.797.344 1.06.301.803.345.92-.844 1.737H40v-4.523c0-1.977-3-7.249-3-7.249L41.5 32c.405.253.952-.233.5-1-.189-.504-.395-1.164-.629-1.912-1.114-3.567-2.847-9.116-6.252-9.116-.493 0-1.202.026-2.036.055-1.387.05-3.121.112-4.786.09ZM21.5 31.864V25.5h-7.914c.807 1.753 1.773 3.022 2.522 4.006.14.183.27.355.392.52.5.674 2 5.177-.5 7.248 3.107 0 3.83 1.061 3.98.986.068-.034.02-.297.02-.986v-5.249l.933-.1.567-.061ZM12.822 23.5h9.264l3.517-3.517a27.281 27.281 0 0 1-.103-.01c-4.076-.435-6.693-1.995-8.5-6.861-1.667-4.488-7-2.612-7 1.035-1.213.43-4 1.38-4 1.38s.5 2.648 1.5 3.973c.54.394 2.336.472 3.5.472.411 0 .78-.008 1.112-.025.136 1.335.388 2.511.71 3.553Z"
        fill="#333"
      />
      <path
        d="M15 38a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1ZM36 38a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM17.974 12.311c1.18.724 1.509 4.402 1.026 5.189-.483.787-1.595-1.616-2.775-2.34-1.18-.724-1.745-1.949-1.262-2.736.483-.786 1.83-.837 3.01-.113Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.707 9.707a1 1 0 0 0-1.414-1.414L25.586 20h2.828L38.707 9.707Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGuideDog);
export default ForwardRef;
