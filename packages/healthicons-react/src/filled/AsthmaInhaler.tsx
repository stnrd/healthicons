import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAsthmaInhaler = (
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
        d="M15.865 6.134a1 1 0 0 1 .466.607l1.075 4.012.771-.351a1 1 0 0 1 1.38.651L23.83 27H30a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H17.051a5 5 0 0 1-4.822-3.678L6.553 16.614a1 1 0 0 1 .55-1.175l1.075-.488-1.506-5.622a1 1 0 0 1 .707-1.224l7.727-2.07a1 1 0 0 1 .76.099Zm-5.841 7.977L8.863 9.778l5.795-1.553.902 3.367-5.536 2.519Z"
        fill="#000"
      />
      <path
        d="M33 29h2v10h-2V29ZM38 33a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM39 36a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM42 35a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM43 30a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM42 39a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAsthmaInhaler);
export default ForwardRef;
