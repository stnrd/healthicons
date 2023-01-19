import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineSyringeVaccine = (
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
      <path fill="#fff" d="M0 0h48v48H0z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M6.818 14.5a1.157 1.157 0 0 1 0-1.636l6.546-6.546A1.157 1.157 0 1 1 15 7.955l-.818.817 4.09 4.09 3.273-3.272a1.157 1.157 0 1 1 1.637 1.636l-1.637 1.637 13.91 13.91a5.787 5.787 0 0 1 1.295 6.205l1.159 1.159c.605.605.805 1.463.6 2.235l2.673 2.673a1.157 1.157 0 1 1-1.637 1.637l-2.673-2.673a2.313 2.313 0 0 1-2.236-.6l-1.158-1.158a5.787 5.787 0 0 1-6.205-1.296l-2.14-2.14 6.767-6.768-11.77-11.77-5.353 5.354L17.147 22h-2.829l-.955-.955-1.636 1.636a1.157 1.157 0 1 1-1.636-1.636l3.273-3.273-4.09-4.09-.82.818a1.157 1.157 0 0 1-1.636 0Zm5.95-4.313 4.09 4.09-2.08 2.08-4.09-4.09 2.08-2.08ZM28.687 33.54l-.504-.504 5.353-5.354.504.504a3.787 3.787 0 0 1 .848 4.062l-2.14 2.14a3.786 3.786 0 0 1-4.061-.848Zm6.768 1.414a5.144 5.144 0 0 1-.229.216l.824.824a.314.314 0 1 0 .445-.444l-.824-.824a5.86 5.86 0 0 1-.216.228Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M16 28a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M8.66 37.689A12.123 12.123 0 0 0 15.5 42a12.122 12.122 0 0 0 6.84-4.31A12.35 12.35 0 0 0 25 29.997V26.4c0-.637-.25-1.247-.695-1.697a2.361 2.361 0 0 0-1.68-.703H8.376c-.63 0-1.234.253-1.68.703A2.413 2.413 0 0 0 6 26.4v3.598a12.35 12.35 0 0 0 2.66 7.69ZM23 29.999v.004a10.352 10.352 0 0 1-2.228 6.445 10.13 10.13 0 0 1-5.273 3.492 10.13 10.13 0 0 1-5.271-3.492A10.35 10.35 0 0 1 8 30.003V26.4c0-.113.045-.217.117-.29a.362.362 0 0 1 .257-.11h14.252c.092 0 .185.037.257.11a.413.413 0 0 1 .117.29v3.598Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineSyringeVaccine);
export default ForwardRef;
