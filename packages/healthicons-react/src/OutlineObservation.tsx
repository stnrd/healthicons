import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineObservation = (
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
        d="M37 10a1 1 0 1 0-2 0v2.303l1.168 1.752a1 1 0 0 0 1.664-1.11L37 11.697V10Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M36 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-17.904-.895a3.771 3.771 0 0 0-5.333-.002l-.704.704a3.953 3.953 0 0 0-3.892 1.021 4.034 4.034 0 0 0 0 5.676l.833.839V34H6v2h3.05a3.5 3.5 0 1 0 4.899 0h20.102a3.5 3.5 0 1 0 4.899 0H42v-2h-4v-3h.066C40.24 31 42 29.224 42 27.033c0-2.19-1.761-3.967-3.934-3.967H20.11a.307.307 0 0 1-.218-.09l-.366-.37.369-.367a3.77 3.77 0 0 0 .001-5.333l-1.8-1.8ZM36 34v-3H17.072c-.299 0-.585-.12-.797-.333L11 25.357V34h25ZM18.117 21.188l.364-.364a1.77 1.77 0 0 0 0-2.504l-1.8-1.8a1.771 1.771 0 0 0-2.504-.002l-.35.35 4.29 4.32Zm19.95 3.878H20.11a2.307 2.307 0 0 1-1.636-.68l-6.106-6.148a1.953 1.953 0 0 0-2.782 0 2.034 2.034 0 0 0 0 2.857L17.438 29h20.628C39.12 29 40 28.135 40 27.033s-.882-1.967-1.934-1.967ZM13 38.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM36.5 40a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineObservation);
export default ForwardRef;
