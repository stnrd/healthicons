import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAccidentAndEmergency = (
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
      <path d="M20.862 19.532a1 1 0 0 1 .868 1.116l-.904 7.238a1 1 0 0 1-1.985-.248l.905-7.238a1 1 0 0 1 1.116-.868Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm8.454 13.662c.195-1.656 1.392-3.048 3.035-3.332 2.55-.44 4.59-.437 7.041-.008 1.635.286 2.82 1.675 3.015 3.323L32 32H16l1.454-12.338ZM15 36v-2h18v2H15Zm-1.955-11a11.17 11.17 0 0 1 0-2H10v2h3.045Zm.966-5.613a10.98 10.98 0 0 1 1.001-1.73l-2.636-1.523-1 1.732 2.635 1.521Zm3.645-4.375c.543-.383 1.122-.72 1.732-1.001l-1.522-2.635-1.732 1 1.522 2.636ZM23 13.045a11.17 11.17 0 0 1 2 0V10h-2v3.045Zm5.613.966c.609.282 1.188.618 1.73 1.001l1.523-2.636-1.732-1-1.521 2.635Zm4.375 3.645c.383.543.72 1.122 1.001 1.732l2.635-1.522-1-1.732-2.636 1.522ZM34.955 23a11.17 11.17 0 0 1 0 2H38v-2h-3.045Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAccidentAndEmergency);
export default ForwardRef;
