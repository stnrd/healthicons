import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDisinfectingWipes = (
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
        d="M26.423 8.885a1 1 0 1 0-1.846-.77l-2.5 6a1 1 0 1 0 1.846.77l2.5-6Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.93 5.368a1 1 0 0 0-.516-1.278l-.003-.002-.006-.002-.016-.007a6.595 6.595 0 0 0-.258-.109 15.967 15.967 0 0 0-3.149-.893c-1.89-.326-4.456-.375-6.528 1.085-2.225 1.323-3.9 1.169-4.987.773a4.783 4.783 0 0 1-1.304-.722 3.925 3.925 0 0 1-.396-.356l-.012-.013a1 1 0 0 0-1.71.95l3.217 10.487C15.467 15.768 15 16.361 15 17c0 1.657 3.134 3 7 3s7-1.343 7-3c0-.58-.385-1.123-1.052-1.582l3.982-10.05Zm-9.349.446c1.422-1.015 3.337-1.063 5.062-.766.807.14 1.526.346 2.055.525L25.21 16.9h-6.36L15.754 6.804l.03.01c1.658.603 3.972.7 6.732-.956a.988.988 0 0 0 .066-.044ZM22 22c2.726 0 5.196-.545 7-1.43V40c0 1.657-3.134 3-7 3s-7-1.343-7-3V20.57c1.804.885 4.274 1.43 7 1.43Zm4 6c-3.205.61-4.969.63-8 0v6.165c3.094.9 4.881 1 8 0V28Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDisinfectingWipes);
export default ForwardRef;
