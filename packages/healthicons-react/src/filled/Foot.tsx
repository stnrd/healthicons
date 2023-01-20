import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgFoot = (
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
        d="M40.451 10a1 1 0 0 0-1-1H28.235a1 1 0 0 0-1 1v2.027l-.997 10.654c-.917 1.756-2.619 3.295-4.61 4.578-2.035 1.313-4.279 2.298-6.046 2.94-1.353.49-2.687 1.157-3.856 2.108l-.67.545H7.335a1 1 0 0 0-.939.654c-.287.78-.56 2.04-.274 3.182.15.597.465 1.202 1.047 1.65.581.448 1.33.662 2.205.662 2.563 0 3.927-.17 4.763-.436.435-.138.725-.3.958-.464a2.237 2.237 0 0 1 .192.124c.134.094.36.25.633.369.662.288 1.628.407 3.65.407 1.965 0 3.256-.237 4.227-.612.308-.119.596-.236.868-.348.945-.387 1.716-.702 2.584-.754a34.74 34.74 0 0 1 2.498-.07c.849.014 1.456.08 1.737.175.304.104.571.235.859.392l.264.148c.216.122.462.261.702.38.774.387 1.69.689 3.084.689 1.156 0 2.771-.288 4.13-1.21C41.935 36.833 43 35.23 43 32.816c0-1.722-.528-3.465-1.127-4.875-.795-1.872-1.422-3.701-1.422-5.545V10ZM36.5 25a1 1 0 0 0-2-.005v.012l-.003.067a5.38 5.38 0 0 1-.258 1.297c-.264.792-.771 1.682-1.754 2.271a1 1 0 0 0 1.03 1.716c1.517-.911 2.26-2.271 2.621-3.354a7.383 7.383 0 0 0 .357-1.815l.006-.128v-.039l.001-.013V25h-1 1Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFoot);
export default ForwardRef;
