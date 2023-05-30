import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGeriatrics = (
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
        d="M28.646 26.497a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5h.085c.323 0 .584.262.584.584v7.975a1 1 0 1 0 2 0V29.08a2.584 2.584 0 0 0-2.584-2.584h-.085Z"
        fill="#333"
      />
      <path
        d="m17.932 29.895.068.125V36a2 2 0 1 0 4 0v-6.5c0-2.198.511-4.308 1.18-6.074l.215.849a2 2 0 0 0 1.555 1.47l3.666.718a2 2 0 1 0 .768-3.926l-2.424-.474-1.155-4.555A2 2 0 0 0 23.867 16c-3 0-5.013 1.847-6.174 3.68C16.558 21.472 16 23.59 16 25c0 .404.092.78.163 1.03.08.28.184.567.293.838.217.542.494 1.13.755 1.651.264.528.526 1.02.72 1.376ZM29.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Zm2 0a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGeriatrics);
export default ForwardRef;
