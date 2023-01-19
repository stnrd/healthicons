import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineEnzyme = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        d="M29.068 15.518a2 2 0 0 0 3.864-1.036l1.932-.517a4 4 0 1 1-4.9-2.829l.518 1.932a2 2 0 0 0-1.414 2.45Z"
      />
      <path
        fill="#333"
        d="M34.876 19.717c-.824 1.22-2.6 1.893-4.553 1.804-1.957-.089-3.652-.922-4.34-2.167a1 1 0 1 0-1.75.968c1.154 2.087 3.665 3.09 5.999 3.197 2.338.107 4.94-.667 6.301-2.682a1 1 0 0 0-1.657-1.12ZM17.567 34.783a.784.784 0 0 1-1.567 0h-2A2.783 2.783 0 1 0 16.784 32v2c.432 0 .783.35.783.783Zm2.373-8.36c-1.795-.776-3.694-.776-4.897.073a1 1 0 1 1-1.153-1.634c1.988-1.402 4.695-1.203 6.843-.275 2.145.927 4.137 2.755 4.477 5.116a1 1 0 0 1-1.98.285c-.202-1.408-1.492-2.788-3.29-3.565Z"
      />
      <path
        fill="#333"
        d="M18.138 29.815c-1.169-.488-2.313-.474-2.964-.056a1 1 0 0 1-1.08-1.683c1.433-.92 3.345-.72 4.815-.106 1.46.61 2.942 1.822 3.234 3.468a1 1 0 1 1-1.969.35c-.12-.676-.858-1.48-2.036-1.973ZM11.5 34a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M9.071 39.071c-3.905-3.905-3.905-10.237 0-14.142L24.627 9.373c3.906-3.906 10.237-3.906 14.143 0 3.905 3.905 3.905 10.236 0 14.142L23.212 39.07c-3.905 3.905-10.237 3.905-14.142 0Zm10.05-21.364 6.92-6.92A8 8 0 0 1 37.356 22.1l-6.92 6.92-11.314-11.313Zm-1.414 1.414-7.222 7.222A8 8 0 0 0 21.8 37.657l7.222-7.222-11.314-11.314Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineEnzyme);
export default ForwardRef;
