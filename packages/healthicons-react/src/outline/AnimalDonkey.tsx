import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAnimalDonkey = (
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
        d="M33.19 39.167a.025.025 0 0 1-.014.015m.014-.015-.014.015m.014-.015c.51-1.737 3.41-1.167 1.844-5.192.113-1.14-1.844-.975-2.434-2.665-.59-1.69-3.545 1.357-4.748 1.69-2.352 1.5-4.694 1.733-6.88-.69-1.224 1.033-.68 2.904-.572 5.69.066 1.702-.429 3-.429 3H15c0-2.5 1.8-1.833 1.8-1.833l1-2.707-1-6.707-2.8-7.836-2.381 3.304a1.72 1.72 0 0 1-1.271.58H8.604c-.68 0-1.305-.425-1.61-1.092l-.804-1.766a2.135 2.135 0 0 1 .17-2.068l4.196-6.13c.095-.142.236-.228.36-.333-.225-.136-.45-.26-.636-.463-.922-1.013-1.035-5.58-.343-6.729a.43.43 0 0 1 .697-.074c2.449 2.68 2.366 7.266 5.198 7.716l4.568 5.013h13.253c2.858 0 5.507 1.556 7.093 4.167l1.103 1.815c.276.457.163 1.068-.248 1.377-.669.208-1.618.798-2.103-.006-1.227-2.018-1.986-2.525-2.898-3.278l2.256 10.025L36.6 41h-5.1c0-2.395 1.508-1.736 1.676-1.818"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAnimalDonkey);
export default ForwardRef;
