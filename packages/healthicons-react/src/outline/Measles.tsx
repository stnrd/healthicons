import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMeasles = (
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
        d="M33.258 31c-1.72-3.562-5.22-6-9.258-6-4.038 0-7.538 2.438-9.258 6-.469.97.316 2 1.394 2h15.728c1.078 0 1.863-1.03 1.394-2ZM24 27c2.87 0 5.453 1.555 6.978 4H17.022c1.526-2.445 4.108-4 6.978-4Z"
        fill="#000"
      />
      <path
        d="M14.221 16.372a1 1 0 0 1 1.309-.22l4 2.5a1 1 0 0 1 0 1.696l-4 2.5a1 1 0 0 1-1.219-1.573c.373-.354.852-.72 1.244-1.02.174-.133.331-.253.454-.352.194-.158.328-.281.416-.38a4.362 4.362 0 0 0-.454-.409c-.106-.086-.23-.183-.367-.289-.41-.319-.92-.716-1.32-1.127a1 1 0 0 1-.063-1.326ZM32.47 16.152a1 1 0 0 1 1.246 1.546c-.4.41-.91.808-1.32 1.127-.136.106-.261.203-.367.29-.21.17-.356.302-.454.409.088.098.223.221.416.378.123.1.28.22.454.353.392.3.871.666 1.244 1.02a1 1 0 0 1-1.219 1.573l-4-2.5a1 1 0 0 1 0-1.696l4-2.5ZM26 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM38 27.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Zm-2 0c0 8.837-7.163 16-16 16-.089 0-.178 0-.266-.002a2 2 0 1 0-3.667-.485 16.035 16.035 0 0 1-10.994-9.74 2 2 0 1 0-.795-2.79A16.087 16.087 0 0 1 8 24a15.96 15.96 0 0 1 5.32-11.914 2 2 0 1 0 3.285-2.278A15.93 15.93 0 0 1 24 8c3.107 0 6.007.885 8.461 2.418a1.5 1.5 0 1 0 2.359 1.795A15.958 15.958 0 0 1 40 24Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMeasles);
export default ForwardRef;
