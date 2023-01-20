import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMosque = (
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
        d="M48 0H0v48h48V0ZM9.5 14.298c-1.036 0-2.04.232-3.305.634C7.027 11.044 9.5 6.048 9.5 6.048s2.401 4.814 3.292 8.88c-1.26-.4-2.26-.63-3.292-.63Zm3.184 2.699.316.105v24.946H6V17.102l.316-.105c1.485-.496 2.356-.7 3.184-.7.828 0 1.698.204 3.184.7ZM17 32.047v-4h14v4h-2v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1h-2Zm-1.207-6h16.414c.51-1.155.793-2.495.793-4 0-3.764-3.175-6.498-5.836-8.788-.802-.69-1.557-1.34-2.164-1.966V8.048h-2v3.245c-.607.626-1.362 1.276-2.164 1.966-2.66 2.29-5.836 5.024-5.836 8.789 0 1.504.284 2.844.793 4ZM35 17.103l.316-.105c1.485-.496 2.356-.7 3.184-.7.828 0 1.699.204 3.184.7a.998.998 0 0 0 .316.051v25h-7V17.102Zm3.5-2.804c-1.036 0-2.04.232-3.305.634.832-3.888 3.305-8.884 3.305-8.884s2.401 4.814 3.292 8.88c-1.26-.4-2.26-.63-3.292-.63ZM33 34.048v8h-4v-1.12a4 4 0 0 0-2.308-3.624L24 36.048l-2.692 1.256A4 4 0 0 0 19 40.929v1.119h-4v-8h18Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMosque);
export default ForwardRef;
