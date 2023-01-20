import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPharmacyAlt = (
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
        d="M16 32v10h16V32h10V16H32V6H16v10H6v16h10Zm10.5-15.497h-2.63a.637.637 0 0 0-.272.047c-.835.407-1.359 1.126-1.68 1.978-.06.157-.111.316-.156.475h-2.058c.082-.387.193-.787.343-1.182.442-1.171 1.249-2.373 2.674-3.069.394-.192.8-.249 1.15-.25h2.63a1 1 0 0 1 0 2Zm-8.5 3.5c-.552 0-1.013.456-.863.988.577 2.059 2.926 3.661 5.863 3.961v1.558c-.695.017-1.417.073-2.03.251-.478.14-.985.378-1.373.814-.406.456-.597 1.032-.597 1.675s.19 1.22.596 1.677c.388.437.895.677 1.374.817.32.093.67.153 1.03.191v-2.013a3.4 3.4 0 0 1-.47-.098c-.27-.08-.389-.168-.438-.224-.032-.036-.092-.117-.092-.35 0-.23.06-.31.09-.345.05-.056.168-.145.44-.224.383-.111.877-.153 1.47-.169v5.491h-3v2h8v-2h-3v-5.537c1.102-.086 1.995-.328 2.667-.761.945-.61 1.333-1.517 1.333-2.48 0-.523-.115-1.026-.37-1.471 1.124-.71 1.927-1.672 2.233-2.763.15-.532-.31-.988-.863-.988H18Zm7 6.455c.809-.078 1.3-.252 1.583-.434.305-.197.417-.428.417-.799 0-.281-.064-.472-.229-.63a9.187 9.187 0 0 1-1.77.357v1.506Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPharmacyAlt);
export default ForwardRef;
