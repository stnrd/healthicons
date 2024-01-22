import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLactoseFree = (
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
        d="M27.667 13.043 30 22.174v13.392C30 36.91 28.955 38 27.667 38h-7.334C19.045 38 18 36.91 18 35.565V22.174l2.333-9.13s-1.166-.61-1.166-1.827S19.75 10 21.5 10h5c1.75 0 2.333 0 2.333 1.217 0 1.218-1.166 1.826-1.166 1.826Zm-7.386 8.283 2.382-9.323-.006-.003h2.686l-.006.003L28 22.425v.373l-.053-.001a7.646 7.646 0 0 1-1.08-.12c-.733-.138-1.264-.363-1.502-.586-1.41-1.316-3.28-1.148-4.232-.97a8.65 8.65 0 0 0-.852.205Zm.059-9.292h.002-.002Zm7.32 0h-.002.002ZM28 24.798V35a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V23.553s2.667-1.245 4 0c1.333 1.245 4 1.245 4 1.245ZM10.293 9.793a1 1 0 0 1 1.414 0l5.5 5.5a1 1 0 0 1-1.414 1.414l-5.5-5.5a1 1 0 0 1 0-1.414Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m37.293 38.707-9-9 1.414-1.414 9 9-1.414 1.414Z"
        fill="#000"
      />
      <path d="M21 11h6v2h-6v-2Z" fill="#000" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgLactoseFree);
export default ForwardRef;
