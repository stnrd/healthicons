import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledMosque = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M6.195 14.932c1.266-.402 2.269-.634 3.305-.634 1.033 0 2.033.23 3.292.63-.89-4.066-3.292-8.88-3.292-8.88s-2.473 4.996-3.305 8.884ZM13 17.102l-.316-.105c-1.486-.496-2.356-.7-3.184-.7-.828 0-1.699.204-3.184.7L6 17.102v24.946h7V17.102Zm4 10.946v4h-2 4v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h2v-1a1 1 0 1 1 2 0v1h4-2v-4H17Zm15.207-2H15.793c-.51-1.156-.793-2.496-.793-4 0-3.765 3.175-6.499 5.836-8.789.802-.69 1.557-1.34 2.164-1.966V8.048h2v3.245c.607.626 1.362 1.276 2.164 1.966 2.66 2.29 5.836 5.024 5.836 8.789 0 1.504-.284 2.844-.793 4Zm2.793 16h7v-25a.998.998 0 0 1-.316-.051c-1.485-.496-2.356-.7-3.184-.7-.828 0-1.699.204-3.184.7l-.316.105v24.946Zm.195-27.116c1.266-.402 2.269-.634 3.305-.634 1.032 0 2.033.23 3.292.63-.89-4.066-3.292-8.88-3.292-8.88s-2.473 4.996-3.305 8.884ZM33 42.048v-8H15v8h4v-1.12a4 4 0 0 1 2.308-3.624L24 36.048l2.692 1.256A4 4 0 0 1 29 40.929v1.119h4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledMosque);
export default ForwardRef;
