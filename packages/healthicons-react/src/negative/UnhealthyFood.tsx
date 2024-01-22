import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUnhealthyFood = (
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
      <g clipPath="url(#unhealthy_food_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm15.23 5.807L17 12.41V8.79l7-2.14v3.893l6.086-2.913-.069 1.01L31.227 4h7.117l-2.769 9.23 1.767-.452-2.148 8.014c.14-.135.28-.271.421-.41a1.293 1.293 0 0 1 2.203 1.071L35.22 42.248A2 2 0 0 1 33.234 44H14.766a2 2 0 0 1-1.985-1.752l-2.599-20.79a1.297 1.297 0 0 1 1.886-1.31l-2.44-9.104 5.602-5.237ZM17 24.293a31.17 31.17 0 0 1-2.214-1.73L11.87 11.686l2.29-2.14L17 20.131v4.161Zm5 2.428c-.979-.23-1.973-.623-3-1.177V10.269l3-.917V26.72Zm4.797-.185a9.216 9.216 0 0 1-2.535.426l1.006-14.81 2.59-1.24-1.061 15.624Zm5.675-3.31c-1.116.909-2.178 1.65-3.209 2.228l2.328-8.687 2.84-.852-1.96 7.312Zm.842-9.418L35.656 6h-2.883l-2.221 8.514 2.762-.706Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="unhealthy_food_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUnhealthyFood);
export default ForwardRef;
