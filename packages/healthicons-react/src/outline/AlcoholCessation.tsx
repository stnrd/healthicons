import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAlcoholCessation = (
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
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0 2c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.293 9.793a1 1 0 0 1 1.414 0l7.5 7.5a1 1 0 0 1-1.414 1.414l-7.5-7.5a1 1 0 0 1 0-1.414ZM27.293 27.293a1 1 0 0 1 1.414 0l10 10-1.414 1.414-10-10a1 1 0 0 1 0-1.414Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 26v5h-6v-5h6Zm-5.81-2h5.283c-.116-1.314-.418-2.225-1.18-2.973a2.504 2.504 0 0 1-.753-1.788V12h-1.03v7.227c0 .723-.313 1.402-.846 1.872-.833.735-1.262 1.666-1.474 2.901Zm.151-4.4a.496.496 0 0 0 .17-.373V10.7c0-.387.32-.7.714-.7h3.6c.395 0 .715.313.715.7v8.54c0 .134.055.264.152.36 1.26 1.234 1.664 2.752 1.791 4.4.05.65.058 1.32.058 2v.423l-.001.42.46 9.507c0 .911-.754 1.65-1.683 1.65h-6.74c-.87 0-1.577-.692-1.577-1.546v-9.368c0-.365.003-.727.012-1.086.018-.683.06-1.353.153-2 .239-1.676.814-3.199 2.177-4.4Zm5.64 16.4-.146-3H21v3h5.98Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAlcoholCessation);
export default ForwardRef;
