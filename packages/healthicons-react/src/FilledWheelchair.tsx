import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledWheelchair = (
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
      <path fill="#fff" d="M0 0h48v48H0z" />
      <path
        fill="#333"
        d="M30.5 9.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-5.87 22.873 1.364-.098a6 6 0 0 0-8.476-5.739c.043 1.15.162 2.076.34 2.57 1.364 3.791 6.771 3.267 6.771 3.267Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M38.339 37.403c.9 2.074-2.202 3.624-3.433 1.764-1.232-1.86-4.286-7.224-4.286-7.224l-.62.045V32c0 5.523-4.477 10-10 10s-10-4.477-10-10c0-4.291 2.703-7.952 6.5-9.37v-5.88l-2.6-1.95 1.2-1.6 3.4 2.55v2.198c.252-.785.557-1.465.92-1.978 2.06-2.909 2.463-3.123 4.736-2.909 2.273.215 6.109 7.796 6.109 7.796s4.83 1.145 6.677 1.788c1.847.644.686 3.171-.498 3.123-1.183-.047-7.671-.69-8.547-1.192-.876-.5-2.344-2.908-2.344-2.908l-.144 1.92a10.052 10.052 0 0 1 2.844 2.764c1.803.157 3.851.322 4.45.322 1.137 0 1.397.787 1.397.787s3.339 7.868 4.239 9.942ZM25.397 26.095A7.97 7.97 0 0 0 20 24a7.99 7.99 0 0 0-2.478.391 8 8 0 1 0 7.876 1.704Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledWheelchair);
export default ForwardRef;
