import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDomesticWorkerAlt = (
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
      <path d="M13 9.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z" fill="#333" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.449 16.051a2.006 2.006 0 0 0-.449-.05h-9v12h-7V16h-1a6 6 0 0 0-1 11.916v12.084a2 2 0 1 0 4 0v-9h3v9a2 2 0 1 0 4 0V20h7c.477 0 .914-.167 1.258-.446l1.998 8.655a4 4 0 0 0-2.998 4.797l1.05 8.995 2.824-.652-1.03-4.915 1.958-.41 1.021 4.875 6.92-1.598-2.999-8.544a4 4 0 0 0-4.797-2.998L30.38 11.196a1 1 0 0 0-1.95.45l1.018 4.405ZM9 22.001a2 2 0 0 1 2-2v4a2 2 0 0 1-2-2Zm25.655 7.708-1.95.45a2 2 0 0 0-1.498 2.398l5.846-1.35a2 2 0 0 0-2.398-1.498Z"
        fill="#333"
      />
      <path d="M18 16v3h-3v-3h3Z" fill="#333" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDomesticWorkerAlt);
export default ForwardRef;
