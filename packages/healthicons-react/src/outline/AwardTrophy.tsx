import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAwardTrophy = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v1h5a1 1 0 0 1 1 1v6a5 5 0 0 1-5 5h-1.683c-1.541 4.36-5.53 7.564-10.317 7.959V34h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H16a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h7v-6.041c-4.786-.395-8.776-3.599-10.317-7.959H11a5 5 0 0 1-5-5V9a1 1 0 0 1 1-1h5V7Zm22 9V8H14v8c0 5.523 4.477 10 10 10s10-4.477 10-10Zm2-6v8h1a3 3 0 0 0 3-3v-5h-4ZM8 10h4v8h-1a3 3 0 0 1-3-3v-5Zm9 26v4h14v-4H17Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAwardTrophy);
export default ForwardRef;
