import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineChartCuredIncreasing = (
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
        d="M38.18 14.017a1 1 0 0 1 .803 1.164c-1.457 7.928-4.976 13.426-9.935 16.921C24.112 35.582 17.858 37 11.052 37H7a1 1 0 1 1 0-2h4.052c6.552 0 12.354-1.368 16.843-4.532 4.467-3.148 7.743-8.15 9.122-15.649a1 1 0 0 1 1.164-.803Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M38.616 13.03a1 1 0 0 1 .644.505l2.625 5a1 1 0 1 1-1.77.93l-2.102-4.004-3.447 2.364a1 1 0 1 1-1.132-1.65l4.376-3a1 1 0 0 1 .806-.146ZM8 6v34h34v2H7a1 1 0 0 1-1-1V6h2Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M17.073 6.74A2.524 2.524 0 0 1 18.857 6h2.286a2.524 2.524 0 0 1 2.524 2.524v2.81h2.81A2.524 2.524 0 0 1 29 13.856v2.286a2.524 2.524 0 0 1-2.524 2.524h-2.81v2.81A2.524 2.524 0 0 1 21.144 24h-2.286a2.524 2.524 0 0 1-2.524-2.524v-2.81h-2.81A2.524 2.524 0 0 1 11 16.144v-2.286a2.524 2.524 0 0 1 2.524-2.524h2.81v-2.81c0-.669.265-1.31.739-1.784ZM18.857 8a.524.524 0 0 0-.524.524v3.81a1 1 0 0 1-1 1h-3.81a.524.524 0 0 0-.523.523v2.286a.524.524 0 0 0 .524.524h3.81a1 1 0 0 1 1 1v3.81a.524.524 0 0 0 .523.523h2.286a.524.524 0 0 0 .524-.524v-3.81a1 1 0 0 1 1-1h3.81a.524.524 0 0 0 .523-.523v-2.286a.524.524 0 0 0-.524-.524h-3.81a1 1 0 0 1-1-1v-3.81A.524.524 0 0 0 21.144 8h-2.286Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineChartCuredIncreasing);
export default ForwardRef;
