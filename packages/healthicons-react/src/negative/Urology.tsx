import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUrology = (
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
      <g
        clipPath="url(#urology_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#000"
      >
        <path d="M19.88 18a4 4 0 0 1-6.705 3.817C11.919 20.558 10.996 18.83 11 17c-.005-1.831.917-3.571 2.176-4.83A4 4 0 0 1 19.877 16h.121c1.656 0 3 1.34 3 2.998v7.072a7.242 7.242 0 0 1 2.002 0v-7.072A2.999 2.999 0 0 1 28 16h.121a4 4 0 0 1 6.702-3.83c1.258 1.259 2.18 2.999 2.175 4.83.005 1.83-.917 3.558-2.175 4.817A4 4 0 0 1 28.118 18H28c-.553 0-1 .447-1 .998V26.7c1.175.629 2 1.681 2 3.158 0 .048 0 .096-.002.143-.064 2.425-1.76 4.43-4 4.898V37a1 1 0 1 1-2 0v-2.103c-2.237-.468-3.932-2.473-3.996-4.897v-.01a5.342 5.342 0 0 1-.002-.133c0-1.263.603-2.216 1.513-2.858.153-.109.316-.208.485-.3V19a.999.999 0 0 0-1-.999h-.117Zm1.123 12c.072 1.718 1.436 3 2.997 3s2.925-1.282 2.997-3h-5.994Zm-4.01-15.021c0 .555.45 1.005 1.006 1.005a1 1 0 0 1 0 2c-.556 0-1.006.45-1.006 1.005a1 1 0 1 1-2 0c0-.77.29-1.473.767-2.005a2.994 2.994 0 0 1-.767-2.006 1 1 0 0 1 2 0ZM30 15.983c.555 0 1.005-.45 1.005-1.005a1 1 0 1 1 2 0c0 .77-.29 1.473-.767 2.005.477.532.767 1.235.767 2.005a1 1 0 1 1-2 0c0-.555-.45-1.005-1.005-1.005a1 1 0 1 1 0-2Z" />
        <path d="M48 0H0v48h48V0ZM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Z" />
      </g>
      <defs>
        <clipPath id="urology_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUrology);
export default ForwardRef;
