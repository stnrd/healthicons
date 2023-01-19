import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlinePharmacyAlt = (
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
        d="M23.87 16.503h2.63a1 1 0 0 0 0-2h-2.63c-.349 0-.755.057-1.15.25-1.424.695-2.23 1.897-2.673 3.068-.15.395-.261.795-.343 1.182h2.058c.045-.16.096-.318.155-.475.322-.852.845-1.57 1.68-1.978a.637.637 0 0 1 .274-.047Zm-5.87 3.5c-.552 0-1.013.456-.863.988.577 2.059 2.926 3.661 5.863 3.961v1.558c-.695.017-1.417.073-2.03.251-.478.14-.985.378-1.373.814-.406.456-.597 1.032-.597 1.675s.19 1.22.596 1.677c.388.437.895.677 1.374.817.32.093.67.153 1.03.191v-2.013a3.4 3.4 0 0 1-.47-.098c-.27-.08-.389-.168-.438-.224-.032-.036-.092-.117-.092-.35 0-.23.06-.31.09-.345.05-.056.168-.145.44-.224.383-.111.877-.153 1.47-.169v5.491h-3v2h8v-2h-3v-5.537c1.102-.086 1.995-.328 2.667-.761.945-.61 1.333-1.517 1.333-2.48a2.93 2.93 0 0 0-.37-1.471c1.124-.71 1.927-1.672 2.233-2.763.15-.532-.31-.988-.863-.988H18Zm8.583 6.02c-.283.183-.774.357-1.583.435v-1.506a9.187 9.187 0 0 0 1.771-.356c.165.157.229.348.229.63 0 .37-.112.601-.417.797Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M32 32h10V16H32V6H16v10H6v16h10v10h16V32Zm-2 8V30h10V18H30V8H18v10H8v12h10v10h12Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlinePharmacyAlt);
export default ForwardRef;
