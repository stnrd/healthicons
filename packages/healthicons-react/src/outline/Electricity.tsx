import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgElectricity = (
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
      <path d="m25 12-6 9h4v6l6-9h-4v-6Z" fill="#000" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.91 19.273c-.3 2.567-1.334 4.999-2.983 7.015C33.965 27.463 31.52 30.82 31 33H17c-.52-2.182-2.968-5.539-3.93-6.715a13.568 13.568 0 0 1-2.98-7.017 13.47 13.47 0 0 1 1.292-7.494 13.814 13.814 0 0 1 5.166-5.67A14.215 14.215 0 0 1 24.002 4c2.638 0 5.222.73 7.454 2.107a13.813 13.813 0 0 1 5.164 5.671 13.47 13.47 0 0 1 1.29 7.495ZM29.583 31H18.416c-.426-.983-.995-1.968-1.525-2.805a34.85 34.85 0 0 0-2.272-3.175 11.568 11.568 0 0 1-2.542-5.983 11.469 11.469 0 0 1 1.1-6.382 11.814 11.814 0 0 1 4.42-4.848A12.215 12.215 0 0 1 24.002 6c2.27 0 4.49.629 6.405 1.81a11.813 11.813 0 0 1 4.418 4.848 11.469 11.469 0 0 1 1.098 6.383 11.568 11.568 0 0 1-2.544 5.981c-.53.646-1.429 1.844-2.271 3.175-.53.837-1.098 1.82-1.524 2.803Z"
        fill="#000"
      />
      <path
        d="M17 36a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 39h14v3a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2v-3Zm2 2h10v1H19v-1Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgElectricity);
export default ForwardRef;
