import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBloodBP = (
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
        d="M48 0H0v48h48V0ZM28 8.358a2 2 0 0 1-1.429-.6L25.44 6.602a2.021 2.021 0 0 0-2.878 0l-1.132 1.156a2 2 0 0 1-1.429.6h-6c-1.12 0-2 .896-2 1.97V28.97a68.676 68.676 0 0 1 3.7.06l.53.02c1.284.048 2.481.093 3.652.069 2.627-.056 5.042-.466 7.61-1.981 3.118-1.84 5.758-1.288 7.583-.226.338.197.647.41.925.626V10.327c0-1.073-.88-1.97-2-1.97h-6ZM14 38h4v2h5v4h2v-4h5v-2h4c2.21 0 4-1.777 4-3.97V10.328c0-2.192-1.79-3.97-4-3.97h-6l-1.132-1.155a4.022 4.022 0 0 0-5.736 0L20 6.358h-6c-2.21 0-4 1.777-4 3.97V34.03C10 36.223 11.79 38 14 38Zm2-27a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5a4 4 0 0 0 2.646-7A4 4 0 0 0 21 11h-5Zm7 4a2 2 0 0 1-2 2h-4v-4h4a2 2 0 0 1 2 2Zm-2 4h-4v4h4a2 2 0 1 0 0-4Zm9.5-2H32a1 1 0 1 1 0 2h-1.5v1.5a1 1 0 1 1-2 0V19H27a1 1 0 1 1 0-2h1.5v-1.5a1 1 0 1 1 2 0V17Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBloodBP);
export default ForwardRef;
