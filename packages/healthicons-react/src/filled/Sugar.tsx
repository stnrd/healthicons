import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSugar = (
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
        d="M34.459 10.048a1 1 0 0 1 .973.207l8.235 7.379a1 1 0 0 1 .31.958l-2.353 10.783a1 1 0 0 1-.718.753l-10.588 2.838a1 1 0 0 1-.961-.254l-4.56-4.5a1 1 0 1 1 1.406-1.424l4.15 4.098 9.447-2.532 2.099-9.62-7.374-6.606-9.556 3.073-1.018 3.11a1 1 0 1 1-1.901-.622l1.176-3.595a1 1 0 0 1 .645-.64l10.588-3.406Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.722 20.025a1 1 0 0 1 .753 1.197l-2.5 11a1 1 0 0 1-1.95-.444l2.5-11a1 1 0 0 1 1.197-.753Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.738 13.853a1 1 0 0 1 1.409-.116l7.265 6.16 6.825-1.862a1 1 0 1 1 .526 1.93l-7.333 2a1 1 0 0 1-.91-.202l-7.666-6.5a1 1 0 0 1-.116-1.41ZM10.742 15.277a1 1 0 0 1 .965-.239l8.27 2.361a1 1 0 0 1 .695.714l2.297 8.972a1 1 0 0 1-.308.999L16.23 33.75a1 1 0 0 1-.936.212L7.023 31.6a1 1 0 0 1-.69-.7l-2.298-8.5a1 1 0 0 1 .275-.984l6.432-6.14Zm.967 1.842L6.12 22.452l1.994 7.38 7.202 2.056 5.563-4.9-2.003-7.823-7.168-2.046Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.707 20.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-.974.256l-8-2.222a1 1 0 1 1 .535-1.927l7.438 2.066 3.587-3.587a1 1 0 0 1 1.414 0Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.758 24.03a1 1 0 0 1 1.212.727l2 8a1 1 0 0 1-1.94.486l-2-8a1 1 0 0 1 .728-1.213Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSugar);
export default ForwardRef;
