import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCast = (
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
        d="M41 8H28v4.354c-.622.705-1 1.632-1 2.646v9.903H15.322c-.076 0-.153.002-.229.007l-3.492-1.81a1.28 1.28 0 0 0-1.45 2.083l1.773 1.61c-.045.073-.089.148-.13.224l-4.797.4a1.087 1.087 0 0 0 0 2.166l4.325.36v.113l-4.325.361a1.087 1.087 0 0 0 0 2.166l4.325.36v.125l-3.327.333a1.105 1.105 0 0 0 0 2.198l3.327.333V36l.002.112-2.339.273a1.114 1.114 0 0 0 .018 2.215l3.633.364A3.985 3.985 0 0 0 15.323 40H38a4 4 0 0 0 4-4V15c0-1.014-.378-1.94-1-2.646V8Zm-12 7a2 2 0 0 1 2-2h7c.624 0 1.182.286 1.549.735L29 16.79V15Zm0 3.874v1.803l11 3.667v-8.658l-11 3.188Zm10.942 7.559.058.017V36c0 .18-.024.353-.068.518L29 25.586v-2.8l10.942 3.646Zm-12.453.47h-3.557l6.433 11.095.001.002H38c.18 0 .353-.024.518-.068l-11.03-11.029ZM28.054 38l-6.433-11.097h-4.689L23.366 38h4.688Zm-14.731-9.097a2 2 0 0 1 1.358-1.895L21.054 38h-5.731a2 2 0 0 1-2-2v-7.097Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCast);
export default ForwardRef;
