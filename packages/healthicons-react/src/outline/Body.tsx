import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBody = (
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
        d="M24 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.374 18.314A2 2 0 0 1 19 20.28V41a1 1 0 0 0 1 1h.087a1 1 0 0 0 .996-.91L22 31a2 2 0 0 1 4 0l.917 10.09a1 1 0 0 0 .996.91H28a1 1 0 0 0 1-1V20.317a2 2 0 0 1 1.626-1.965c1.756-.334 3.613-.797 5.654-1.392a1 1 0 1 0-.56-1.92c-4.634 1.35-8.19 1.976-11.716 1.96-3.53-.016-7.09-.674-11.737-1.963a1 1 0 1 0-.534 1.927c2.033.564 3.886 1.016 5.641 1.35Zm5.604 23.489A3 3 0 0 1 20.087 44H20a3 3 0 0 1-3-3V20.28c-1.826-.348-3.735-.816-5.802-1.39a3 3 0 1 1 1.604-5.78c4.57 1.267 7.935 1.875 11.211 1.89 3.266.014 6.618-.56 11.148-1.88a3 3 0 1 1 1.678 5.76c-2.084.608-4.005 1.088-5.839 1.437V41a3 3 0 0 1-3 3h-.087a3 3 0 0 1-2.988-2.728l-.917-10.09a2.035 2.035 0 0 1-.008-.177c0 .059-.003.117-.008.176l-.918 10.09a3.05 3.05 0 0 1-.096.532Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBody);
export default ForwardRef;
