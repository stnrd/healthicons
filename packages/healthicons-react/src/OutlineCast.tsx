import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineCast = (
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
        fillRule="evenodd"
        d="M42 16a3.99 3.99 0 0 0-1-2.646V7H28v6.354c-.622.705-1 1.632-1 2.646v10h-9.687l-4.696-3.25a2.948 2.948 0 0 0-3.688 4.581l-.778.13A2.574 2.574 0 0 0 6.953 32a2.572 2.572 0 0 0 .004 4.003A2.527 2.527 0 0 0 6 37.983c0 1.274.948 2.355 2.222 2.505 1.641.193 4.482.512 5.466.512v-.012c.103.008.207.012.312.012h24a4 4 0 0 0 4-4V16ZM10.388 38.72a3.977 3.977 0 0 1-.382-1.492l-1.556.233a.528.528 0 0 0-.45.523c0 .268.198.487.456.517.57.068 1.25.146 1.932.22ZM8.48 33.434 10 33.18v1.639l-1.52-.254a.574.574 0 0 1 0-1.132Zm0-2.868 1.52.254V30c0-.286.03-.565.087-.834l-1.607.268a.574.574 0 0 0 0 1.132Zm2.999-6.172 2.327 1.61a3.982 3.982 0 0 0-2.356.914l-1.15-1.042a.948.948 0 0 1 1.178-1.482ZM21.054 39l-6.377-11H14a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7.054ZM16.99 28l6.377 11h4.688l-6.377-11H16.99Zm21.53 10.932A2.002 2.002 0 0 1 38 39h-7.634L23.99 28h3.597l10.932 10.932Zm1.413-1.414L29 26.586v-2.8l10.942 3.647.058.017V37c0 .18-.024.353-.068.518ZM40 16.686l-11 3.188v1.803l11 3.667v-8.658Zm-.451-1.951L29 17.79V16a2 2 0 0 1 2-2h7c.624 0 1.182.285 1.549.734ZM39 9h-9v3h9V9Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineCast);
export default ForwardRef;
