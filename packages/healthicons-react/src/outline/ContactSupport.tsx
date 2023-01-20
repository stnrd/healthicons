import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgContactSupport = (
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
        d="M24.8 33h2.7C34.404 33 40 27.404 40 20.5S34.404 8 27.5 8h-7C13.596 8 8 13.596 8 20.5c0 8.06 4.596 12.88 9.43 15.786 2.426 1.458 4.87 2.4 6.716 2.977.228.071.447.137.654.197V33Zm2 9s-.764-.129-2-.463C19.59 40.125 6 35.05 6 20.5 6 12.492 12.492 6 20.5 6h7C35.508 6 42 12.492 42 20.5S35.508 35 27.5 35h-.7v7Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.691 12.482c1.03.684 1.806 1.793 1.806 3.28 0 1.578-.636 2.738-1.667 3.448a4.523 4.523 0 0 1-1.33.614v1.532a1.5 1.5 0 0 1-3 0v-2.797a1.5 1.5 0 0 1 1.4-1.497c.554-.037.974-.147 1.227-.322a.698.698 0 0 0 .24-.272c.06-.12.13-.334.13-.707 0-.313-.122-.552-.467-.782-.392-.26-1.022-.452-1.779-.476-.748-.024-1.475.122-2.01.381-.536.26-.733.552-.788.767a1.5 1.5 0 1 1-2.906-.746c.345-1.341 1.348-2.217 2.386-2.72 1.04-.505 2.263-.718 3.413-.681 1.143.036 2.363.324 3.345.978Z"
        fill="#333"
      />
      <path d="M27 27a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="#333" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgContactSupport);
export default ForwardRef;
