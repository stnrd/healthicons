import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTally = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path d="M16 15a1 1 0 1 1 2 0v2.43l3 2.56V15a1 1 0 1 1 2 0v6.698l3 2.56V15a1 1 0 1 1 2 0v10.965l3 2.56V15a1 1 0 1 1 2 0v15.233l3.12 2.662-1.3 1.521L33 32.862V33a1 1 0 1 1-2 0v-1.845l-3-2.56V33a1 1 0 1 1-2 0v-6.112l-3-2.56V33a1 1 0 1 1-2 0V22.62l-3-2.56V33a1 1 0 1 1-2 0V18.353l-3.767-3.215 1.299-1.521L16 15.723V15Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.157 44c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20Zm0-2c9.941 0 18-8.059 18-18s-8.059-18-18-18-18 8.059-18 18 8.059 18 18 18Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTally);
export default ForwardRef;
