import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineAmbulance = (
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
        d="M4 17a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v2h5.718a3 3 0 0 1 2.035.796l5.282 4.875A3 3 0 0 1 44 26.876V35h-6v-2h4v-6.124a1 1 0 0 0-.322-.735l-5.282-4.876a1 1 0 0 0-.678-.265H30v12h2v2H15v-2h13V17a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16h3v2H4V17Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M12 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm23-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8-10H29v-2h14v2Zm-27-1v-8h2v8h-2Zm17-11a1 1 0 0 1 1 1v3h-2v-3a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M21 24h-8v-2h8v2Zm14-4h-4v-2h4v2Zm-2-6.5a1 1 0 0 1-1-1V11a1 1 0 1 1 2 0v1.5a1 1 0 0 1-1 1Zm3.5 3.5a1 1 0 0 1 1-1H39a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1Zm-.741-2.829a1 1 0 0 1 .07-1.412l.914-.828a1 1 0 1 1 1.343 1.482l-.914.828a1 1 0 0 1-1.413-.07Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineAmbulance);
export default ForwardRef;
