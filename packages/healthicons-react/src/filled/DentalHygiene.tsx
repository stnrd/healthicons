import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDentalHygiene = (
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
        d="m24 36 3.97-27.342a2.105 2.105 0 0 0-.068-.984 2.25 2.25 0 0 0-.514-.869 2.53 2.53 0 0 0-.866-.594A2.754 2.754 0 0 0 25.462 6H8.54c-.366 0-.728.072-1.06.21a2.531 2.531 0 0 0-.867.595 2.25 2.25 0 0 0-.514.869c-.1.32-.124.656-.069.984L10 36v2.5c0 .915.349 1.801.982 2.46A3.352 3.352 0 0 0 13.4 42h7.2c.915 0 1.784-.38 2.418-1.04.633-.659.982-1.545.982-2.46V36Zm-5.908-20.688a1 1 0 1 0-2 0v3.533h-3.616a1 1 0 1 0 0 2h3.616v3.533a1 1 0 1 0 2 0v-3.533h3.615a1 1 0 1 0 0-2h-3.615v-3.533Zm3.484 24.263c.267-.278.424-.664.424-1.075V37H12v1.5c0 .41.157.797.424 1.075.266.277.618.425.976.425h7.2c.358 0 .71-.148.976-.425Z"
        fill="#333"
      />
      <path
        d="M42 7a1 1 0 1 0-2 0h-6v2h6v2h-6v2h6v2h-6v2h6v1.992l-3.757 4.355A1 1 0 0 0 36 24v17a1 1 0 1 0 2 0V24.372l3.757-4.355a1 1 0 0 0 .243-.653V7Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDentalHygiene);
export default ForwardRef;
