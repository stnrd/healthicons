import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCrisisResponseCenterPerson = (
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
        d="M23 6H6v12h17V6Zm-8.5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1-7a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0V9ZM42 6H25v12h17V6Zm-1.793 3.207L34.5 14.914l-2.5-2.5-2.293 2.293-1.414-1.414L32 9.586l2.5 2.5 4.293-4.293 1.414 1.414ZM6 32V20h17v4.083A6.002 6.002 0 0 0 18.341 32H6Zm3-7v-2h2v2H9Zm0 2v2h2v-2H9Zm4-2v-2h2v2h-2Zm0 2v2h2v-2h-2Zm4-2v-2h2v2h-2ZM30 30a5.99 5.99 0 0 1-.341 2H42V20H25v4.083c2.838.476 5 2.944 5 5.917Zm2-5h7a1 1 0 1 0 0-2h-7a1 1 0 1 0 0 2Zm0 3a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2h-6a1 1 0 0 0-1 1Z"
        fill="#000"
      />
      <path
        d="M28 30a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM24 35a21.45 21.45 0 0 0-4.612.56c-.764.185-1.521.432-2.111.762-.516.289-1.277.853-1.277 1.8V42h16v-3.879c0-.946-.761-1.51-1.277-1.8-.59-.329-1.347-.576-2.111-.761A21.45 21.45 0 0 0 24 35Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCrisisResponseCenterPerson);
export default ForwardRef;
