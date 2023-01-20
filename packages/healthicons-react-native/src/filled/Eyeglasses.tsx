import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEyeglasses = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        d="M38.392 31c-2.597 5.328-8.066 9-14.392 9-6.326 0-11.795-3.672-14.391-9H7.412c2.73 6.464 9.13 11 16.588 11s13.857-4.536 16.588-11h-2.196ZM12.381 13C15.297 9.92 19.424 8 24 8s8.703 1.92 11.619 5h2.63C34.957 8.742 29.799 6 24 6c-5.799 0-10.957 2.742-14.249 7h2.63ZM15 24c1.105 0 2-1.12 2-2.5s-.895-2.5-2-2.5-2 1.12-2 2.5.895 2.5 2 2.5ZM35 21.5c0 1.38-.895 2.5-2 2.5s-2-1.12-2-2.5.895-2.5 2-2.5 2 1.12 2 2.5Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.683 19.38a4.015 4.015 0 0 0-.026-.98h2.686a4.015 4.015 0 0 0-.026.98l.572 6A4 4 0 0 0 29.87 29H38a4 4 0 0 0 4-4v-5h1v-5H29.3c-1.224 0-2.31.546-3.04 1.4h-4.52A3.986 3.986 0 0 0 18.7 15H5v5h1v5a4 4 0 0 0 4 4h8.13a4 4 0 0 0 3.981-3.62l.572-6ZM10 17a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8.13a2 2 0 0 0 1.99-1.81l.572-6A2 2 0 0 0 18.7 17H10Zm17.308 2.19A2 2 0 0 1 29.3 17H38a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8.13a2 2 0 0 1-1.99-1.81l-.572-6Z"
        fill="#333"
      />
      <Path
        d="M29.35 33.437a1 1 0 1 0-.7-1.874c-2.06.768-3.527 1.146-4.877 1.162-1.327.017-2.628-.315-4.345-1.129a1 1 0 0 0-.856 1.808c1.89.895 3.499 1.342 5.226 1.321 1.703-.021 3.432-.498 5.551-1.288Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgEyeglasses);
export default ForwardRef;
