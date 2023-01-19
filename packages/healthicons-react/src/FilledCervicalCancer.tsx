import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledCervicalCancer = (
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
        d="M22.72 11.4c-.05 0-.1.021-.135.059a1.35 1.35 0 0 0-.045 1.792L24 14.955l1.46-1.704a1.35 1.35 0 0 0-.044-1.792.187.187 0 0 0-.136-.059h-2.56Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M37.295 6h-26.59C7.579 13.848 5.992 20.106 6 25.852c.008 5.614 1.538 10.66 4.504 16.148h26.992c2.966-5.489 4.496-10.534 4.504-16.148.008-5.746-1.579-12.004-4.705-19.852ZM25.153 16.3l1.582-1.845c1.05-1.226 1.004-3.102-.107-4.269A1.861 1.861 0 0 0 25.28 9.6h-2.56c-.505 0-.99.21-1.347.586-1.112 1.167-1.159 3.043-.107 4.27l1.581 1.844-3.77 4.398 1.274 1.204 3.65-4.257 3.648 4.257 1.274-1.204-3.77-4.398Zm-.296 15.246 7.022-7.373-1.212-1.273-6.667 7-6.667-7-1.212 1.273 7.022 7.373V42h1.714V31.546Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledCervicalCancer);
export default ForwardRef;
