import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBandaged = (
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
        d="M24 40c8.837 0 16-7.163 16-16a15.95 15.95 0 0 0-4.656-11.283l-15.349 9.527C19.916 24.34 18.83 26 17.5 26c-.676 0-1.29-.43-1.74-1.127l-6.91 4.289C10.999 35.465 16.97 40 24 40ZM7.072 30.134c-1.9.031-2.645-7.85-.288-11.404C9.037 11.36 15.893 6 24 6c.916 0 1.817.069 2.697.2 3.217-.815 10.39 3.351 10.196 5.24A17.94 17.94 0 0 1 42 24c0 9.941-8.059 18-18 18-7.787 0-14.42-4.945-16.928-11.866Zm2.903-13.841c2.652-4.816 7.713-8.12 13.56-8.286l-13.56 8.286Zm24.319-5.278L7.592 27.59c-.149-.607-.26-1.427-.28-2.38-.028-1.34.13-2.746.484-3.906.368-1.204.854-1.847 1.258-2.103L27.077 8.186l.028-.019h.001c.014-.007.122-.056.397-.068.322-.014.76.029 1.305.154 1.092.252 2.366.778 3.526 1.429.815.457 1.486.926 1.96 1.333ZM33 22c0 2.21-1.12 4-2.5 4S28 24.21 28 22s1.12-4 2.5-4 2.5 1.79 2.5 4Zm-3.567 9.544C28.345 30.026 26.271 29 23.893 29c-2.469 0-4.608 1.104-5.66 2.717-.453.696-.886 2.802.767 2.283 4.813-1.6 5.28-1.542 10 0 1.317.472 1.07-1.424.674-2.115-.048-.083-.106-.16-.164-.238l-.077-.103Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBandaged);
export default ForwardRef;
