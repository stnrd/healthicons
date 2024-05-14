import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVascularSurgery = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 8a2 2 0 0 1 2-2h28.074L27.7 14.29l.005.005L12 30h9.552a6 6 0 0 0 4.197-1.713l3.65-3.574A2 2 0 0 0 30 23.284v-.456a2 2 0 0 1 .586-1.414L32.7 19.3l.007.007 5.5-5.5a1 1 0 0 0-1.414-1.415l-4.482 4.482-2.617-1.744L38.917 6H40a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Zm10.828 20h4.724a4 4 0 0 0 2.798-1.142L28 23.284v-.456A4 4 0 0 1 29.172 20l1.689-1.69-2.606-1.736L16.828 28Zm9.88-5.293a1 1 0 0 0-1.415-1.414l-3 3a1 1 0 0 0 1.414 1.414l3-3Zm-4.935 11.85a1 1 0 1 1 1.7 1.055 1 1 0 0 1-1.7-1.056Zm7 1A1 1 0 1 1 30.024 37H38v2H10v-2h3.222a1 1 0 1 1 .802 0h15.198a1 1 0 0 1-.448-1.444ZM29.627 32H38v2H10v-2h16.799l7.288-7.288 1.414 1.414L29.627 32Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVascularSurgery);
export default ForwardRef;
