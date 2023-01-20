import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAmbulance = (
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
        d="M4 17a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v2h5.718a3 3 0 0 1 2.035.796l5.282 4.875A3 3 0 0 1 44 26.876V35h-6v-2h4v-6.124a1 1 0 0 0-.322-.735l-5.282-4.876a1 1 0 0 0-.678-.265H30v12h2v2H15v-2h13V17a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16h3v2H4V17Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM35 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM43 28H29v-2h14v2ZM16 27v-8h2v8h-2ZM33 16a1 1 0 0 1 1 1v3h-2v-3a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 24h-8v-2h8v2ZM35 20h-4v-2h4v2ZM33 13.5a1 1 0 0 1-1-1V11a1 1 0 1 1 2 0v1.5a1 1 0 0 1-1 1ZM36.5 17a1 1 0 0 1 1-1H39a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1ZM35.759 14.171a1 1 0 0 1 .07-1.412l.914-.828a1 1 0 1 1 1.343 1.482l-.914.828a1 1 0 0 1-1.413-.07Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAmbulance);
export default ForwardRef;
